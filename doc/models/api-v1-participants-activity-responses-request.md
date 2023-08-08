
# Api V1 Participants Activity Responses Request

## Structure

`ApiV1ParticipantsActivityResponsesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `activityPlanCardId` | `string \| undefined` | Optional | The reference id to the activity card |
| `responses` | [`Response[] \| undefined`](../../doc/models/response.md) | Optional | - |

## Example (as JSON)

```json
{
  "activityPlanCardId": "activityPlanCardId4",
  "responses": [
    {
      "activityValueId": "activityValueId5",
      "value": "value9"
    }
  ]
}
```

