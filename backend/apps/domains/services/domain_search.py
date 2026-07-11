from apps.domains.models import Registrar
from apps.domains.providers import RegistrarProviderFactory


class DomainSearchService:
    """
    Business service responsible for domain availability searches.
    """

    @staticmethod
    def search(domain_name: str):
        registrar = Registrar.objects.get(slug="namecheap")

        provider = RegistrarProviderFactory.get_provider(registrar)

        return provider.check_domain(domain_name)
