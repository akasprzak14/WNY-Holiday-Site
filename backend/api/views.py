from django.http.response import HttpResponse
from django.shortcuts import render

def test(request):
    return HttpResponse(f'This is a test: {request.GET["t"]}')
