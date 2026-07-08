"""
Central registry for all business permissions.

Every permission used throughout the platform should be defined here.
This module acts as the single source of truth for authorization.
"""

PERMISSION_REGISTRY = {
    "domains": [
        ("view_domain", "Can view domains"),
        ("register_domain", "Can register domains"),
        ("transfer_domain", "Can transfer domains"),
        ("renew_domain", "Can renew domains"),
        ("delete_domain", "Can delete domains"),
        ("manage_dns", "Can manage DNS records"),
    ],
    "hosting": [
        ("view_hosting", "Can view hosting accounts"),
        ("create_hosting", "Can provision hosting"),
        ("suspend_hosting", "Can suspend hosting"),
        ("terminate_hosting", "Can terminate hosting"),
        ("upgrade_hosting", "Can upgrade hosting"),
    ],
    "billing": [
        ("view_invoice", "Can view invoices"),
        ("create_invoice", "Can create invoices"),
        ("issue_refund", "Can issue refunds"),
        ("process_payment", "Can process payments"),
    ],
    "support": [
        ("view_ticket", "Can view support tickets"),
        ("assign_ticket", "Can assign tickets"),
        ("resolve_ticket", "Can resolve tickets"),
        ("close_ticket", "Can close tickets"),
    ],
    "reseller": [
        ("manage_reseller", "Can manage reseller accounts"),
        ("view_reseller_reports", "Can view reseller reports"),
    ],
    "platform": [
        ("manage_users", "Can manage users"),
        ("manage_roles", "Can manage roles"),
        ("view_audit_logs", "Can view audit logs"),
        ("manage_platform_settings", "Can manage platform settings"),
    ],
}
