from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request,'dashboard.html')

def final(request):
    return render(request,'final.html')

def greeting_card(request):
    return render(request,'greeting_card.html')
