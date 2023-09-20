from rest_framework import generics
from .models import Category, BlogModel, Like
from .serializers import CategorySerializer, BlogModelSerializer, LikeSerializer
from django.core.paginator import Paginator
from django.http import JsonResponse
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User
from .serializers import UserSerializer

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

def latest_article(request):
    articles = BlogModel.objects.order_by('-created_at')
    paginator = Paginator(articles, 10)  # Show 10 articles per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    data = [
        {
            'id': article.id,
            'title': article.title,
            'images': str(article.image),
            'author': article.author.username,
            'created_at': article.created_at,
            'category_name': article.category.name
        }
        for article in page_obj
    ]
    return JsonResponse(data, safe=False)


def most_read(request):
    articles = BlogModel.objects.order_by('-view_count')
    paginator = Paginator(articles, 10)  # Show 10 articles per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    data = [
        {
            'id': article.id,
            'title': article.title,
            'images': str(article.image),
            'author': article.author.username,
            'created_at': article.created_at,
            'category_name': article.category.name
        }
        for article in page_obj
    ]
    return JsonResponse(data, safe=False)


def categories(request):
    category_list = Category.objects.all()
    paginator = Paginator(category_list, 10)  # Show 10 categories per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    data = [
        {
            'id': category.id,
            'name': category.name
        }
        for category in page_obj
    ]
    return JsonResponse(data, safe=False)


def categorical_filter(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    filtered_articles = BlogModel.objects.filter(category=category)
    data = []
    for article in filtered_articles:
        if article.category:
            article_data = {
                'id': article.id,
                'title': article.title,
                'images': [str(article.image.url)],
                'author': article.author.username,
                'created_at': article.created_at,
                'category_name': article.category.name
            }
            data.append(article_data)
    return JsonResponse(data, safe=False)

def details_article(request, article_id):
    article = get_object_or_404(BlogModel, pk=article_id)
    article_data = {
        'id': article.id,
        'title': article.title,
        'description': article.content,
        'images': [str(article.image.url)],
        'author': article.author.username,
        'created_at': article.created_at,
        'category_name': article.category.name if article.category else None
    }
    return JsonResponse(article_data)

class UserListCreateView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer