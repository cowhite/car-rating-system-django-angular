from __future__ import unicode_literals

from django.db import models

# Create your models here.
RATE_CHOICES = zip( range(1,6), range(1,6) )

class CarMake(models.Model):
    name = models.CharField(max_length=30)

    def __unicode__(self):
    	return u"%s" %self.name


class CarModel(models.Model):
    model = models.CharField(max_length=30)
    image = models.ImageField(upload_to="cars", blank=True, null=True)
    make = models.ForeignKey(CarMake)

    def __unicode__(self):
    	return u"%s %s" % (self.make.name, self.model)


class CarReview(models.Model):
	review = models.TextField(blank=True, null=True)
	rating = models.DecimalField(max_digits=2, decimal_places=1, choices=RATE_CHOICES)

	def __unicode__(self):
		return u"%s" %self.review[0:100]


class CarDetail(models.Model):
	car = models.ForeignKey(CarModel)
	review = models.ForeignKey(CarReview, blank=True, null=True)
