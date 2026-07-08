from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.api.serializers import (
    CurrentUserSerializer,
    RegistrationSerializer,
)
from apps.accounts.services import AuthenticationService


class RegistrationAPIView(APIView):
    """
    Register a new user.
    """

    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        tokens = AuthenticationService.generate_tokens(user)

        return Response(
            {
                "access": tokens["access"],
                "refresh": tokens["refresh"],
                "user": CurrentUserSerializer(user).data,
            },
            status=status.HTTP_201_CREATED,
        )
