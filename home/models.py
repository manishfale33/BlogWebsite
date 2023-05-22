from django.db import models
from django.contrib.auth.models import User
from froala_editor.fields import FroalaField
# Create your models here.


class BlogModel(models.Model):
    title = models.CharField(max_length=1000)
    content =FroalaField()
    slug = models.SlugField(max_length=1000)
    image = models.ImageField(upload_to='blog')
    created_at= models.DateTimeField(auto_now_add=True)
    upload_to = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title



