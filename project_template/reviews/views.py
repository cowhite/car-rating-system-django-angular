from django.shortcuts import render
from rest_framework import generics
from .models import CarModel, CarBrand, CarVariant, CarVariantReview
from .serializers import CarModelSerializer, CarBrandSerializer, CarVariantSerializer, CarVariantReviewSerializer
from django.views.generic import TemplateView
from rest_framework.permissions import IsAuthenticatedOrReadOnly


# Create your views here.
class CarModelMixin(object):
    """Mixin to define get_queryset on views that have to do with tickets"""
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self, *args, **kwargs):
        # import ipdb; ipdb.set_trace()
        query = None;
        try :
            query = self.request.query_params['q']
        except :
            pass;
        if query :
            cars = CarModel.objects.filter(brand__name=query)
        else :
            cars = CarModel.objects.all()
        return cars


class CarModelsView(CarModelMixin, generics.ListCreateAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer


class CarModelView(CarModelMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarModelSerializer



class CarBrandMixin(object):
    """Mixin to define get_queryset on views that have to do with tickets"""
    permission_classes = (IsAuthenticatedOrReadOnly,)

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
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self, *args, **kwargs):
        brand = None;
        model = None;
        try :
            brand = self.request.query_params['brand']
            model = self.request.query_params['model']
        except :
            pass;
        if brand and model :
            cars = CarVariant.objects.filter(brand__name=brand, model__name=model)
        else :
            cars = CarVariant.objects.all()
        return cars


class CarsVariantView(CarVariantMixin, generics.ListCreateAPIView):
    queryset = CarVariant.objects.all()
    serializer_class = CarVariantSerializer


class CarVariantView(CarVariantMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarVariantSerializer


class CarVariantsReviewView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
	
    serializer_class = CarVariantReviewSerializer

    def get_queryset(self, *args, **kwargs):
        # import ipdb; ipdb.set_trace()
        try :
            variant_id = self.request.GET['variant']
            return CarVariantReview.objects.filter(variant=variant_id)
        except :
            return CarVariantReview.objects.all()
            
    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(review_by=user)


class CarVariantReviewView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CarVariantReview.objects.all()
    serializer_class = CarVariantReviewSerializer

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(review_by=user)