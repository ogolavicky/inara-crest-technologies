from apps.accounts.api.serializers import (CurrentUserSerializer,
                                           LoginSerializer, LogoutSerializer,
                                           ResendVerificationSerializer,
                                           VerifyEmailSerializer)
from apps.accounts.services import AuthenticationService
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenRefreshView


class LoginAPIView(APIView):
    """
    Authenticate a user and return JWT tokens.
    """

    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]

        tokens = AuthenticationService.generate_tokens(user)

        user_data = CurrentUserSerializer(user).data

        return Response(
            {
                "access": tokens["access"],
                "refresh": tokens["refresh"],
                "user": user_data,
            },
            status=status.HTTP_200_OK,
        )
class RefreshTokenAPIView(TokenRefreshView):
    """
    Exchange a valid refresh token for a new access token.

    Refresh token rotation and blacklisting are handled
    automatically by the SimpleJWT configuration.
    """

    pass

class CurrentUserAPIView(APIView):
    """
    Return information about the authenticated user.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = CurrentUserSerializer(request.user)

        return Response(serializer.data)

class LogoutAPIView(APIView):
    """
    Blacklist a refresh token and terminate the session.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = LogoutSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(
            status=status.HTTP_204_NO_CONTENT
        )
    

class VerifyEmailAPIView(APIView):
    """
    Verify a user's email address.
    """

    permission_classes = [AllowAny]

    def post(self, request):
        serializer = VerifyEmailSerializer(
            data=request.data,
        )

        serializer.is_valid(
            raise_exception=True,
        )

        return Response(
            {
                "message": (
                    "Email verified successfully."
                )
            },
            status=status.HTTP_200_OK,
        )

class ResendVerificationAPIView(APIView):
    """
    Send a new verification email.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ResendVerificationSerializer(
            data={},
            context={
                "request": request,
            },
        )

        serializer.is_valid(
            raise_exception=True,
        )

        serializer.save()

        return Response(
            {
                "message": (
                    "Verification email sent successfully."
                )
            },
            status=status.HTTP_200_OK,
        )