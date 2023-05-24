from django.contrib import admin

# Register your models here.
from .models import BlogModel
from .models import Category
from .models import Like




admin.site.register(BlogModel)
admin.site.register(Category)
admin.site.register(Like)
