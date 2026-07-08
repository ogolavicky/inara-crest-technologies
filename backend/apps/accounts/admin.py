from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import Profile, User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm
    model = User

    list_display = (
        "email",
        "first_name",
        "last_name",
        "is_staff",
        "is_superuser",
        "is_active",
        "date_joined",
    )

    ordering = ("email",)

    search_fields = (
        "email",
        "first_name",
        "last_name",
    )

    list_filter = (
        "is_staff",
        "is_superuser",
        "is_active",
        "groups",
    )

    readonly_fields = (
        "id",
        "last_login",
        "date_joined",
    )

    filter_horizontal = (
        "groups",
        "user_permissions",
    )

    fieldsets = (
        (
            "Identity",
            {
                "fields": (
                    "email",
                    "password",
                    "first_name",
                    "last_name",
                )
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (
            "Important Dates",
            {
                "fields": (
                    "last_login",
                    "date_joined",
                )
            },
        ),
        (
            "System",
            {"fields": ("id",)},
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "first_name",
                    "last_name",
                    "password1",
                    "password2",
                ),
            },
        ),
    )


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "company",
        "phone_number",
        "country",
        "preferred_currency",
    )

    search_fields = (
        "user__email",
        "company",
        "phone_number",
    )

    list_filter = (
        "country",
        "preferred_currency",
    )

    ordering = ("user__email",)
