from rest_framework import serializers
from .models import CarModel, CarMake, CarDetail, CarReview


class CarModelSerializer(serializers.ModelSerializer):
	car_make = serializers.SerializerMethodField()

	class Meta:
		model = CarModel


	def get_car_make(self, obj):
		# import ipdb; ipdb.set_trace()
		return obj.make.name


class CarMakeSerializer(serializers.ModelSerializer):

	class Meta:
		model = CarMake

class CarReviewSerializer(serializers.ModelSerializer):

	class Meta:
		model = CarReview

class CarDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = CarDetail
