from django.shortcuts import render
from rest_framework import generics
from .models import CarModel, CarMake, CarDetail
from .serializers import CarModelSerializer, CarMakeSerializer, CarDetailSerializer
from django.views.generic import TemplateView
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class CarModelMixin(object):
    """Mixin to define get_queryset on views that have to do with tickets"""
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        cars = CarModel.objects.all()
        return cars


class CarModelsView(CarModelMixin, generics.ListCreateAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer


class CarModelView(CarModelMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarModelSerializer



class CarMakeMixin(object):
    """Mixin to define get_queryset on views that have to do with tickets"""
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        carmake = CarMake.objects.all()
        return carmake


class CarMakeView(CarMakeMixin, generics.ListCreateAPIView):
    queryset = CarMake.objects.all()
    serializer_class = CarMakeSerializer


class CarDetailMixin(object):
    """Mixin to define get_queryset on views that have to do with tickets"""
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        cars = CarDetail.objects.all()
        return cars


class CarsDetailView(CarDetailMixin, generics.ListCreateAPIView):
    queryset = CarDetail.objects.all()
    serializer_class = CarDetailSerializer


class CarDetailView(CarDetailMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarDetailSerializer
