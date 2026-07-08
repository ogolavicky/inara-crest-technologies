from rest_framework import serializers

from apps.accounts.models import User


class CurrentUserSerializer(serializers.ModelSerializer):
    """
    Serializer used to return information
    about the currently authenticated user.
    """

    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "first_name",
            "last_name",
            "is_active",
            "date_joined",
        )
        read_only_fields = fields
