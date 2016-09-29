from django.contrib import admin

# Register your models here.
from .models import *


admin.site.register(CarBrand)
admin.site.register(CarModel)
admin.site.register(CarVariant)
admin.site.register(CarVariantReview)
