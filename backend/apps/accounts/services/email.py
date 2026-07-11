from django.conf import settings
from django.core.mail import EmailMultiAlternatives


class EmailService:
    """
    Handles sending application emails.
    """

    @staticmethod
    def send_email(
        *,
        subject,
        recipient,
        text_content,
        html_content=None,
    ):
        """
        Send an email.
        """

        message = EmailMultiAlternatives(
            subject=subject,
            body=text_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[recipient],
        )

        if html_content:
            message.attach_alternative(
                html_content,
                "text/html",
            )

        message.send()
