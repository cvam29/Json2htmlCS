# Azure Function: JSON to HTML Converter

This repository contains an Azure Function that is built with Node.js and TypeScript. The function is designed to receive JSON rich text and convert it to HTML.

## Function Details

- **Name**: Json2htmlfunction
- **Type**: HTTP Trigger
- **Method**: POST

## Folder Structure

The main function code is located in the `src/functions/Json2htmlfunction` directory.

## How to Use

To use this function, send a POST request to the function endpoint with the JSON rich text in the request body. The function will return the converted HTML.

## Development

This function is developed using Node.js and TypeScript. Please ensure to install all dependencies before running the function locally.

## Local Settings Configuration (`local.settings.json`)

To run this Azure Function locally, you'll need a `local.settings.json` file in your project root with the appropriate configuration values. Here's an example of what the `local.settings.json` file should look like:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsFeatureFlags": "EnableWorkerIndexing"
  }
}    
```


## Usage Example with cURL

You can use `curl` to send a POST request to the Azure Function endpoint. Here's how you can do it:

### Local Deployment:

```bash
curl --location 'http://localhost:7071/api/Json2HTMLFunction' \
--header 'Content-Type: application/json' \
--data '{
    "type": "doc",
    "uid": "cfe8176d1ca04cc0b42f60b3047f611d",
    "attrs": {},
    "children": [
        {
            "type": "p",
            "attrs": {},
            "uid": "6eae3c5bd7624bf39966c855543d954b",
            "children": [
                {
                    "type": "social-embed",
                    "attrs": {
                        "url": "https://twitter.com/Contentstack/status/1508911909038436365?cxt=HHwWmsC9-d_Y3fApAAAA",
                        "style": {},
                        "redactor-attributes": {
                            "url": "https://twitter.com/Contentstack/status/1508911909038436365?cxt=HHwWmsC9-d_Y3fApAAAA"
                        }
                    },
                    "uid": "8d8482d852b84822a9b66e55ffd0e57c",
                    "children": [
                        {
                            "text": ""
                        }
                    ]
                }
            ]
        },
        {
            "type": "p",
            "attrs": {},
            "uid": "54a7340da87846dda28aaf622069559a",
            "children": [
                {
                    "text": "This "
                },
                {
                    "text": "is",
                    "attrs": {
                        "style": {}
                    },
                    "color": "red"
                },
                {
                    "text": " text."
                }
            ]
        }
    ]
}'
