from apps.domains.clients.namecheap import NamecheapClient

from .base import BaseRegistrarProvider


class NamecheapProvider(BaseRegistrarProvider):
    """
    Business adapter for the Namecheap Reseller API.
    """

    def __init__(self):
        self.client = NamecheapClient()

    def check_domain(self, domain_name: str):
        return self.client.check_domain(domain_name)

    def register_domain(self, domain_name: str):
        raise NotImplementedError

    def renew_domain(self, domain_name: str):
        raise NotImplementedError

    def transfer_domain(self, domain_name: str):
        raise NotImplementedError
