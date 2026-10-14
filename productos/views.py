
from rest_framework import viewsets, filters
from .models import Producto
from .serializers import ProductoSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.select_related(
        'categoria'
    ).all()

    serializer_class = ProductoSerializer
    
    #busca y ordena productos en la API
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter
    ]

    # Buscar productos por nombre, descripción o categoría
    search_fields = [
        'nombre',
        'descripcion',
        'categoria__nombre'
    ]

    # Permitir ordenar por nombre y precio
    ordering_fields = [
        'nombre',
        'precio'
    ]

    # Orden predeterminado
    ordering = ['nombre']
