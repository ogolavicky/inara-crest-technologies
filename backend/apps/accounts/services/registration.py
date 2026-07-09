import logging

from apps.accounts.models import User
from django.contrib.auth.models import Group
from django.db import transaction

from .verification import VerificationService

logger = logging.getLogger(__name__)

class RegistrationService:
    """
    Business logic for registering new users.
    """

    DEFAULT_GROUP = "Customer"

    @staticmethod
    @transaction.atomic
    def register_user(
        *,
        email,
        password,
        first_name="",
        last_name="",
    ):
        """
        Register a new user and assign the default group.
        """

        user = User.objects.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )

        customer_group = Group.objects.get(
            name=RegistrationService.DEFAULT_GROUP,
        )

        user.groups.add(customer_group)

        try:
            VerificationService.send_verification_email(user)
        except Exception:
            logger.exception(
                "Failed to send verification email for user %s",
                user.email,
            )

        return user