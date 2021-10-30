from django.http.response import HttpResponse, JsonResponse
from django.http.request import HttpRequest

from .helpers import send_email

SUCCESS_RESPONSE = {
    'status': 'success'
}

ERROR_RESPONSE = {
    'status': 'error'
}


def contact_form(request):
    # type: (HttpRequest) -> JsonResponse
    data = request.POST
    form_fields = ['name', 'reply_email', 'event_type', 'event_date', 'event_time', 'message']
    for field in form_fields:
        if field not in data:
            return JsonResponse(ERROR_RESPONSE)
    
    args = {
        field: data[field]
        for field in form_fields
    }
    result = send_email(**args)
    return JsonResponse(SUCCESS_RESPONSE) if result else JsonResponse(ERROR_RESPONSE)
