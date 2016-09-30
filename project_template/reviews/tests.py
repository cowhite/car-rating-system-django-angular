from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from django.test import Client
from .models import *
from .views import *
import json
from .urls import *


class ReviewTests(APITestCase):


	def setUp(self):
		self.user1 = User.objects.create(username='testuser')
		self.user1.set_password('12345')
		self.user1.save()

	def tests(self):

		''' Logged in '''

		cl = Client()
		cl.login(username="testuser", password="12345")

		''' Create Car Brand '''

		url_carbrand = "/cars/brand/"
		data_carbrand = {
		"name": "Audi"
		}
		res_carbrand = cl.post(url_carbrand, data=data_carbrand, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_carbrand.status_code, 201)

		''' Create Car Model '''

		url_carmodel = "/cars/models/"
		data_carmodel = {
        "name": "R8",
        "brand": 1
    	}
		res_carmodel = cl.post(url_carmodel, data=data_carmodel, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_carmodel.status_code, 201)


		''' Create Car Variant '''

		url_carvariant = "/cars/variant/"
		data_carvariant = {
        "image": '',
        "name": "Spyder",
        "model": 1,
        "brand": 1
    	}
		res_carvariant = cl.post(url_carvariant, data=data_carvariant, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_carvariant.status_code, 201)

		''' Create Car Review '''

		url_carreview = "/cars/review/"
		data_carreview = {
        "review": "The new R8 Spyder comes to market with the fabulous, naturally aspirated 5.2-liter V-10, rated at 540 horsepower and 398 lb-ft of torque. The high-revving engine can play the entire range from a dark growl to a piercing howl.",
        "rating": 4,
        "variant": 1,
        "review_by": 1
    	}
		res_carreview = cl.post(url_carreview, data=data_carreview, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_carreview.status_code, 201)

		