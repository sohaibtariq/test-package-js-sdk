# Groups

```ts
const groupsController = new GroupsController(client);
```

## Class Name

`GroupsController`

## Methods

* [Http Localhost 8080 Api V 1 Groups Search](../../doc/controllers/groups.md#http-localhost-8080-api-v-1-groups-search)
* [Http Localhost 8080 Api V 1 Groups Id](../../doc/controllers/groups.md#http-localhost-8080-api-v-1-groups-id)


# Http Localhost 8080 Api V 1 Groups Search

Search Groups

```ts
async httpLocalhost8080ApiV1GroupsSearch(
  xAPIKEY?: string,
  page?: number,
  perPage?: number,
  body?: ApiV1GroupsSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupSearchResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `page` | `number \| undefined` | Query, Optional | current page number |
| `perPage` | `number \| undefined` | Query, Optional | a number of records per page |
| `body` | [`ApiV1GroupsSearchRequest \| undefined`](../../doc/models/api-v1-groups-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupSearchResult`](../../doc/models/group-search-result.md)

## Example Usage

```ts
const xAPIKEY = 'apikey12345';

try {
  const { result, ...httpResponse } = await groupsController.httpLocalhost8080ApiV1GroupsSearch(
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
| 403 | Forbidden | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Http Localhost 8080 Api V 1 Groups Id

Get a group with id

```ts
async httpLocalhost8080ApiV1GroupsId(
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
  const { result, ...httpResponse } = await groupsController.httpLocalhost8080ApiV1GroupsId(
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

