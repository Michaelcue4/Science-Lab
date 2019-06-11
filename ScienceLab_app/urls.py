from rest_framework import routers
from .views import ScientistList, FormulaList, InstituteList

router = routers.SimpleRouter()
router.register('scientists', ScientistList)
router.register('formulas', FormulaList)
router.register('institutes', InstituteList)
urlpatterns = router.urls