from rest_framework import serializers
from .models import GasPrice


class GasPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = GasPrice
        fields = ['id', 'price', 'timestamp']
