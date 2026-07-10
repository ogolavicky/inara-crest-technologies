from drf_spectacular.utils import extend_schema
from rest_framework.response import Response
from rest_framework.views import APIView


@extend_schema(
    tags=["Domains"],
    summary="Domain module health check",
    description="Confirms that the Domains module is available.",
)
class DomainHealthAPIView(APIView):
    """
    Simple health check endpoint for the Domains application.
    """

    authentication_classes = []
    permission_classes = []

    def get(self, request):
        return Response(
            {
                "module": "domains",
                "status": "healthy",
                "service": "Maven Host",
            }
        )