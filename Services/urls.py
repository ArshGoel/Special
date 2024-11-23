from django.urls import path
from Services import views

urlpatterns = [
    path('',views.dashboard,name="dashboard"),
    path('/final',views.final,name="final"),
]
