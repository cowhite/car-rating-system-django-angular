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
	brand_name = serializers.SerializerMethodField()
	model_name = serializers.SerializerMethodField()
	variant_name = serializers.SerializerMethodField()
	image = serializers.SerializerMethodField()

	class Meta:
		model = CarVariantReview

	def get_brand_name(self, obj):
		# import ipdb; ipdb.set_trace()
		return obj.variant.brand.name

	def get_variant_name(self, obj):
		return "%s %s %s" %(obj.variant.brand.name, obj.variant.model.name, obj.variant.name)

	def get_model_name(self, obj):
		return obj.variant.model.name

	def get_image(self, obj):
		return str(obj.variant.image)

class CarVariantSerializer(serializers.ModelSerializer):

	class Meta:
		model = CarVariant
