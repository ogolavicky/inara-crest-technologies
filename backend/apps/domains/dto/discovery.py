from dataclasses import dataclass, field

from .availability import DomainAvailabilityResult


@dataclass(frozen=True)
class DomainDiscoveryResult:
    """
    Represents the results of a domain discovery search.
    """

    query: str

    results: list[DomainAvailabilityResult] = field(default_factory=list)
