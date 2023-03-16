import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const handleRequest: HandleRequest = async function(request: HttpRequest): Promise<HttpResponse> {
  let querys = getQueryParams(request.uri)
  const redis_host: string = process.env.REDIS_HOST as string
  if(!("session_id" in querys)) {
    return {
      status: 400,
      headers: { "content-type": "text/plain", "Access-Control-Allow-Origin": "*" },
      body: encoder.encode("No Session ID.").buffer
    }
  }
  
  const session = decoder.decode(spinSdk.redis.get(redis_host as string, querys.session_id))
  const { score } = JSON.parse(session)
  return {
    status: 200,
    headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: encoder.encode(JSON.stringify({score: score})).buffer
  }
}

const getQueryParams = (uri: string) => {
  if(uri.split('?').length > 1){
    let keyValueObj = uri.split('?')[1].split('&').map(mapKeyValue)
    return convert_json(keyValueObj)
  }
  return {}
}

const mapKeyValue = (text: string) => {
  let parser: string[] = text.split('=')
  let _key = parser[0]
  let _value = parser[1]

  return [_key, _value]
}

const convert_json = (keyValueObject: any[]) => {
  let object: any = {}
  for (const iterator of keyValueObject) {
    const [key, value] = iterator
    object[key] = value
  }

  return object
}