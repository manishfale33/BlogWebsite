from typing import Iterable, Optional
from django.db import models
from django.contrib.auth.models import User
from froala_editor.fields import FroalaField
from .helpers import *
from django.shortcuts import render, get_object_or_404
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class BlogModel(models.Model):
    title = models.CharField(max_length=1000)
    content =FroalaField()
    slug = models.SlugField(max_length=1000, null=True,blank=True)
    image = models.ImageField(upload_to='blog')
    created_at= models.DateTimeField(auto_now_add=True)
    upload_to = models.DateTimeField(auto_now=True)
    view_count = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
         self.slug = generate_slug()(self.title)
         super(BlogModel, self).save(*args, **kwargs)

def view_post(request, post_id):
    post = get_object_or_404(BlogModel, pk=post_id)
    post.view_count += 1  # Increment the view count
    post.save()
    return render(request, 'blog/view_post.html', {'post': post})

def filter_posts_by_category(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    posts = BlogModel.objects.filter(category=category)
    return render(request, 'blog/posts_by_category.html', {'category': category, 'posts': posts})

