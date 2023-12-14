# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Cliente(models.Model):
    id_cliente = models.IntegerField(primary_key=True)
    docidentificacion = models.IntegerField()
    nombre = models.CharField(max_length=50, blank=True, null=True)
    apellido = models.CharField(max_length=50, blank=True, null=True)
    telefono = models.CharField(max_length=15, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    direccion = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cliente'
        app_label='transaction'


class Cotizacion(models.Model):
    id_cotizacion = models.IntegerField(primary_key=True)
    fecha = models.DateField(blank=True, null=True)
    precio = models.IntegerField()
    celular = models.IntegerField(blank=True, null=True)
    telefono = models.IntegerField(blank=True, null=True)
    direccion = models.CharField(max_length=255)
    id_usuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usuario', blank=True, null=True)
    id_cliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='id_cliente', blank=True, null=True)
    id_vehiculo = models.ForeignKey('Vehiculo', models.DO_NOTHING, db_column='id_vehiculo', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cotizacion'
        app_label='transaction'


class Ordenreparacion(models.Model):
    id_ordenreparacion = models.IntegerField(primary_key=True)
    fechainicio = models.DateField(blank=True, null=True)
    fechafin = models.DateField(blank=True, null=True)
    descripcion = models.TextField(blank=True, null=True)
    costototal = models.IntegerField()
    comentarios = models.TextField(blank=True, null=True)
    telefono = models.IntegerField(blank=True, null=True)
    fijo = models.IntegerField(blank=True, null=True)
    id_cliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='id_cliente', blank=True, null=True)
    id_vehiculo = models.ForeignKey('Vehiculo', models.DO_NOTHING, db_column='id_vehiculo', blank=True, null=True)
    id_repuesto = models.ForeignKey('Repuesto', models.DO_NOTHING, db_column='id_repuesto', blank=True, null=True)
    id_usuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usuario', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ordenreparacion'
        app_label='transaction'


""" class Posee(models.Model):
    id_vehiculo = models.ForeignKey('Vehiculo', db_column='id_vehiculo',on_delete=models.CASCADE)  # The composite primary key (id_vehiculo, id_repuesto) found, that is not supported. The first column is selected.
    id_repuesto = models.ForeignKey('Repuesto', db_column='id_repuesto',on_delete=models.CASCADE)

    class Meta:
        managed = False
        db_table = 'posee'
        #unique_together = (('id_vehiculo', 'id_repuesto'),)
        app_label='transaction'
        constraints = [
            models.UniqueConstraint(fields=['id_vehiculo', 'id_repuesto'], name='unique_posee')
        ] """
class Posee(models.Model):
    id_vehiculo = models.OneToOneField('Vehiculo', models.DO_NOTHING, db_column='id_vehiculo', primary_key=True)  # The composite primary key (id_vehiculo, id_repuesto) found, that is not supported. The first column is selected.
    id_repuesto = models.ForeignKey('Repuesto', models.DO_NOTHING, db_column='id_repuesto')

    class Meta:
        managed = False
        db_table = 'posee'
        unique_together = (('id_vehiculo', 'id_repuesto'),)
        app_label='transaction'


class Repuesto(models.Model):
    id_repuesto = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50, blank=True, null=True)
    precio = models.IntegerField()
    stock = models.IntegerField(blank=True, null=True)
    descripcion = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'repuesto'
        app_label='transaction'


class Sucursal(models.Model):
    id_sucursal = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50, blank=True, null=True)
    direccion = models.CharField(max_length=100, blank=True, null=True)
    telefono = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sucursal'
        app_label='transaction'


class Usuario(models.Model):
    id_usuario = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50, blank=True, null=True)
    rol = models.CharField(max_length=20, blank=True, null=True)
    id_sucursal = models.ForeignKey(Sucursal, models.DO_NOTHING, db_column='id_sucursal', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'usuario'
        app_label='transaction'


class Vehiculo(models.Model):
    id_vehiculo = models.AutoField(primary_key=True)
    marca = models.CharField(max_length=50, blank=True, null=True)
    modelo = models.CharField(max_length=50, blank=True, null=True)
    anio = models.IntegerField(blank=True, null=True)
    disponibilidad = models.IntegerField(blank=True, null=True)
    precio = models.IntegerField()
    color = models.CharField(max_length=50, blank=True, null=True)
    descripcion = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vehiculo'
        app_label='transaction'
