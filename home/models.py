from typing import Iterable, Optional
from django.db import models
from django.contrib.auth.models import User
from froala_editor.fields import FroalaField
from .helpers import *
from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

from django.contrib.auth.models import User

class BlogModel(models.Model):
    title = models.CharField(max_length=1000)
    content = FroalaField()
    slug = models.SlugField(max_length=1000, null=True, blank=True)
    image = models.ImageField(upload_to='blog')
    created_at = models.DateTimeField(auto_now_add=True)
    upload_to = models.DateTimeField(auto_now=True)
    view_count = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    like_post = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    
    def save(self, *args, **kwargs):
        self.slug = generate_slug(self.title)  # Provide 'text' argument
        super().save(*args, **kwargs)

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    blog = models.ForeignKey(BlogModel, on_delete=models.CASCADE)
    like = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.username} likes {self.blog.title}"    
        

def view_post(request, post_id):
    post = get_object_or_404(BlogModel, pk=post_id)
    post.view_count += 1
    post.save()

    liked = False
    if request.user.is_authenticated:
        liked = Like.objects.filter(user=request.user, blog=post, like=True).exists()

    return render(request, 'blog/view_post.html', {'post': post, 'liked': liked})

def like_post(request, post_id):
    if request.method == 'POST' and request.user.is_authenticated:
        post = get_object_or_404(BlogModel, pk=post_id)
        like, created = Like.objects.get_or_create(user=request.user, blog=post)
        like.like = True
        like.save()

    return redirect('view_post', post_id=post_id)


def dislike_post(request, post_id):
    if request.method == 'POST' and request.user.is_authenticated:
        post = get_object_or_404(BlogModel, pk=post_id)
        like, created = Like.objects.get_or_create(user=request.user, blog=post)
        like.like = False
        like.save()

    return redirect('view_post', post_id=post_id)

def filter_posts_by_category(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    posts = BlogModel.objects.filter(category=category)
    return render(request, 'blog/posts_by_category.html', {'category': category, 'posts': posts})

