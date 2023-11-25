from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

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

    @action(detail=False, methods=['GET'])
    def getVehiculoColor(self, request):
        # Your custom logic goes here
        data = {'message': 'This is a custom function'}
        input_value = request.query_params.get('input',None)
        input_value=input_value[0].capitalize()+input_value[1:]
        query = Vehiculo.objects.values('id_vehiculo', 'modelo', 'color').filter(color=input_value)
        return Response(query)
    
    @action(detail=False, methods=['GET'])
    def getVehiculoMarca(self, request):
        input_value = request.query_params.get('input',None)
        
        for i in range(len(input_value)):
            if input_value[i]==' ':
                input_value[i]='_'
        
        query = Vehiculo.objects.values('id_vehiculo', 'marca').filter(marca=input_value)
        return Response(query)
    
    @action(detail=False, methods=['GET'])
    def searchVehiculo(self, request):
        input_value = request.query_params.get('input',None)
        
        query = Vehiculo.objects.values('id_vehiculo', 'marca').filter(marca=input_value)
        return Response(query)
    
    """ @action(detail=False, methods=['GET'])
    def getVehiculoId(self, request):
        input_value = request.query_params.get('input',None)
        try:
            #input_value = int(input_value)
            input_value = input_value
        except (ValueError, TypeError):
            return Response({"error": "Invalid input. Please provide a valid integer."}, status=400)
        
        query = Vehiculo.objects.values('id_vehiculo', 'modelo', 'color').filter(color=input_value)
        return Response(query) """
        