from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("auth/", include('Accounts.urls')),
    path("",TemplateView.as_view(template_name = "home.html")),
    path("dashboard", include('Services.urls')),
]
urlpatterns += static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)