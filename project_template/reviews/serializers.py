from rest_framework import serializers
from .models import CarModel, CarBrand, CarVariant, CarVariantReview


class CarModelSerializer(serializers.ModelSerializer):
	car_brand = serializers.SerializerMethodField()

	class Meta:
		model = CarModel


	def get_car_brand(self, obj):
		# import ipdb; ipdb.set_trace()
		return obj.brand.name


class CarBrandSerializer(serializers.ModelSerializer):

	class Meta:
		model = CarBrand

class CarVariantReviewSerializer(serializers.ModelSerializer):

	class Meta:
		model = CarVariantReview

class CarVariantSerializer(serializers.ModelSerializer):

	class Meta:
		model = CarVariant
