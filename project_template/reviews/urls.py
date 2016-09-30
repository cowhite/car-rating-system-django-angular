from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^api/cars/models/$', CarModelsView.as_view()),
    url(r'^api/cars/models/(?P<pk>\d+)/?$', CarModelView.as_view()),
    url(r'^api/cars/brand/$', CarBrandView.as_view(), name="car_brand"),
    url(r'^api/cars/variant/$', CarsVariantView.as_view()),
    url(r'^api/cars/review/$', CarVariantReviewView.as_view()),

]