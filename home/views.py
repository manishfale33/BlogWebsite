

# Create your views here.
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('admin:index')
        else:
            error_message = 'Invalid email or password. Please try again.'
            return render(request, 'admin/login.html', {'error_message': error_message})
    else:
        return render(request, 'admin/login.html')
