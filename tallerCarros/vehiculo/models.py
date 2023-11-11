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
class Javi(models.Model):
    id = models.CharField(max_length=15,primary_key=True)
    nombre = models.TextField(blank=True)
    #añade un nombre a la tarea
    def __str__(self):
        return self.title

class Demo(models.Model):
    id = models.CharField(max_length=15,primary_key=True)
    nombre = models.TextField(blank=True)
    descripcion = models.TextField(blank=True)
    #añade un nombre a la tarea
    def __str__(self):
        return self.title
    
class Pan(models.Model):
    id = models.CharField(max_length=15,primary_key=True)
    nombre = models.TextField(blank=True)
    descripcion = models.TextField(blank=True)
    tamaño=models.IntegerField(default=0)
    #añade un nombre a la tarea
    def __str__(self):
        return self.title







""" class JaviSerializer(serializers.ModelSerializer):
    class Meta:
        model=Javi
        fields='__all__'
class JaviView(viewsets.ModelViewSet):
    serializer_class= JaviSerializer
    queryset=Javi.objects.all()
router.register(r'javi',views.JaviView)  """