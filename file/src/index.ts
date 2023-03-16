import { HandleRequest, HttpRequest, HttpResponse} from "@fermyon/spin-sdk"

const encoder = new TextEncoder()

export const handleRequest: HandleRequest = async function(request: HttpRequest): Promise<HttpResponse> {
  let aFile = await fsPromises.readFile('frontend/index.html')
  return {
    status: 200,
    headers: { "content-type": "text/html" },
    body: aFile
  }
}
