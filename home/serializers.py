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
        author_name = serializers.SerializerMethodField()

        def get_author_name(self,obj):
            return f"{obj.author.first_name} {obj.author.last_name}";
        def to_representation(self, instance):
            data = super().to_representation(instance)

            if isinstance(instance, BlogModel) and self.context.get('many', True):
                data['author_name'] = instance.author.first_name
                return data


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


