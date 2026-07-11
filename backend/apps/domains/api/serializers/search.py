from rest_framework import serializers


class DomainSearchSerializer(serializers.Serializer):
    """
    Serializer for validating domain search requests.
    """

    domain = serializers.CharField(
        max_length=255,
    )

    def validate_domain(self, value):
        return value.strip().lower()
