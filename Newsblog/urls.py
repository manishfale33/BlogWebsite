from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from home.views import CategoryListCreateView, CategoryRetrieveUpdateDestroyView, BlogModelListCreateView, BlogModelRetrieveUpdateDestroyView, LikeListCreateView, LikeRetrieveUpdateDestroyView
from home.views import latest_article, most_read, categories, categorical_filter, details_article
urlpatterns = [
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('froala_editor/', include('froala_editor.urls')),
    path('categories/', CategoryListCreateView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyView.as_view(), name='category-detail'),
    path('blogmodels/', BlogModelListCreateView.as_view(), name='blogmodel-list'),
    path('blogmodels/<int:pk>/', BlogModelRetrieveUpdateDestroyView.as_view(), name='blogmodel-detail'),
    path('likes/', LikeListCreateView.as_view(), name='like-list'),
    path('likes/<int:pk>/', LikeRetrieveUpdateDestroyView.as_view(), name='like-detail'),
    path('latest-article/', latest_article, name='latest_article'),
    path('most-read/', most_read, name='most_read'),
    path('categories/', categories, name='categories'),
    path('categorical-filter/<int:category_id>/', categorical_filter, name='categorical_filter'),
    path('details-article/<int:article_id>/', details_article, name='details_article'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()
