from django.apps import AppConfig


class DomainsConfig(AppConfig):
    """
    Configuration for the Domains application.
    """

    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.domains"
    verbose_name = "Domains"

    def ready(self):
        """
        Load application infrastructure.
        """
        try:
            import apps.domains.registry  # noqa: F401
            import apps.domains.signals  # noqa: F401
        except ImportError:
            pass