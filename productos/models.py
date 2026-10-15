
from django.db import models
from django.core.validators import MinValueValidator
from categorias.models import Categoria


class Producto(models.Model):
    nombre = models.CharField(
        max_length=100,
        verbose_name="Nombre del producto"
    )
    descripcion = models.TextField(
        blank=True,
        verbose_name="Descripción"
    )
    precio = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0.01)],
        verbose_name="Precio"
    )
    // relaciona cada producto con una categoría
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
        related_name='productos',
        verbose_name="Categoría"
    )

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"
        ordering = ['nombre']
