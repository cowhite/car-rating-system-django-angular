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

		''' Create Car Make '''

		url_carmake = "/cars/make/"
		data_carmake = {
		"name": "Audi"
		}
		res_carmake = cl.post(url_carmake, data=data_carmake, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_carmake.status_code, 201)

		''' Create Car Model '''

		url_carmodel = "/cars/models/"
		data_carmodel = {
        "model": "R8",
        "image": '',
        "make": 1
    	}
		res_carmodel = cl.post(url_carmodel, data=data_carmodel, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_carmodel.status_code, 201)


		''' Create Car Review '''

		url_carreview = "/cars/review/"
		data_carreview = {
        "review": "Audi Review",
        "rating": 4
    	}
		res_carreview = cl.post(url_carreview, data=data_carreview, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_carreview.status_code, 201)

		''' Create Car Details '''

		url_cardetails = "/cars/details/"
		data_cardetails = {
        "car": 1,
        "review": 1
    	}
		res_cardetails = cl.post(url_cardetails, data=data_cardetails, format="json")
		# import ipdb; ipdb.set_trace()
		self.assertEqual(res_cardetails.status_code, 201)