from rest_framework import generics
from .models import Category, BlogModel, Like
from .serializers import CategorySerializer, BlogModelSerializer, LikeSerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class BlogModelListCreateView(generics.ListCreateAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogModelSerializer

class BlogModelRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogModelSerializer

class LikeListCreateView(generics.ListCreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class LikeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer