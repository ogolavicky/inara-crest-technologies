from apps.domains.models import Registrar

from .namecheap import NamecheapProvider


class RegistrarProviderFactory:
    """
    Returns the appropriate provider implementation for a registrar.
    """

    @staticmethod
    def get_provider(registrar: Registrar):
        providers = {
            "namecheap": NamecheapProvider,
        }

        provider_class = providers.get(registrar.slug)

        if provider_class is None:
            raise ValueError(
                f"No provider configured for registrar '{registrar.slug}'."
            )

        return provider_class()
