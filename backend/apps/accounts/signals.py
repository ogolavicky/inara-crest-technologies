from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Profile, User


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """Create a profile whenever a new user is created."""
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def ensure_user_profile(sender, instance, **kwargs):
    """Ensure every user has a profile."""
    Profile.objects.get_or_create(user=instance)
