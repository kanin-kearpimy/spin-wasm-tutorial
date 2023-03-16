from spin_http import Response
import random, json

headers = [("content-type", "application/json")]
status = 200
sessions = ["number-1", 
    "number-2",
    "number-3",
    "number-4",
    "plus",
    "minus",
    "multiply",
    "divide",
    "back",
    "space",
    "next"]

def handle_request(request):
    jsonBody = json.loads(request.body)
    totalSession = getKey(jsonBody, 'totalSession') if hasKey(jsonBody, 'totalSession') else 15
    session = generate_session(totalSession)
    responseBody = json.dumps({"session": session}).encode('utf-8')
    
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
        _session.append(sessions[random.randint(0, 10)])
    return _session