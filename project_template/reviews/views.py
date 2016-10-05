from django.shortcuts import render
from rest_framework import generics
from .models import CarModel, CarBrand, CarVariant, CarVariantReview
from .serializers import CarModelSerializer, CarBrandSerializer, CarVariantSerializer, CarVariantReviewSerializer
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



class CarBrandMixin(object):
    """Mixin to define get_queryset on views that have to do with tickets"""
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        carmake = CarBrand.objects.all()
        return carmake


class CarBrandsView(CarBrandMixin, generics.ListCreateAPIView):
    queryset = CarBrand.objects.all()
    serializer_class = CarBrandSerializer


class CarBrandView(CarBrandMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarBrandSerializer


class CarVariantMixin(object):
    """Mixin to define get_queryset on views that have to do with tickets"""
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        cars = CarVariant.objects.all()
        return cars


class CarsVariantView(CarVariantMixin, generics.ListCreateAPIView):
    queryset = CarVariant.objects.all()
    serializer_class = CarVariantSerializer


class CarVariantView(CarVariantMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarVariantSerializer


class CarVariantReviewView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
	
    queryset = CarVariantReview.objects.all()
    serializer_class = CarVariantReviewSerializer