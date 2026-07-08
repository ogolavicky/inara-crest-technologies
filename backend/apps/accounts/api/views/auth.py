from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.api.serializers import (
    CurrentUserSerializer,
    LoginSerializer,
)
from apps.accounts.services import AuthenticationService


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
