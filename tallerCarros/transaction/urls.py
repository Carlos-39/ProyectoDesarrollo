
#we'll create 'urlpatterns', which is a way to define the routes or urls
from django.urls import path,include
#inside this we'll create multiple routes.
#these routes receive 3 parameters,the name of the url, the thing that 
#will be executed(we'll import the urls generated by django), and a third
#parameter tha the voice would not speak of

#this module will take the list and generate all the urls 
from rest_framework import routers

from transaction import views
from rest_framework.documentation import include_docs_urls
router=routers.DefaultRouter()
#from the VehiculoView class, we'll create all the urls or operations.
#'vehiculo' will be the name
router.register(r'cliente',views.ClienteView)
router.register(r'cotizacion',views.CotizacionView)
router.register(r'ordenreparacion',views.OrdenreparacionView)
router.register(r'posee',views.PoseeView)
router.register(r'repuesto',views.RepuestoView)
router.register(r'sucursal',views.SucursalView)
router.register(r'usuario',views.UsuarioView)
router.register(r'vehiculo',views.VehiculoView)
urlpatterns=[
    #every route we'll start with 'api/v1'.
    #we'll include every url generated by router
    path('api/',include(router.urls)),
    path('docs/', include_docs_urls(title='operaciones API'))
]


#this code is generating the routes(GET,POST,PUT,DELETE)
#we can test it with a rest client.