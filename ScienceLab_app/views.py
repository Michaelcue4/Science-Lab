from rest_framework import viewsets
from .serializers import ScientistSerializer, FormulaSerializer, InstituteSerializer
from .models import Scientist, Formula, Institute

class ScientistList(viewsets.ModelViewSet):
    queryset = Scientist.objects.all()
    serializer_class = ScientistSerializer

class FormulaList(viewsets.ModelViewSet):
    queryset = Formula.objects.all()
    serializer_class = FormulaSerializer

class InstituteList(viewsets.ModelViewSet):
    queryset = Institute.objects.all()
    serializer_class = InstituteSerializer