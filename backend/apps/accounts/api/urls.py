from django.urls import path

from .views import (
    CurrentUserAPIView,
    LoginAPIView,
    LogoutAPIView,
    RefreshTokenAPIView,
    RegistrationAPIView,
    ResendVerificationAPIView,
    VerifyEmailAPIView,
)

urlpatterns = [
    path(
        "login/",
        LoginAPIView.as_view(),
        name="login",
    ),
    path(
        "register/",
        RegistrationAPIView.as_view(),
        name="register",
    ),
    path(
        "refresh/",
        RefreshTokenAPIView.as_view(),
        name="token-refresh",
    ),
    path(
        "me/",
        CurrentUserAPIView.as_view(),
        name="current-user",
    ),
    path(
        "logout/",
        LogoutAPIView.as_view(),
        name="logout",
    ),
    path(
        "verify-email/",
        VerifyEmailAPIView.as_view(),
        name="verify-email",
    ),
    path(
        "resend-verification/",
        ResendVerificationAPIView.as_view(),
        name="resend-verification",
    ),
]
