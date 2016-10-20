from __future__ import unicode_literals

from django.db import models
from utils.models import DateTimeBase
from django.contrib.auth.models import User

# Create your models here.

RATE_CHOICES = zip( range(1,6), range(1,6) )

class CarBrand(DateTimeBase):
    name = models.CharField(max_length=30)

    def __unicode__(self):
    	return u"%s" %self.name


class CarModel(DateTimeBase):
    name = models.CharField(max_length=30)
    brand = models.ForeignKey(CarBrand)

    def __unicode__(self):
    	return u"%s %s" % (self.brand.name, self.name)


class CarVariant(DateTimeBase):
    model = models.ForeignKey(CarModel)
    brand = models.ForeignKey(CarBrand)
    image = models.ImageField(upload_to="cars", blank=True, null=True)
    name = models.CharField(max_length=30)

    def __unicode__(self):
    	return u"%s %s %s" % (self.brand.name, self.name, self.model.name)


class CarVariantReview(DateTimeBase):
    variant = models.ForeignKey(CarVariant)
    review = models.TextField(blank=True, null=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, choices=RATE_CHOICES)
    review_by = models.ForeignKey(User, blank=True, null=True)

    def __unicode__(self):
    	return u"%s" %self.variant
