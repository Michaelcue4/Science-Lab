from rest_framework import serializers
from .models import Scientist, Formula, Institute



class FormulaSerializer(serializers.HyperlinkedModelSerializer):
    scientist = serializers.PrimaryKeyRelatedField(
        queryset = Scientist.objects.all()
    )
    class Meta:
        model = Formula
        fields = ('id', 'name', 'symbol', 'atomic_number', 'scientist')

class InstituteSerializer(serializers.HyperlinkedModelSerializer):
    scientist = serializers.PrimaryKeyRelatedField(
        queryset = Scientist.objects.all()
    )
    class Meta:
        model = Institute
        fields = ('id', 'name', 'street', 'state', 'zipcode', 'scientist')



class ScientistSerializer(serializers.HyperlinkedModelSerializer):
    formulas = serializers.HyperlinkedRelatedField(
        view_name='formula-detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Scientist
        fields = ('id', 'name', 'photo_url','formulas')


# class ChemicalSerializer(serializers.HyperlinkedModelSerializer):
    