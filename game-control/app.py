from spin_http import Response
from spin_redis import redis_get, redis_set
import json
from os import environ

headers = [("Content-Type", "application/json"), ("Access-Control-Allow-Origin", "*")]

def handle_request(request):
    redisHost = environ.get('REDIS_HOST')
    # 1) read session_id, answer, timeSlot from request (body)
    # 2) check correct answer in redis database.
    # 3) if yes; score + 1
    # 4) if no; do nothing.
    # code here
    # .....
    # .....


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
    