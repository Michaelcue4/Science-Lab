import logging
import os
from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import requests

class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `npm
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `npm run build` to test the production version.
                """,
                status=501,
            )

    def element(request,element):
        url = "https://periodic-table-api.herokuapp.com/atomicName/{element}"
        # element = "Mercury"
       
        # elements = Chemical.objects.all()
        # element_data = []
        # for element in elements:
        #     r = requests.get(url.format(name)).json()
        # element_data = {
        #     "name": elementName ,
        #     "atomicNumber": ,
        #     "atomicMass": ,
        #     "atomicRadius": ,
        #     "boilingPoint": "",
        #     "density": "",
        #     "electronAffinity": "",
        #     "electronegativity": "",
        #     "groupBlock": "",
        #     "ionRadius": "",
        #     "meltingPoint": "",
        #     "oxidationStates": "",
        #     "standardState": "",
        #     "symbol": "",
        #     "yearDiscovered": ""

        # }

        return (request)

