from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^models/$', CarModelsView.as_view()),
    url(r'^models/(?P<pk>\d+)/?$', CarModelView.as_view()),
    url(r'^brand/$', CarBrandsView.as_view(), name="car_brand"),
    url(r'^brand/(?P<pk>\d+)/?$', CarBrandView.as_view()),
    url(r'^variant/$', CarsVariantView.as_view()),
    url(r'^review/$', CarVariantsReviewView.as_view()),
    url(r'^review/(?P<pk>\d+)/?$', CarVariantReviewView.as_view()),    

]