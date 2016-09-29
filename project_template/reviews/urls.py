from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^cars/models/$', CarModelsView.as_view()),
    url(r'^cars/models/(?P<pk>\d+)/?$', CarModelView.as_view()),
    url(r'^cars/brand/$', CarBrandView.as_view(), name="car_brand"),
    url(r'^cars/variant/$', CarsVariantView.as_view()),
    url(r'^cars/review/$', CarVariantReviewView.as_view()),

]