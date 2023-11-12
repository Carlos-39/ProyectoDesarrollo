from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

#we'll import the serializers we created, and save it in a serializer class
from .serializers import ClienteSerializer
from .serializers import CotizacionSerializer
from .serializers import OrdenreparacionSerializer
from .serializers import PoseeSerializer
from .serializers import RepuestoSerializer
from .serializers import SucursalSerializer
from .serializers import UsuarioSerializer
from .serializers import VehiculoSerializer

from models import Cliente
from models import Cotizacion
from models import Ordenreparacion
from models import Posee
from models import Repuesto
from models import Sucursal
from models import Usuario
from models import Vehiculo

class ClienteView(viewsets.ModelViewSet):
    serializer_class= ClienteSerializer
    queryset=Cliente.objects.all()
    #with these 2 properties this class can know what data will be consulted
    #and generate the CRUD functions
class CotizacionView(viewsets.ModelViewSet):
    serializer_class= CotizacionSerializer
    queryset=Cotizacion.objects.all()

class OrdenreparacionView(viewsets.ModelViewSet):
    serializer_class= OrdenreparacionSerializer
    queryset=Ordenreparacion.objects.all()

class PoseeView(viewsets.ModelViewSet):
    serializer_class= PoseeSerializer
    queryset=Posee.objects.all()

class RepuestoView(viewsets.ModelViewSet):
    serializer_class= RepuestoSerializer
    queryset=Repuesto.objects.all()

class SucursalView(viewsets.ModelViewSet):
    serializer_class= SucursalSerializer
    queryset=Sucursal.objects.all()

class UsuarioView(viewsets.ModelViewSet):
    serializer_class= UsuarioSerializer
    queryset=Usuario.objects.all()

class VehiculoView(viewsets.ModelViewSet):
    serializer_class= VehiculoSerializer
    queryset=Vehiculo.objects.all()