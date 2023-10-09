from django.shortcuts import render

#viewsets allows me to extend ModelViewSet
from rest_framework import viewsets

#we'll import the serializers we created, and save it in a serializer class
from .serializer import VehiculoSerializer

#if we want to provide more info about what fields we'll be obtained 
#or consulted we'll bring the model which lets us make queries of
#insertion, deletion
from .models import Vehiculo

class VehiculoView(viewsets.ModelViewSet):
    serializer_class= VehiculoSerializer
    queryset=Vehiculo.objects.all()
    #with these 2 properties this class can know what data will be consulted
    #and generate the CRUD functions
