"""
Administration configuration for the Domains application.

Models will be registered here as they are introduced.
"""

from django.contrib import admin

from .models import (
    TLD,
    Domain,
    DomainPrice,
    Registrar,
)


@admin.register(Registrar)
class RegistrarAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "slug",
        "is_active",
    )

    search_fields = (
        "name",
        "slug",
    )

    list_filter = ("is_active",)

    ordering = ("name",)


@admin.register(Domain)
class DomainAdmin(admin.ModelAdmin):
    list_display = (
        "domain_name",
        "tld",
        "owner",
        "registrar",
        "status",
        "expires_at",
    )

    search_fields = (
        "domain_name",
        "owner__email",
    )

    list_filter = (
        "status",
        "registrar",
    )

    autocomplete_fields = (
        "owner",
        "registrar",
        "tld",
    )

    ordering = ("domain_name",)


@admin.register(TLD)
class TLDAdmin(admin.ModelAdmin):
    list_display = (
        "extension",
        "display_name",
        "is_active",
        "supports_dnssec",
        "supports_idn",
    )

    search_fields = (
        "extension",
        "display_name",
    )

    list_filter = (
        "is_active",
        "supports_dnssec",
        "supports_idn",
    )

    ordering = ("extension",)

    @admin.register(DomainPrice)
    class DomainPriceAdmin(admin.ModelAdmin):
        list_display = (
            "tld",
            "registrar",
            "price_type",
            "years",
            "currency",
            "price",
            "updated_at",
        )

        list_filter = (
            "registrar",
            "price_type",
            "currency",
        )

        search_fields = (
            "tld__extension",
            "registrar__name",
        )

        autocomplete_fields = (
            "registrar",
            "tld",
        )

        ordering = (
            "tld__extension",
            "price_type",
            "years",
        )
