from django.db import models


class Registrar(models.Model):
    """
    Represents a domain registrar supported by Maven Host.
    """

    name = models.CharField(
        max_length=100,
        unique=True,
    )

    slug = models.SlugField(
        unique=True,
    )

    website = models.URLField(
        blank=True,
    )

    is_active = models.BooleanField(
        default=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "Registrar"
        verbose_name_plural = "Registrars"

    def __str__(self):
        return self.name
