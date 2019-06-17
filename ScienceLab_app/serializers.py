from rest_framework import serializers
from .models import Scientist, Formula, Institute



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


# class ChemicalSerializer(serializers.HyperlinkedModelSerializer):
#     formula = serializers.PrimaryKeyRelatedField(
#         queryset = Formula.objects.all()
#     )
#     class Meta:
#         model = Chemical
#         fields = ("id", "name", "symbol", )
    