
# Getting Started with Intervengine Application API V1

## Introduction

This api provides the endpoints to build an application using Intervegine core APIs

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install test-package-sdk@1.0.0
```

For additional package details, see the [Npm page for the test-package-sdk@1.0.0  npm](https://www.npmjs.com/package/test-package-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
});
```

## List of APIs

* [Auth](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/controllers/auth.md)
* [Tags](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/controllers/tags.md)
* [Groups](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/controllers/groups.md)
* [Contents](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/controllers/contents.md)
* [Surveys](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/controllers/surveys.md)
* [Extras](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/controllers/extras.md)
* [Participants](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/controllers/participants.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sohaibtariq/test-package-js-sdk/tree/1.0.0/doc/api-error.md)

