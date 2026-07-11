from django.core.management.base import BaseCommand

from apps.domains.models import TLD

DEFAULT_TLDS = [
    ("com", "Commercial", True),
    ("net", "Network", False),
    ("org", "Organization", False),
    ("io", "Technology", False),
    ("co.ke", "Kenya Commercial", True),
    ("ac.ke", "Kenya Academic", False),
]


class Command(BaseCommand):
    help = "Seed default TLDs."

    def handle(self, *args, **options):
        for order, (extension, name, featured) in enumerate(DEFAULT_TLDS):
            TLD.objects.update_or_create(
                extension=extension,
                defaults={
                    "display_name": name,
                    "registration_order": order,
                    "is_featured": featured,
                    "is_active": True,
                },
            )

        self.stdout.write(self.style.SUCCESS("Default TLDs seeded successfully."))
