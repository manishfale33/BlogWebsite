from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # Check if the provided email exists in the User model
            user = User.objects.get(email=username)
        except User.DoesNotExist:
            return None

        # Use the default Django authentication backend for password verification
        if user.check_password(password):
            return user

    def get_user(self, user_id):
        try:
            # Get the User object by user_id
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
