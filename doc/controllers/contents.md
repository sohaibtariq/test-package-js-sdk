# Contents

```ts
const contentsController = new ContentsController(client);
```

## Class Name

`ContentsController`

## Methods

* [Http Localhost 8080 Api V 1 Contents Search](../../doc/controllers/contents.md#http-localhost-8080-api-v-1-contents-search)
* [Http Localhost 8080 Api V 1 Contents Id](../../doc/controllers/contents.md#http-localhost-8080-api-v-1-contents-id)


# Http Localhost 8080 Api V 1 Contents Search

Search surveys

```ts
async httpLocalhost8080ApiV1ContentsSearch(
  xAPIKEY?: string,
  page?: number,
  perPage?: number,
  body?: ApiV1ContentsSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContentSearchResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `page` | `number \| undefined` | Query, Optional | current page number |
| `perPage` | `number \| undefined` | Query, Optional | a number of records per page |
| `body` | [`ApiV1ContentsSearchRequest \| undefined`](../../doc/models/api-v1-contents-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContentSearchResult`](../../doc/models/content-search-result.md)

## Example Usage

```ts
const xAPIKEY = 'apikey12345';

try {
  const { result, ...httpResponse } = await contentsController.httpLocalhost8080ApiV1ContentsSearch(
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


# Http Localhost 8080 Api V 1 Contents Id

http://localhost:8080/api/v1/contents/:id

```ts
async httpLocalhost8080ApiV1ContentsId(
  id: number,
  xAPIKEY?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 1;

const xAPIKEY = 'apikey12345';

try {
  const { result, ...httpResponse } = await contentsController.httpLocalhost8080ApiV1ContentsId(
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | [`ContentError`](../../doc/models/content-error.md) |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |

