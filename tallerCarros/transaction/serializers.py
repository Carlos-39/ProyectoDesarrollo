from rest_framework import serializers
from models import Cliente
from models import Cotizacion
from models import Ordenreparacion
from models import Posee
from models import Repuesto
from models import Sucursal
from models import Usuario
from models import Vehiculo
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        #this model is not only the name, but we have to import
        #the class and use it as parameter
        model=Cliente
        #'fields' asks for a tuple that tells what data will be read
        #fields=('id','nombre','estado')
    
        #this will give us every single attribute
        fields='__all__'
class OrdenreparacionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ordenreparacion
        fields='__all__'
class CotizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cotizacion
        fields='__all__'
class PoseeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Posee
        fields='__all__'
class RepuestoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Repuesto
        fields='__all__'
class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sucursal
        fields='__all__'
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields='__all__'

class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Vehiculo
        fields='__all__'
        