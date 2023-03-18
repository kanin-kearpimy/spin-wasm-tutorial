import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const handleRequest: HandleRequest = async function(request: HttpRequest): Promise<HttpResponse> {
  let querys = getQueryParams(request.uri)
  const redis_host: string = process.env.REDIS_HOST as string

  // 1) get session id from request (query string)
  // 2) fetch score in redis database.
  // 3) return score corresponding to session ID
  // 3.5) if no session ID, return 'No Session ID.
  // code here.
  // .....
  // .....

  // code here.
  // .....
  // .....
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