from spin_http import Response
import random, json, uuid
from spin_redis import redis_set
from os import environ

headers = [("content-type", "application/json"), ("Access-Control-Allow-Origin", "*")]
status = 200
sessions = ["number-1", 
    "number-2",
    "number-3",
    "number-4",
    ]

def handle_request(request):
    redisHost = environ.get('REDIS_HOST')
    queryParms = getQueryParams(request.uri)
    # code here
    # .....
    # .....
    
    return Response(
                    status,
                    headers,
                    responseBody)

def hasKey(dictionary, key):
    return key in dictionary.keys()

def getKey(dictionary, key):
    if(hasKey(dictionary, key)):
        return dictionary[key]
    return None

def generate_session(totalSession):
    _session = []
    while(len(_session) < totalSession):
        _session.append(sessions[random.randint(0, 3)])
    return _session

def getQueryParams(uri):
    def map_key_value(text):
        parser = text.split('=')
        _key = parser[0]
        _value = parser[1]
        
        return (_key, _value)

    def convert_json(keyValueObj):
        dictionary = {}
        for key, value in keyValueObj:
            dictionary[key] = value
        return dictionary

    keyValueObject = list(map(map_key_value, uri.split('?')[1].split('&')))
    
    return convert_json(keyValueObject)