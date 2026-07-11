from decimal import Decimal

from django.db import models

from apps.domains.enums import PriceType


class DomainPrice(models.Model):
    """
    Cached registrar pricing for a TLD.
    """

    registrar = models.ForeignKey(
        "domains.Registrar",
        on_delete=models.CASCADE,
        related_name="prices",
    )

    tld = models.ForeignKey(
        "domains.TLD",
        on_delete=models.CASCADE,
        related_name="prices",
    )

    price_type = models.CharField(
        max_length=20,
        choices=PriceType.choices,
    )

    years = models.PositiveSmallIntegerField()

    currency = models.CharField(
        max_length=3,
        default="USD",
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=Decimal("0.00"),
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = (
            "tld",
            "price_type",
            "years",
        )

        constraints = [
            models.UniqueConstraint(
                fields=(
                    "registrar",
                    "tld",
                    "price_type",
                    "years",
                ),
                name="unique_domain_price",
            )
        ]

    def __str__(self):
        return f"{self.tld} {self.price_type} {self.years} year(s)"
