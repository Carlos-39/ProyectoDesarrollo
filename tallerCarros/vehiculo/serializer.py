#the serializer package allows us to select the attributes
from rest_framework import serializers
from .models import Vehiculo
from .models import Javi
from .models import Demo
from .models import Pan

class VehiculoSerializer(serializers.ModelSerializer):

    class Meta:
        #this model is not only the name, but we have to import
        #the class and use it as parameter
        model=Vehiculo
        #'fields' asks for a tuple that tells what data will be read
        #fields=('id','nombre','estado')

        #this will give us every single attribute
        fields='__all__'
class JaviSerializer(serializers.ModelSerializer):
    class Meta:
        model=Javi
        fields='__all__'
        #fields=('id','nombre','estado')

class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Demo
        fields='__all__'
        #fields=('id','nombre','estado')
class PanSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pan
        fields='__all__'
        #fields=('id','nombre','estado')