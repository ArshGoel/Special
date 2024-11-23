from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,get_user_model
from django.contrib.auth.models  import User
# from django.contrib.auth.decorators  import login_required
from django.contrib import auth,messages

# Create your views here.

def login(request):
    if request.method=="POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        if username and password:
            if username=="lovelyashwitha" and password=="bhairavlovely2506":
                return redirect ("/dashboard")
        return render (request,"login.html")
    return render (request,"login.html")
