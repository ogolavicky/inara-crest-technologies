from django.db import models


class TLD(models.Model):
    extension = models.CharField(
        max_length=20,
        unique=True,
    )

    display_name = models.CharField(
        max_length=50,
        blank=True,
    )

    is_active = models.BooleanField(
        default=True,
    )

    supports_dnssec = models.BooleanField(
        default=False,
    )

    supports_idn = models.BooleanField(
        default=False,
    )

    registration_order = models.PositiveIntegerField(
        default=0,
    )

    is_featured = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = (
            "registration_order",
            "extension",
        )
