import uuid

from django.conf import settings
from django.db import models

from .registrar import Registrar
from .tld import TLD


class Domain(models.Model):
    """
    Represents a registered or managed domain.
    """

    class Status(models.TextChoices):
        AVAILABLE = "available", "Available"
        PENDING = "pending", "Pending"
        ACTIVE = "active", "Active"
        EXPIRED = "expired", "Expired"
        TRANSFER = "transfer", "Transfer"
        SUSPENDED = "suspended", "Suspended"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="domains",
    )

    registrar = models.ForeignKey(
        Registrar,
        on_delete=models.PROTECT,
        related_name="domains",
    )

    tld = models.ForeignKey(
        TLD,
        on_delete=models.PROTECT,
        related_name="domains",
        null=True,
        blank=True,
    )

    domain_name = models.CharField(
        max_length=255,
        unique=True,
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING,
    )

    auto_renew = models.BooleanField(
        default=False,
    )

    expires_at = models.DateField(
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["domain_name"]
        verbose_name = "Domain"
        verbose_name_plural = "Domains"

    def __str__(self):
        return self.domain_name
