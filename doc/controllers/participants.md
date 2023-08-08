# Participants

```ts
const participantsController = new ParticipantsController(client);
```

## Class Name

`ParticipantsController`

## Methods

* [Http Localhost 8080 Api V 1 Participants](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants)
* [Http Localhost 8080 Api V 1 Participants User Id](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id)
* [Patch-Api-V 1 -participants-User Id](../../doc/controllers/participants.md#patch-api-v-1--participants-user-id)
* [Http Localhost 8080 Api V 1 Participants User Id Email](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id-email)
* [Patch-Api-V 1 -participants-User Id-Password](../../doc/controllers/participants.md#patch-api-v-1--participants-user-id-password)
* [Http Localhost 8080 Api V 1 Participants User Id Mobile](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id-mobile)
* [Http Localhost 8080 Api V 1 Partcipants 1 Extras](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-partcipants-1-extras)
* [Http Localhost 8080 Api V 1 Participants 1 Tags](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-1-tags)
* [Http Localhost 8080 Api V 1 Participants 1 Tags 1](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-1-tags-1)
* [Http Localhost 8080 Api V 1 Participants User Id Groups](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id-groups)
* [Http Localhost 8080 Api V 1 Participants User Id Groups 1](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id-groups-1)
* [Http Localhost 8080 Api V 1 Participants User Id Activity Plan Cards Search](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id-activity-plan-cards-search)
* [Get-Api-V 1 -participants-User Id-Activity Plans-Id-Data](../../doc/controllers/participants.md#get-api-v-1--participants-user-id-activity-plans-id-data)
* [Http Localhost 8080 Api V 1 Participants User Id Survey Responses Id](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id-survey-responses-id)
* [Http Localhost 8080 Api V 1 Participants User Id Activity Responses](../../doc/controllers/participants.md#http-localhost-8080-api-v-1-participants-user-id-activity-responses)


# Http Localhost 8080 Api V 1 Participants

Create a new participant

```ts
async httpLocalhost8080ApiV1Participants(
  xApiKey?: string,
  body?: ApiV1ParticipantsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiV1ParticipantsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsRequest \| undefined`](../../doc/models/api-v1-participants-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiV1ParticipantsResponse`](../../doc/models/api-v1-participants-response.md)

## Example Usage

```ts
const xApiKey = 'apikey12345';

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1Participants(
    xApiKey
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


# Http Localhost 8080 Api V 1 Participants User Id

Get a participant

```ts
async httpLocalhost8080ApiV1ParticipantsUserId(
  userId: number,
  xAPIKEY?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Participant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `number` | Template, Required | - |
| `xAPIKEY` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Participant`](../../doc/models/participant.md)

## Example Usage

```ts
const userId = 2;

const xAPIKEY = 'apikey12345';

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserId(
    userId,
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


# Patch-Api-V 1 -participants-User Id

Update the partcipant's profile like First Name, Last Name, Gender, DOB and Preferences

```ts
async patchApiV1ParticipantsUserId(
  userId: string,
  xAPIKey?: string,
  body?: ApiV1ParticipantsRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xAPIKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsRequest1 \| undefined`](../../doc/models/api-v1-participants-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

try {
  const { result, ...httpResponse } = await participantsController.patchApiV1ParticipantsUserId(userId);
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


# Http Localhost 8080 Api V 1 Participants User Id Email

Update the participant's email

```ts
async httpLocalhost8080ApiV1ParticipantsUserIdEmail(
  userId: number,
  xApiKey?: string,
  body?: ApiV1ParticipantsEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `number` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsEmailRequest \| undefined`](../../doc/models/api-v1-participants-email-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 2;

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsEmailRequest = {
  email: 'user_1@example.com',
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserIdEmail(
    userId,
    xApiKey,
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


# Patch-Api-V 1 -participants-User Id-Password

```ts
async patchApiV1ParticipantsUserIdPassword(
  userId: string,
  xAPIKey?: string,
  body?: ApiV1ParticipantsPasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xAPIKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsPasswordRequest \| undefined`](../../doc/models/api-v1-participants-password-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

const body: ApiV1ParticipantsPasswordRequest = {
  password: 'xxxxxxx',
};

try {
  const { result, ...httpResponse } = await participantsController.patchApiV1ParticipantsUserIdPassword(
    userId,
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


# Http Localhost 8080 Api V 1 Participants User Id Mobile

http://localhost:8080/api/v1/participants/:user_id/mobile

```ts
async httpLocalhost8080ApiV1ParticipantsUserIdMobile(
  userId: number,
  xApiKey?: string,
  body?: ApiV1ParticipantsMobileRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `number` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsMobileRequest \| undefined`](../../doc/models/api-v1-participants-mobile-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 2;

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsMobileRequest = {
  mobile: '+6421111111',
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserIdMobile(
    userId,
    xApiKey,
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


# Http Localhost 8080 Api V 1 Partcipants 1 Extras

Save the participant's the extra field

```ts
async httpLocalhost8080ApiV1Partcipants1Extras(
  userId: string,
  xAPIKey?: string,
  body?: ApiV1PartcipantsExtrasRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xAPIKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1PartcipantsExtrasRequest \| undefined`](../../doc/models/api-v1-partcipants-extras-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user_id8';

const body: ApiV1PartcipantsExtrasRequest = {
  extraCode: 'ENGAGEMENT_SCORE',
  value: '30',
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1Partcipants1Extras(
    userId,
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


# Http Localhost 8080 Api V 1 Participants 1 Tags

Add a tag to the participant.

```ts
async httpLocalhost8080ApiV1Participants1Tags(
  userId: string,
  xApiKey?: string,
  body?: ApiV1ParticipantsTagsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsTagsRequest \| undefined`](../../doc/models/api-v1-participants-tags-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsTagsRequest = {
  tagIds: [
    '1',
    '2'
  ],
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1Participants1Tags(
    userId,
    xApiKey,
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


# Http Localhost 8080 Api V 1 Participants 1 Tags 1

Remove the tag from the participant

```ts
async httpLocalhost8080ApiV1Participants1Tags1(
  userId: string,
  xApiKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

const xApiKey = 'apikey12345';

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1Participants1Tags1(
    userId,
    xApiKey
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


# Http Localhost 8080 Api V 1 Participants User Id Groups

Add the participant to the groups

```ts
async httpLocalhost8080ApiV1ParticipantsUserIdGroups(
  userId: string,
  xApiKey?: string,
  body?: ApiV1ParticipantsGroupsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsGroupsRequest \| undefined`](../../doc/models/api-v1-participants-groups-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsGroupsRequest = {
  groupIds: [
    '1'
  ],
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserIdGroups(
    userId,
    xApiKey,
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


# Http Localhost 8080 Api V 1 Participants User Id Groups 1

Remove the participant from the groups

```ts
async httpLocalhost8080ApiV1ParticipantsUserIdGroups1(
  userId: string,
  xApiKey?: string,
  body?: ApiV1ParticipantsGroupsRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsGroupsRequest1 \| undefined`](../../doc/models/api-v1-participants-groups-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsGroupsRequest1 = {
  groupIds: [
    '1'
  ],
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserIdGroups1(
    userId,
    xApiKey,
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


# Http Localhost 8080 Api V 1 Participants User Id Activity Plan Cards Search

Search the activity plan cards (details) assigned to the participant

```ts
async httpLocalhost8080ApiV1ParticipantsUserIdActivityPlanCardsSearch(
  userId: string,
  xApiKey?: string,
  page?: number,
  perPage?: number,
  body?: ApiV1ParticipantsActivityPlanCardsSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActivityPlanCardSearch>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `page` | `number \| undefined` | Query, Optional | current page number |
| `perPage` | `number \| undefined` | Query, Optional | a number of records per page |
| `body` | [`ApiV1ParticipantsActivityPlanCardsSearchRequest \| undefined`](../../doc/models/api-v1-participants-activity-plan-cards-search-request.md) | Body, Optional | All of the search fields are optional |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActivityPlanCardSearch`](../../doc/models/activity-plan-card-search.md)

## Example Usage

```ts
const userId = 'user_id8';

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsActivityPlanCardsSearchRequest = {
  activityPlanType: 'SURVEY',
  activityPlanName: 'Te',
  fromDate: '2023-01-01',
  toDate: '2023-02-01',
  isActive: true,
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserIdActivityPlanCardsSearch(
    userId,
    xApiKey,
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
  "results": [
    {
      "id": "2",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-04T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "2",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    },
    {
      "id": "3",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-05T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "3",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    },
    {
      "id": "4",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-06T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "4",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    },
    {
      "id": "5",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-07T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "5",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    },
    {
      "id": "6",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-08T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "6",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    },
    {
      "id": "7",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-09T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "7",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    },
    {
      "id": "8",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-10T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "8",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    },
    {
      "id": "9",
      "activityPlanId": "3",
      "title": "Walking 2km",
      "description": null,
      "imageUrl": "",
      "isOneOff": false,
      "scheduledAt": "2023-04-11T08:00:00Z",
      "reportedAt": null,
      "data": {
        "activityPlanType": "GENERAL_ACTIVITY",
        "activityPlanTypeId": "2",
        "activityValues": [
          {
            "id": "9",
            "measureTypeId": "3",
            "measureTypeName": "Km",
            "measureDataType": "N",
            "measureTypeOptions": [
              ""
            ],
            "valueDataType": "N",
            "reportedValue": null
          }
        ]
      },
      "associatedJourney": null,
      "uiConfigs": {
        "CARD_CONTENT_TYPE": "MULTI",
        "CARD_LAYOUT": "STANDARD",
        "CARD_LAYOUT_TYPE": "INLINE",
        "CARD_THEME": "ROUNDED",
        "END_BUTTON_LABEL": "Submit",
        "IMAGE_ASPECT_RATIO": "STANDARD",
        "RESPONSE_UI_CONFIGS": [
          {
            "RESPONSE_UI_TYPE": "NUMERIC_TEXT"
          }
        ],
        "START_BUTTON_LABEL": "Start",
        "START_BUTTON_POSITION": "BOTTOM",
        "TEMPLATE": "Default"
      }
    }
  ],
  "total": 8
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Get-Api-V 1 -participants-User Id-Activity Plans-Id-Data

Fetch the participant's all activity data between from date and to date for a particular activity plan. The response contains the activity type and its measure types along with activity data during the given timeframe.
The maximum date range is allowed to be 1 year.

```ts
async getApiV1ParticipantsUserIdActivityPlansIdData(
  userId: string,
  id: string,
  from?: string,
  to?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiV1ParticipantsActivityPlansDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `id` | `string` | Template, Required | - |
| `from` | `string \| undefined` | Query, Optional | From Date in 'YYYY-MM-DD' format |
| `to` | `string \| undefined` | Query, Optional | To Date in 'YYYY-MM-DD' format |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiV1ParticipantsActivityPlansDataResponse`](../../doc/models/api-v1-participants-activity-plans-data-response.md)

## Example Usage

```ts
const userId = 'user_id8';

const id = 'id0';

try {
  const { result, ...httpResponse } = await participantsController.getApiV1ParticipantsUserIdActivityPlansIdData(
    userId,
    id
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
  "participantId": "1",
  "activityPlan": {
    "id": "3",
    "activityPlanName": "Walking Long Distance",
    "activityTypeName": "Walking",
    "activityTypeCode": "WALKING",
    "ActivityTypeGroupCode": "PHYSICAL",
    "ActivityMeasureTypes": [
      {
        "measureTypeId": "3",
        "measureTypeName": "km",
        "MeasureTypeCode": "KM",
        "MeasureDataType": "N",
        "MeasureTypeOptions": [
          ""
        ]
      }
    ]
  },
  "data": [
    {
      "id": "3",
      "activityValues": [
        {
          "id": "2",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-03T08:00:00Z",
      "reportedAt": null
    },
    {
      "id": "4",
      "activityValues": [
        {
          "id": "3",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-04T08:00:00Z",
      "reportedAt": null
    },
    {
      "id": "5",
      "activityValues": [
        {
          "id": "4",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-05T08:00:00Z",
      "reportedAt": null
    },
    {
      "id": "6",
      "activityValues": [
        {
          "id": "5",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-06T08:00:00Z",
      "reportedAt": null
    },
    {
      "id": "7",
      "activityValues": [
        {
          "id": "6",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-07T08:00:00Z",
      "reportedAt": null
    },
    {
      "id": "8",
      "activityValues": [
        {
          "id": "7",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-08T08:00:00Z",
      "reportedAt": null
    },
    {
      "id": "9",
      "activityValues": [
        {
          "id": "8",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-09T08:00:00Z",
      "reportedAt": null
    },
    {
      "id": "10",
      "activityValues": [
        {
          "id": "9",
          "measureTypeId": "3",
          "reportedValue": null
        }
      ],
      "scheduledAt": "2023-02-10T08:00:00Z",
      "reportedAt": null
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Http Localhost 8080 Api V 1 Participants User Id Survey Responses Id

Submit the survey participation

```ts
async httpLocalhost8080ApiV1ParticipantsUserIdSurveyResponsesId(
  userId: string,
  xApiKey?: string,
  body?: ApiV1ParticipantsSurveyResponsesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsSurveyResponsesRequest \| undefined`](../../doc/models/api-v1-participants-survey-responses-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsSurveyResponsesRequest = {
  activityPlanCardId: '4',
  surveyId: '1',
  surveyResponses: [
    {
      surveyQuestionId: '1',
      surveyAnswers: [
        {
          surveyResponseOptionId: '2',
        }
      ],
    },
    {
      surveyQuestionId: '2',
      surveyAnswers: [
        {
          surveyResponseOptionId: '3',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserIdSurveyResponsesId(
    userId,
    xApiKey,
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


# Http Localhost 8080 Api V 1 Participants User Id Activity Responses

Report the given activity

```ts
async httpLocalhost8080ApiV1ParticipantsUserIdActivityResponses(
  userId: string,
  id: number,
  xApiKey?: string,
  body?: ApiV1ParticipantsActivityResponsesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Id>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `id` | `number` | Template, Required | - |
| `xApiKey` | `string \| undefined` | Header, Optional | - |
| `body` | [`ApiV1ParticipantsActivityResponsesRequest \| undefined`](../../doc/models/api-v1-participants-activity-responses-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Id`](../../doc/models/id.md)

## Example Usage

```ts
const userId = 'user_id8';

const id = 4;

const xApiKey = 'apikey12345';

const body: ApiV1ParticipantsActivityResponsesRequest = {
  activityPlanCardId: '4',
  responses: [
    {
      activityValueId: '1',
      value: '3',
    },
    {
      activityValueId: '2',
      value: '4',
    }
  ],
};

try {
  const { result, ...httpResponse } = await participantsController.httpLocalhost8080ApiV1ParticipantsUserIdActivityResponses(
    userId,
    id,
    xApiKey,
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

