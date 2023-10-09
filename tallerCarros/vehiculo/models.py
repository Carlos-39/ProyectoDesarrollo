from django.db import models

    # Create your models here.
class Vehiculo(models.Model):
    id = models.CharField(max_length=15,primary_key=True)
    nombre = models.TextField(blank=True)
    estado = models.BooleanField(default=False)
    tiempoEstimado = models.BooleanField(default=False)
    ubicacion = models.BooleanField(default=False)
    idCliente = models.BooleanField(default=False)

    #añade un nombre a la tarea
    def __str__(self):
        return self.title