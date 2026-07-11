import requests
from defusedxml import ElementTree
from django.conf import settings

from apps.domains.dto import DomainAvailabilityResult

from .exceptions import NamecheapAPIError


class NamecheapClient:
    """
    Low-level client for the Namecheap XML API.
    """

    def __init__(self):
        self.base_url = settings.NAMECHEAP_API_URL

        self.api_user = settings.NAMECHEAP_API_USER
        self.api_key = settings.NAMECHEAP_API_KEY
        self.username = settings.NAMECHEAP_USERNAME
        self.client_ip = settings.NAMECHEAP_CLIENT_IP

        self.timeout = 30

    @property
    def auth_params(self):
        """
        Authentication parameters required
        by every Namecheap request.
        """

        return {
            "ApiUser": self.api_user,
            "ApiKey": self.api_key,
            "UserName": self.username,
            "ClientIp": self.client_ip,
        }

    def request(self, command: str, **params):
        """
        Execute a Namecheap command.
        """

        payload = {
            **self.auth_params,
            "Command": command,
            **params,
        }

        response = requests.get(
            self.base_url,
            params=payload,
            timeout=self.timeout,
        )

        response.raise_for_status()

        return self._parse_response(response.text)

    def _parse_response(self, xml: str):
        """
        Parse the XML response from Namecheap.
        """

        root = ElementTree.fromstring(xml)

        status = root.attrib.get("Status")

        if status != "OK":
            errors = root.findall(".//{*}Error")

            messages = []

            for error in errors:
                number = error.attrib.get("Number", "Unknown")
                text = (error.text or "").strip()
                messages.append(f"[{number}] {text}")

            raise NamecheapAPIError("; ".join(messages))

        return root

    def ping(self):
        """
        Simple API connectivity test.
        """

        return self.request("namecheap.users.getBalances")

    def check_domain(self, domain_name: str):
        """
        Check domain availability.
        """

        root = self.request(
            "namecheap.domains.check",
            DomainList=domain_name,
        )

        result = root.find(".//DomainCheckResult")

        return DomainAvailabilityResult(
            domain=result.attrib["Domain"],
            available=result.attrib["Available"].lower() == "true",
            premium=result.attrib.get("IsPremiumName", "false").lower() == "true",
            registrar="namecheap",
        )
