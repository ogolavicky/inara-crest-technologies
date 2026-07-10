from django.db import models


class TLD(models.Model):
    """
    Represents a supported Top-Level Domain.
    """

    extension = models.CharField(
        max_length=20,
        unique=True,
        help_text="Example: com, org, net, co.ke",
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

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["extension"]
        verbose_name = "Top-Level Domain"
        verbose_name_plural = "Top-Level Domains"

    def __str__(self):
        return f".{self.extension}"
