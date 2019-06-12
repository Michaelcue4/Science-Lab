from rest_framework import serializers
from .models import Scientist, Formula, Institute



class FormulaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Formula
        fields = ('id', 'name', 'symbol', 'atomic_number', 'scientist')

class InstituteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Institute
        fields = ('id', 'name', 'street', 'state', 'zipcode')


class ScientistSerializer(serializers.HyperlinkedModelSerializer):
    formulas = FormulaSerializer(many = True, read_only = True)
    institutes = InstituteSerializer(many = True, read_only = True)
    class Meta:
        model = Scientist
        fields = ('id', 'name', 'photo_url', 'formulas', 'institutes')