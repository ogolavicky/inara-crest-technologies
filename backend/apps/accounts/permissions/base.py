from rest_framework.permissions import BasePermission


class HasBusinessPermission(BasePermission):
    """
    Base permission class for business permissions.
    """

    permission_codename = None

    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False

        if not self.permission_codename:
            return False

        return request.user.has_perm(
            f"accounts.{self.permission_codename}"
        )