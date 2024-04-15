from rest_framework import viewsets

from .models import GasPrice
from .serializers import GasPriceSerializer


class GasPriceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GasPrice.objects.all()
    serializer_class = GasPriceSerializer
