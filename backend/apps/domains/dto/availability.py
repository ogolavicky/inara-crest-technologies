from dataclasses import dataclass


@dataclass(frozen=True)
class DomainAvailabilityResult:
    """
    Provider-independent domain availability result.
    """

    domain: str
    available: bool
    premium: bool
    registrar: str
