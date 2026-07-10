"""
Permission registry for the Domains application.
"""

from apps.core.authorization.registry import permission_registry

permission_registry.register(
    app_label="domains",
    permissions=[
        (
            "view_domain",
            "Can view domains",
        ),
        (
            "add_domain",
            "Can add domains",
        ),
        (
            "change_domain",
            "Can modify domains",
        ),
        (
            "delete_domain",
            "Can delete domains",
        ),
        (
            "search_domain",
            "Can search domain availability",
        ),
        (
            "register_domain",
            "Can register domains",
        ),
        (
            "transfer_domain",
            "Can transfer domains",
        ),
        (
            "renew_domain",
            "Can renew domains",
        ),
        (
            "manage_dns",
            "Can manage DNS records",
        ),
    ],
)
