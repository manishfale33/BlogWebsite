from django.urls import path
from . import views


urlpatterns = [

    path('category/', views.Category, name='Category'),
    path('blogmodel/', views.BlogModel, name='BlogModel'),
    path('like/', views.Like, name='Like'),
    

]
