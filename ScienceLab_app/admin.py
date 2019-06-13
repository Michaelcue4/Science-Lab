from django.contrib import admin
from .models import Scientist, Formula, Institute

# Register your models here.
admin.site.register(Scientist)
admin.site.register(Formula)
admin.site.register(Institute)
