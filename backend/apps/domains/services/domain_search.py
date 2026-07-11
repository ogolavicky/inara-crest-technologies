from apps.domains.dto import DomainDiscoveryResult
from apps.domains.models import TLD, Registrar
from apps.domains.providers import RegistrarProviderFactory


class DomainLookupService:
    """
    Business service responsible for domain lookup and discovery.
    """

    @staticmethod
    def discover(query: str) -> DomainDiscoveryResult:
        """
        Search a domain across all active TLDs.
        """

        registrar = Registrar.objects.get(slug="namecheap")

        provider = RegistrarProviderFactory.get_provider(registrar)

        tlds = TLD.objects.filter(is_active=True).values_list("extension", flat=True)

        domains = [f"{query}.{tld}" for tld in tlds]

        results = provider.check_domains(domains)

        return DomainDiscoveryResult(
            query=query,
            results=results,
        )
