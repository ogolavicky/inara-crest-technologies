from django.conf import settings
from django.db import models


class Currency(models.TextChoices):
    USD = "USD", "US Dollar"
    KES = "KES", "Kenyan Shilling"
    EUR = "EUR", "Euro"


class Profile(models.Model):
    """Additional information about a user."""

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile",
    )

    phone_number = models.CharField(
        max_length=20,
        blank=True,
    )

    company = models.CharField(
        max_length=255,
        blank=True,
    )

    country = models.CharField(
        max_length=100,
        blank=True,
    )

    city = models.CharField(
        max_length=100,
        blank=True,
    )

    address = models.CharField(
        max_length=255,
        blank=True,
    )

    postal_code = models.CharField(
        max_length=20,
        blank=True,
    )

    timezone = models.CharField(
        max_length=100,
        default="UTC",
    )

    preferred_currency = models.CharField(
        max_length=3,
        choices=Currency.choices,
        default=Currency.USD,
    )

    avatar = models.ImageField(
        upload_to="avatars/",
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def __str__(self):
        return f"Profile for {self.user.email}"
