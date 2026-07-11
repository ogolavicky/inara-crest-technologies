from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from django.core.management.base import BaseCommand

from apps.accounts.authorization.matrix import ROLE_PERMISSION_MATRIX
from apps.accounts.authorization.registry import PERMISSION_REGISTRY
from apps.accounts.models import AuthorizationPermission


class Command(BaseCommand):
    """
    Synchronize custom business permissions and assign them to groups.

    Running this command will:

    1. Create any missing permissions defined in PERMISSION_REGISTRY.
    2. Create any missing groups defined in ROLE_PERMISSION_MATRIX.
    3. Synchronize group permissions so they exactly match the matrix.
    """

    help = "Synchronize business permissions and role assignments."

    def handle(self, *args, **options):
        content_type = ContentType.objects.get_for_model(AuthorizationPermission)

        created_permissions = 0

        self.stdout.write(self.style.NOTICE("Synchronizing permissions...\n"))

        #
        # ------------------------------------------------------------------
        # Create custom permissions
        # ------------------------------------------------------------------
        #
        for module, permissions in PERMISSION_REGISTRY.items():
            self.stdout.write(f"{module}")

            for codename, name in permissions:
                permission, created = Permission.objects.get_or_create(
                    codename=codename,
                    content_type=content_type,
                    defaults={
                        "name": name,
                    },
                )

                if created:
                    created_permissions += 1

                    self.stdout.write(self.style.SUCCESS(f"  ✓ Created: {codename}"))
                else:
                    self.stdout.write(self.style.WARNING(f"  • Exists: {codename}"))

        #
        # ------------------------------------------------------------------
        # Build lookup dictionary
        # ------------------------------------------------------------------
        #
        permission_lookup = {
            permission.codename: permission
            for permission in Permission.objects.filter(content_type=content_type)
        }

        self.stdout.write("")
        self.stdout.write(self.style.NOTICE("Synchronizing groups...\n"))

        #
        # ------------------------------------------------------------------
        # Synchronize groups
        # ------------------------------------------------------------------
        #
        for group_name, permission_codes in ROLE_PERMISSION_MATRIX.items():
            group, _ = Group.objects.get_or_create(name=group_name)

            #
            # Always synchronize from scratch
            #
            group.permissions.clear()

            #
            # Administrator receives every permission
            #
            if "*" in permission_codes:
                group.permissions.set(permission_lookup.values())

            else:
                permissions = [
                    permission_lookup[codename]
                    for codename in permission_codes
                    if codename in permission_lookup
                ]

                group.permissions.set(permissions)

            self.stdout.write(
                self.style.SUCCESS(
                    f"✓ {group.name}: {group.permissions.count()} permission(s)"
                )
            )

        self.stdout.write("")
        self.stdout.write(
            self.style.SUCCESS(
                "Synchronization complete.\n"
                f"New permissions created: {created_permissions}"
            )
        )
