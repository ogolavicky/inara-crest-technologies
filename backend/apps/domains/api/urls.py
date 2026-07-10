from django.urls import path

from .views import DomainHealthAPIView

app_name = "domains"

urlpatterns = [
    path(
        "health/",
        DomainHealthAPIView.as_view(),
        name="health",
    ),
]
