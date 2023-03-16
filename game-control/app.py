from spin_http import Response
from spin_redis import redis_get, redis_set
import json
from os import environ

headers = [("Content-Type", "application/json"), ("Access-Control-Allow-Origin", "*")]

def handle_request(request):
    redisHost = environ.get('REDIS_HOST')
    jsonObj = getJsonBody(request.body)
    session_id = getKey(jsonObj, 'session_id')
    answer = getKey(jsonObj, 'answer')
    timeSlot = getKey(jsonObj, 'timeSlot')
    session = redis_get(redisHost, session_id)
    sessionJsonObj = json.loads(session)
    if(checkAnswer(answer, timeSlot, getKey(sessionJsonObj, 'session'))): 
        sessionJsonObj = json.dumps(increasePoint(sessionJsonObj)).encode('utf-8')
        redis_set(redisHost, session_id, sessionJsonObj)
    
    return Response(200,
                headers,
                json.dumps({"message": "successful"}).encode('utf-8')
            )


def getJsonBody(body):
    if(body):
        return json.loads(body)
    return {}

def hasKey(dictionary, key):
    return key in dictionary.keys()

def getKey(dictionary, key):
    if(hasKey(dictionary, key)):
        return dictionary[key]
    return None

def checkAnswer(answer, timeslot, session):
    return session[timeslot] == answer

def increasePoint(session):
    point = int(getKey(session, 'score'))
    point += 1
    session['score'] = point
    return session
    