"""
Maps authorization groups to business permissions.

Every permission assignment in the platform should be defined here.
"""

ROLE_PERMISSION_MATRIX = {
    "Customer": {
        "view_domain",
        "register_domain",
        "transfer_domain",
        "renew_domain",
        "view_hosting",
        "view_invoice",
        "view_ticket",
    },
    "Support": {
        "view_domain",
        "view_hosting",
        "view_ticket",
        "assign_ticket",
        "resolve_ticket",
        "close_ticket",
    },
    "Billing": {
        "view_invoice",
        "create_invoice",
        "process_payment",
        "issue_refund",
    },
    "Sales": {
        "view_domain",
        "register_domain",
        "view_hosting",
        "create_hosting",
        "view_invoice",
    },
    "Reseller": {
        "view_domain",
        "register_domain",
        "transfer_domain",
        "renew_domain",
        "view_hosting",
        "create_hosting",
        "manage_reseller",
        "view_reseller_reports",
    },
    "Platform Administrator": {
        "*",
    },
}
