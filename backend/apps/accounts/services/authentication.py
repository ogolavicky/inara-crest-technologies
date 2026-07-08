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
