import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { jsonToHtml } from '@contentstack/json-rte-serializer'

export async function Json2HTMLFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const json = await request.text();
  
    let jsonVal: any;
    
    try 
    {
        jsonVal = JSON.parse(json);
    }
    catch (e) 
    {
        context.log('The JSON is invalid', json);
        return {
            status: 400,
            body: 'The JSON is invalid',
        };
    }
    const html = jsonToHtml(jsonVal);
    return {
        body: html,
        headers: { 'Content-Type': 'text/html' },
    };
};

app.http('Json2HTMLFunction', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: Json2HTMLFunction
});
