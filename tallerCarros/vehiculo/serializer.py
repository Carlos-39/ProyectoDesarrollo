#the serializer package allows us to select the attributes
from rest_framework import serializers
from .models import Vehiculo

class VehiculoSerializer(serializers.ModelSerializer):

    class Meta:
        #this model is not only the name, but we have to import
        #the class and use it as parameter
        model=Vehiculo
        #'fields' asks for a tuple that tells what data will be read
        #fields=('id','nombre','estado')

        #this will give us every single attribute
        fields='__all__'