# Surveys

```ts
const surveysController = new SurveysController(client);
```

## Class Name

`SurveysController`

## Methods

* [Http Localhost 8080 Api V 1 Surveys Search](../../doc/controllers/surveys.md#http-localhost-8080-api-v-1-surveys-search)
* [Http Localhost 8080 Api V 1 Surveys Id](../../doc/controllers/surveys.md#http-localhost-8080-api-v-1-surveys-id)


# Http Localhost 8080 Api V 1 Surveys Search

Search surveys

```ts
async httpLocalhost8080ApiV1SurveysSearch(
  xAPIKEY?: string,
  page?: number,
  perPage?: number,
  body?: ApiV1SurveysSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SurveySearchResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `page` | `number \| undefined` | Query, Optional | current page number |
| `perPage` | `number \| undefined` | Query, Optional | a number of records per page |
| `body` | [`ApiV1SurveysSearchRequest \| undefined`](../../doc/models/api-v1-surveys-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SurveySearchResult`](../../doc/models/survey-search-result.md)

## Example Usage

```ts
const xAPIKEY = 'apikey12345';

try {
  const { result, ...httpResponse } = await surveysController.httpLocalhost8080ApiV1SurveysSearch(
    xAPIKEY
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "results": [
    {
      "id": "1",
      "code": "TRAUMA",
      "name": "Trauma Questionnaire",
      "descriptionShort": null,
      "descriptionLong": null,
      "externalReference": null,
      "surveyTags": [],
      "surveyGroups": [],
      "surveySections": [],
      "isActive": true
    }
  ],
  "total": 1
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Http Localhost 8080 Api V 1 Surveys Id

http://localhost:8080/api/v1/surveys/:id

```ts
async httpLocalhost8080ApiV1SurveysId(
  id: number,
  xAPIKEY?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Survey>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Survey`](../../doc/models/survey.md)

## Example Usage

```ts
const id = 1;

const xAPIKEY = 'apikey12345';

try {
  const { result, ...httpResponse } = await surveysController.httpLocalhost8080ApiV1SurveysId(
    id,
    xAPIKEY
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "2",
  "code": "PROM_EXAMPLE",
  "name": "PROM-Example",
  "descriptionShort": null,
  "descriptionLong": null,
  "externalReference": null,
  "surveyTags": [],
  "surveyGroups": [],
  "surveySections": [
    {
      "id": "2",
      "name": "General Information",
      "descriptionShort": "",
      "descriptionLong": "",
      "uiConfigs": {
        "SHOW_LONG_DESCRIPTION": false,
        "SHOW_NAME": false,
        "SHOW_SHORT_DESCRIPTION": false,
        "TEMPLATE": "Default"
      },
      "surveyQuestions": [
        {
          "id": "2",
          "questionText": "Did you receive the PROMs summary information ahead of your review?",
          "descriptionShort": null,
          "descriptionLong": null,
          "uiConfigs": {
            "RESPONSE_UI_CONFIGS": {
              "DEFAULT_VALUE": 3,
              "MAX_VALUE": 5,
              "MIN_VALUE": 0,
              "OPTION_SELECTION_MAX": 1,
              "OPTION_SELECTION_MIN": 1,
              "RESPONSE_UI_TYPE": "YES_NO"
            },
            "SHOW_LONG_DESCRIPTION": false,
            "SHOW_SHORT_DESCRIPTION": false,
            "TEMPLATE": "Default"
          },
          "surveyResponseOptions": [
            {
              "id": "5",
              "label": "Yes",
              "score": 1,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            },
            {
              "id": "6",
              "label": "No",
              "score": 0,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            }
          ],
          "isActive": true,
          "isRequired": true,
          "displayOrder": 1
        },
        {
          "id": "3",
          "questionText": "Was the information easy to understand?",
          "descriptionShort": null,
          "descriptionLong": null,
          "uiConfigs": {
            "RESPONSE_UI_CONFIGS": {
              "DEFAULT_VALUE": 3,
              "MAX_VALUE": 5,
              "MIN_VALUE": 0,
              "OPTION_SELECTION_MAX": 1,
              "OPTION_SELECTION_MIN": 1,
              "RESPONSE_UI_TYPE": "CATEGORY"
            },
            "SHOW_LONG_DESCRIPTION": false,
            "SHOW_SHORT_DESCRIPTION": false,
            "TEMPLATE": "Default"
          },
          "surveyResponseOptions": [
            {
              "id": "7",
              "label": "Strongly Agree",
              "score": 5,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            },
            {
              "id": "8",
              "label": "Agree",
              "score": 4,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            },
            {
              "id": "9",
              "label": "Neither agree or disagree",
              "score": 3,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            },
            {
              "id": "10",
              "label": "Disagree",
              "score": 2,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            },
            {
              "id": "11",
              "label": "Strongly disagree",
              "score": 1,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            }
          ],
          "isActive": true,
          "isRequired": true,
          "displayOrder": 2
        },
        {
          "id": "4",
          "questionText": "Would you have preferred more information?",
          "descriptionShort": null,
          "descriptionLong": null,
          "uiConfigs": {
            "RESPONSE_UI_CONFIGS": {
              "DEFAULT_VALUE": 3,
              "MAX_VALUE": 5,
              "MIN_VALUE": 0,
              "OPTION_SELECTION_MAX": 1,
              "OPTION_SELECTION_MIN": 1,
              "RESPONSE_UI_TYPE": "YES_NO"
            },
            "SHOW_LONG_DESCRIPTION": false,
            "SHOW_SHORT_DESCRIPTION": false,
            "TEMPLATE": "Default"
          },
          "surveyResponseOptions": [
            {
              "id": "12",
              "label": "Yes",
              "score": 1,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            },
            {
              "id": "13",
              "label": "No",
              "score": 0,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            }
          ],
          "isActive": true,
          "isRequired": true,
          "displayOrder": 3
        },
        {
          "id": "5",
          "questionText": "Was your GP/Nurse aware of the PROMs summary information",
          "descriptionShort": null,
          "descriptionLong": null,
          "uiConfigs": {
            "RESPONSE_UI_CONFIGS": {
              "DEFAULT_VALUE": 3,
              "MAX_VALUE": 5,
              "MIN_VALUE": 0,
              "OPTION_SELECTION_MAX": 1,
              "OPTION_SELECTION_MIN": 1,
              "RESPONSE_UI_TYPE": "YES_NO"
            },
            "SHOW_LONG_DESCRIPTION": false,
            "SHOW_SHORT_DESCRIPTION": false,
            "TEMPLATE": "Default"
          },
          "surveyResponseOptions": [
            {
              "id": "14",
              "label": "Yes",
              "score": 1,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            },
            {
              "id": "15",
              "label": "No",
              "score": 0,
              "descriptionShort": null,
              "descriptionLong": null,
              "isActive": true
            }
          ],
          "isActive": true,
          "isRequired": true,
          "displayOrder": 4
        }
      ],
      "isActive": true,
      "displayOrder": 1
    }
  ],
  "isActive": true
}
```

