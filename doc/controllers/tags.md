# Tags

```ts
const tagsController = new TagsController(client);
```

## Class Name

`TagsController`

## Methods

* [Http Localhost 8080 Api V 1 Tags Search](../../doc/controllers/tags.md#http-localhost-8080-api-v-1-tags-search)
* [Http Localhost 8080 Api V 1 Tags Id](../../doc/controllers/tags.md#http-localhost-8080-api-v-1-tags-id)


# Http Localhost 8080 Api V 1 Tags Search

Search tags

```ts
async httpLocalhost8080ApiV1TagsSearch(
  xAPIKEY?: string,
  page?: number,
  perPage?: number,
  body?: ApiV1TagsSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TagSearchResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `page` | `number \| undefined` | Query, Optional | current page number |
| `perPage` | `number \| undefined` | Query, Optional | a number of records per page |
| `body` | [`ApiV1TagsSearchRequest \| undefined`](../../doc/models/api-v1-tags-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TagSearchResult`](../../doc/models/tag-search-result.md)

## Example Usage

```ts
const xAPIKEY = 'apikey12345';

const body: ApiV1TagsSearchRequest = {
  code: 'TEST',
  name: 'Tes',
  isActive: true,
};

try {
  const { result, ...httpResponse } = await tagsController.httpLocalhost8080ApiV1TagsSearch(
    xAPIKEY,
    body
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
| 401 | Unauthorized | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Http Localhost 8080 Api V 1 Tags Id

Get an tag with id

```ts
async httpLocalhost8080ApiV1TagsId(
  id: number,
  xAPIKEY?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Tag>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Tag`](../../doc/models/tag.md)

## Example Usage

```ts
const id = 1;

const xAPIKEY = 'apikey12345';

try {
  const { result, ...httpResponse } = await tagsController.httpLocalhost8080ApiV1TagsId(
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
| 401 | Unauthorized | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |

