from rest_framework import serializers
from django.contrib.auth.models import User
from .models import BlogModel,Category

class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name')