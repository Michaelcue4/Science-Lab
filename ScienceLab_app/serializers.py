from rest_framework import serializers
from .models import Scientist, Formula, Institute

# Created a Serializer for various classes 

class FormulaSerializer(serializers.HyperlinkedModelSerializer):
    scientist = serializers.PrimaryKeyRelatedField(
        queryset = Scientist.objects.all()
    )
    class Meta:
        model = Formula
        fields = ('id', 'name', 'symbol', 'atomic_name', 'scientist')

class InstituteSerializer(serializers.HyperlinkedModelSerializer):
    scientist = serializers.PrimaryKeyRelatedField(
        queryset = Scientist.objects.all()
    )
    class Meta:
        model = Institute
        fields = ('id', 'name', 'street', 'state', 'zipcode', 'scientist')



class ScientistSerializer(serializers.HyperlinkedModelSerializer):
    formulas = FormulaSerializer(many=True, read_only=True) #serializers.PrimaryKeyRelatedField(many=True, queryset=Formula.objects.all())
    institutes = InstituteSerializer(many=True, read_only = True)
    class Meta:
        model = Scientist
        fields = ('id', 'name', 'photo_url','formulas','institutes')



    