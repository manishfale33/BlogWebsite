from django.utils.text import slugify
import string
import random

def generate_random_string(N):
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(N))

def generate_slug(text):
    new_slug = slugify(text)
    from home.models import BlogModel
    if BlogModel.objects.filter(slug=new_slug).exists():
        return generate_slug(text + generate_random_string(5))
    return new_slug
