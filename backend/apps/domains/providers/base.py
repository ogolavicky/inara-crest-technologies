from abc import ABC, abstractmethod


class BaseRegistrarProvider(ABC):
    """
    Base interface for all registrar providers.
    """

    @abstractmethod
    def check_domain(self, domain_name: str):
        """
        Check domain availability.
        """
        raise NotImplementedError

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
