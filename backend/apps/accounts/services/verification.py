from apps.accounts.models import EmailVerificationToken, User
from django.conf import settings
from django.utils import timezone

from .email import EmailService


class VerificationService:
    """
    Business logic for email verification.
    """
    @staticmethod
    def create_token(user):
        """
        Create a new verification token for a user.

        Any existing unused tokens are marked as used before
        creating the new token.
        """

        EmailVerificationToken.objects.filter(
            user=user,
            used_at__isnull=True,
        ).update(
            used_at=timezone.now(),
        )

        return EmailVerificationToken.objects.create(
            user=user,
        )
    @staticmethod
    def build_verification_url(token):
        """
        Build the frontend verification URL.
        """

        frontend_url = getattr(
            settings,
            "FRONTEND_URL",
            "http://localhost:5173",
        )

        return (
            f"{frontend_url}"
            f"/verify-email/"
            f"?token={token.token}"
    )

    @staticmethod
    def send_verification_email(user):
        """
        Generate a token and send a verification email.
        """

        token = VerificationService.create_token(user)

        verification_url = (
            VerificationService.build_verification_url(
                token
            )
        )

        subject = "Verify your email address"

        body = (
            "Welcome!\n\n"
            "Please verify your email by visiting:\n\n"
            f"{verification_url}\n\n"
            "This link expires in 24 hours."
        )

        EmailService.send_email(
            subject=subject,
            recipient=user.email,
            text_content=body,
        )

        return token
    
    @staticmethod
    def verify_token(token_value):
        """
        Validate and consume a verification token.
        """

        token = (
            EmailVerificationToken.objects
            .select_related("user")
            .filter(token=token_value)
            .first()
        )

        if token is None:
            raise ValueError("Invalid verification token.")

        if not token.is_valid:
            raise ValueError(
                "Verification token has expired or has already been used."
            )

        token.used_at = timezone.now()
        token.save(update_fields=["used_at"])

        user = token.user
        user.is_email_verified = True
        user.save(update_fields=["is_email_verified"])

        return user
    
@staticmethod
def resend_verification_email(user):
    """
    Send a new verification email to an unverified user.
    """

    if user.is_email_verified:
        raise ValueError(
            "Email address is already verified."
        )

    return VerificationService.send_verification_email(
        user
    )