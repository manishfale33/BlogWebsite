from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, BlogModel, Like ,User

class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BlogModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


