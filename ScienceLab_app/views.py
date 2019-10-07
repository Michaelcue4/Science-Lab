from rest_framework import viewsets
from .serializers import ScientistSerializer, FormulaSerializer, InstituteSerializer
from .models import Scientist, Formula, Institute
import requests 
from django.http import JsonResponse, HttpResponse
from django.views import View
from rest_framework.response import Response

class ScientistList(viewsets.ModelViewSet):
    queryset = Scientist.objects.all()
    serializer_class = ScientistSerializer

class FormulaList(viewsets.ModelViewSet):
    queryset = Formula.objects.all()
    serializer_class = FormulaSerializer

class InstituteList(viewsets.ModelViewSet):
    queryset = Institute.objects.all()
    serializer_class = InstituteSerializer

class ElementList(viewsets.ViewSet):
     def list(self, request, atomic_name):
        results = requests.get(f'https://periodic-table-api.herokuapp.com/atomicName/{atomic_name}').json()
        return Response(results)
