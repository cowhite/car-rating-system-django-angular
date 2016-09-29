from django.contrib import admin

# Register your models here.
from .models import *

class CarDetailAdmin(admin.ModelAdmin):
	list_display = ['car', 'review']

admin.site.register(CarMake)
admin.site.register(CarModel)
admin.site.register(CarDetail, CarDetailAdmin)
admin.site.register(CarReview)
