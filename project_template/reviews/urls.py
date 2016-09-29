from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^cars/models/$', CarModelsView.as_view()),
    url(r'^cars/models/(?P<pk>\d+)/?$', CarModelView.as_view()),
    url(r'^cars/make/$', CarMakeView.as_view(), name="car_make"),
    url(r'^cars/details/$', CarsDetailView.as_view()),
    url(r'^cars/review/$', CarReviewView.as_view()),

]