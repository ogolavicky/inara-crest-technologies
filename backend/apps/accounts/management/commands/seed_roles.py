from django.contrib.auth.models import Group
from django.core.management.base import BaseCommand

DEFAULT_GROUPS = [
    "Customer",
    "Support",
    "Billing",
    "Sales",
    "Reseller",
    "Platform Administrator",
]


class Command(BaseCommand):
    help = "Create the default authorization groups."

    def handle(self, *args, **options):
        self.stdout.write("Seeding authorization groups...\n")

        for group_name in DEFAULT_GROUPS:
            group, created = Group.objects.get_or_create(name=group_name)

            if created:
                self.stdout.write(self.style.SUCCESS(f"✓ Created group: {group_name}"))
            else:
                self.stdout.write(
                    self.style.WARNING(f"• Group already exists: {group_name}")
                )

        self.stdout.write(self.style.SUCCESS("\nAuthorization groups are ready."))
