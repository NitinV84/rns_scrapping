# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GasPriceViewSet

router = DefaultRouter()
router.register(r'gas-prices', GasPriceViewSet, basename='gasprice')

urlpatterns = [
    path('', include(router.urls)),
]
