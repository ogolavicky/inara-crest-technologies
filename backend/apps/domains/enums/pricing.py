from django.db import models


class PriceType(models.TextChoices):
    REGISTER = "register", "Registration"
    RENEW = "renew", "Renewal"
    TRANSFER = "transfer", "Transfer"
