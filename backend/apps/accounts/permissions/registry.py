from .base import HasBusinessPermission


class CanRegisterDomain(HasBusinessPermission):
    app_label = "accounts"
    permission_codename = "register_domain"


class CanTransferDomain(HasBusinessPermission):
    permission_codename = "transfer_domain"


class CanRenewDomain(HasBusinessPermission):
    permission_codename = "renew_domain"


class CanManageHosting(HasBusinessPermission):
    permission_codename = "manage_hosting"


class CanProcessPayments(HasBusinessPermission):
    permission_codename = "process_payment"


class CanIssueRefunds(HasBusinessPermission):
    permission_codename = "issue_refund"


class CanManageResellers(HasBusinessPermission):
    permission_codename = "manage_reseller"
