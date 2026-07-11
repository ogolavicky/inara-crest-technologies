from drf_spectacular.utils import OpenApiParameter, extend_schema
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.domains.api.serializers import DomainSearchSerializer
from apps.domains.clients import NamecheapAPIError
from apps.domains.services import DomainSearchService


@extend_schema(
    tags=["Domains"],
    summary="Search domain availability",
    parameters=[
        OpenApiParameter(
            name="domain",
            type=str,
            location=OpenApiParameter.QUERY,
            required=True,
            description="Fully qualified domain name (e.g. example.com).",
        )
    ],
)
class DomainSearchAPIView(APIView):
    """
    Search domain availability.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = DomainSearchSerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)

        try:
            result = DomainSearchService.search(serializer.validated_data["domain"])
        except NamecheapAPIError as exc:
            return Response(
                {
                    "status": "error",
                    "message": str(exc),
                },
                status=status.HTTP_502_BAD_GATEWAY,
            )

        return Response(
            {
                "status": "success",
                "domain": result.domain,
                "available": result.available,
                "premium": result.premium,
                "registrar": result.registrar,
            }
        )
