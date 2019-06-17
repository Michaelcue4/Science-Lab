from rest_framework import routers
from .views import ScientistList, FormulaList, InstituteList, ElementList
from django.urls import include, path
from . import views
router = routers.SimpleRouter()
router.register('scientists', ScientistList)
router.register('formulas', FormulaList)
router.register('institutes', InstituteList)
router.register(r'elements/(?P<atomic_name>[\w-]+)', ElementList, base_name='elements')

urlpatterns = router.urls