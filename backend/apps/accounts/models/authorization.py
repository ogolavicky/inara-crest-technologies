from django.db import models


class AuthorizationPermission(models.Model):
    """
    Dummy model used solely to attach custom business permissions.
    """

    class Meta:
        verbose_name = "Authorization Permission"
        verbose_name_plural = "Authorization Permissions"

        default_permissions = ()

    def __str__(self):
        return "Authorization Permissions"
