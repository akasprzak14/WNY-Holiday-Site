import json

from django.http.response import JsonResponse
from django.http.request import HttpRequest
from django.views.decorators.csrf import csrf_exempt

from .helpers import send_booking_email, send_question_email

SUCCESS_RESPONSE = JsonResponse(
    {'result': 'success'},
    status=200
)

ERROR_RESPONSE = JsonResponse(
    {'result': 'error'},
    status=400
)


@csrf_exempt
def booking(request):
    # type: (HttpRequest) -> JsonResponse
    try:
        data = json.loads(request.body)
        form_fields = ['name', 'email', 'event', 'date', 'message']
        for field in form_fields:
            if field not in data:
                return ERROR_RESPONSE
        
        args = {
            field: data[field]
            for field in form_fields
        }
        result = send_booking_email(**args)
        return SUCCESS_RESPONSE if result else ERROR_RESPONSE
    except Exception:
        return ERROR_RESPONSE


@csrf_exempt
def question(request):
    # type: (HttpRequest) -> JsonResponse
    try:
        data = json.loads(request.body)
        form_fields = ['name', 'email', 'question']
        for field in form_fields:
            if field not in data:
                return ERROR_RESPONSE
        
        args = {
            field: data[field]
            for field in form_fields
        }
        result = send_question_email(**args)
        return SUCCESS_RESPONSE if result else ERROR_RESPONSE
    except Exception:
        return ERROR_RESPONSE
