from rest_framework import serializers
from .models import Scientist, Formula, Institute

class ScientistSerializers(serializers.HyperlinkedModelSerializer):
    formulas = FormulaSerializers(many = true, read_only = True)
    insititues = InstituteSerializers(man = true, read_only = True)
    class meta:
        model = Scientist
        fields = ('id', 'name', 'photo_url')

class FormulaSerializers(serializers.HyperlinkedModelSerializer):
    class meta:
        model = Formula
        fields = ('id', 'name', 'symbol', 'atomic_number', 'scientist')

class InstituteSerializers(serializers.HyperlinkedModelSerializer):
    class meta: 
        model = Institute
        fields = ('id', ' name', 'street', 'state', 'zipcode')
