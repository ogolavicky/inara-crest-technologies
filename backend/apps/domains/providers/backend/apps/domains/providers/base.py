from abc import ABC, abstractmethod


class BaseRegistrarProvider(ABC):
    """
    Base interface for all registrar providers.
    """

    @abstractmethod
    def check_domains(self, domains: list[str]):
        """
        Check domain availability.
        """
        # DomainList=",".join(domains)
        return self.client.check_domains(domains)

    @abstractmethod
    def register_domain(self, domain_name: str):
        """
        Register a domain.
        """
        raise NotImplementedError

    @abstractmethod
    def renew_domain(self, domain_name: str):
        """
        Renew a domain.
        """
        raise NotImplementedError

    @abstractmethod
    def transfer_domain(self, domain_name: str):
        """
        Transfer a domain.
        """
        raise NotImplementedError
