# Auth

```ts
const authController = new AuthController(client);
```

## Class Name

`AuthController`


# Http Localhost 8080 Api V 1 Auth Token Upgrade

Search tags

```ts
async httpLocalhost8080ApiV1AuthTokenUpgrade(
  xAPIKEY?: string,
  body?: ApiV1AuthTokenUpgradeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiV1AuthTokenUpgradeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1AuthTokenUpgradeRequest \| undefined`](../../doc/models/api-v1-auth-token-upgrade-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiV1AuthTokenUpgradeResponse`](../../doc/models/api-v1-auth-token-upgrade-response.md)

## Example Usage

```ts
const xAPIKEY = 'apikey12345';

const body: ApiV1AuthTokenUpgradeRequest = {
  token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imo5S09fN2ZiU1JKUHFpdV9SeXlSQyJ9.eyJuaWNrbmFtZSI6ImphdmFzb25peCIsIm5hbWUiOiJqYXZhc29uaXhAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzhiY2NhMTI0MWQ4NmI1MGU0ZDc3ZTIzZWM3YTFlNWU3P3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGamEucG5nIiwidXBkYXRlZF9hdCI6IjIwMjMtMDUtMTVUMjM6NDc6MTUuMjkxWiIsImVtYWlsIjoiamF2YXNvbml4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1kZ3MweWR4cjV4dHNobW5nLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJGWXY3aE5DYzdlcEFxWmNBTjYzdG50emhIajgzb1MxbyIsImlhdCI6MTY4NDE5NDQzNSwiZXhwIjoxNjg0MjMwNDM1LCJzdWIiOiJhdXRoMHw2NDYxNzBmYWVhMGI0N2YxNTIzNzEyNGYifQ.g5ExZKsPTV0MyG5wnKIQaOqQvGbYnqkPxwkGFpu-zEqvRcRY0ifYQ-MLzvdUPUchs7FnAIExCwrenkb8OU5EO3G8ydG4Z_bEmj5-46Rf6DVK729auMBmbgulXyUCwb4A354tlO82jamkIBk4EJUYkjrcFS0XahOEsP3Nxje58BPgzUPNW3IXn3ed2UK6O63G72953LY4If0rmfbTQDVnG7-5u2F5NGuKr2Hecgg-g9hX9DNAivXcq4ceoicG7fXXmhVEVteMuaIBHHLZCBsbfT2OAe49ZQFO3HqzoytYlK5PdoAok6PjZCzYf-Fan_7Ap-iqGp_E5YtVamEHciaZMw',
};

try {
  const { result, ...httpResponse } = await authController.httpLocalhost8080ApiV1AuthTokenUpgrade(
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

## Example Response *(as JSON)*

```json
{
  "customToken": "APZUo0TycEXUais3c3XjZ5iRipbJXOK86iSgUdGYa0pGJhQJ697m1OyJ2I08OrWav052yaDeRXtOCX6H-SVB5JiSA2kZpmmOiNBKjoGB7OIqCkPGUBMehooavK28HLkBUVxXLBNmtpTT5pEN-us78gdyr7HQKLc-GbJ3Dy08ZY0TRWKks0oizGMUycdMcpQ7jLQTaYHxHfNw4Tqy6p0pFlNQKHHuz2pCk_XlZs25zyD3l7tuorrZBEE",
  "expiresIn": 3600
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |

