from apps.accounts.services import VerificationService
from django.contrib.auth import authenticate
from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()

    password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        user = authenticate(
            username=email,
            password=password,
        )

        if not user:
            raise serializers.ValidationError("Invalid email or password.")

        if not user.is_active:
            raise serializers.ValidationError("This account has been disabled.")

        attrs["user"] = user

        return attrs
    
class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        refresh = attrs.get("refresh")

        from apps.accounts.services import AuthenticationService

        try:
            AuthenticationService.blacklist_refresh_token(refresh)
        except ValueError as exc:
            raise serializers.ValidationError(
                {"refresh": [str(exc)]}
            )

        return attrs
    
class VerifyEmailSerializer(serializers.Serializer):
    token = serializers.CharField()

    def validate(self, attrs):
        token = attrs["token"]

        try:
            user = VerificationService.verify_token(token)
        except ValueError as exc:
            raise serializers.ValidationError(
                {
                    "token": [str(exc)]
                }
            )

        attrs["user"] = user

        return attrs
    
class ResendVerificationSerializer(serializers.Serializer):
    """
    Serializer for requesting a new verification email.
    """

    def save(self, **kwargs):
        user = self.context["request"].user

        try:
            VerificationService.resend_verification_email(
                user
            )
        except ValueError as exc:
            raise serializers.ValidationError(
                {
                    "detail": str(exc)
                }
            )

        return user