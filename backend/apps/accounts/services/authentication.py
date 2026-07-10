from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.tokens import RefreshToken


class AuthenticationService:
    """
    Business logic related to authentication.
    """

    @staticmethod
    def generate_tokens(user):
        """
        Generate JWT access and refresh tokens.
        """

        refresh = RefreshToken.for_user(user)

        return {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user_id": user.id,
        }

    @staticmethod
    def blacklist_refresh_token(refresh_token):
        """
        Blacklist a refresh token.
        """

        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except TokenError as exc:
            raise ValueError("Invalid or expired refresh token.") from exc
