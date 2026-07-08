from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.accounts.services import RegistrationService

User = get_user_model()


class RegistrationSerializer(serializers.Serializer):
    """
    Serializer for registering a new user.
    """

    email = serializers.EmailField()

    first_name = serializers.CharField(
        required=False,
        allow_blank=True,
    )

    last_name = serializers.CharField(
        required=False,
        allow_blank=True,
    )

    password = serializers.CharField(
        write_only=True,
        min_length=8,
    )

    confirm_password = serializers.CharField(
        write_only=True,
    )

    def validate_email(self, value):
        """
        Ensure the email is unique.
        """
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")

        return value

    def validate(self, attrs):
        """
        Ensure the passwords match.
        """
        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                {"confirm_password": ["Passwords do not match."]}
            )

        return attrs

    def create(self, validated_data):
        """
        Register a new user using the registration service.
        """
        validated_data.pop("confirm_password")

        return RegistrationService.register_user(**validated_data)
