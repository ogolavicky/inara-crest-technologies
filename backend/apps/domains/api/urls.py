from django.urls import path

from .views import DomainHealthAPIView, DomainSearchAPIView

app_name = "domains"

urlpatterns = [
    path(
        "health/",
        DomainHealthAPIView.as_view(),
        name="health",
    ),
    path(
        "search/",
        DomainSearchAPIView.as_view(),
        name="search",
    ),
]
