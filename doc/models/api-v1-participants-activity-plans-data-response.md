
# Api V1 Participants Activity Plans Data Response

## Structure

`ApiV1ParticipantsActivityPlansDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `participantId` | `string \| undefined` | Optional | - |
| `activityPlan` | [`ActivityPlan \| undefined`](../../doc/models/activity-plan.md) | Optional | - |
| `data` | [`Data2[] \| undefined`](../../doc/models/data-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "participantId": "participantId0",
  "activityPlan": {
    "id": "id8",
    "activityPlanName": "activityPlanName8",
    "activityTypeName": "activityTypeName6",
    "activityTypeCode": "activityTypeCode2",
    "ActivityTypeGroupCode": "ActivityTypeGroupCode6"
  },
  "data": [
    {
      "id": "id5",
      "activityValues": [
        {
          "id": "id4",
          "measureTypeId": "measureTypeId2",
          "reportedValue": {
            "key1": "val1",
            "key2": "val2"
          }
        }
      ],
      "scheduledAt": "scheduledAt7",
      "reportedAt": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "id": "id6",
      "activityValues": [
        {
          "id": "id3",
          "measureTypeId": "measureTypeId3",
          "reportedValue": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        {
          "id": "id2",
          "measureTypeId": "measureTypeId4",
          "reportedValue": {
            "key1": "val1",
            "key2": "val2"
          }
        }
      ],
      "scheduledAt": "scheduledAt8",
      "reportedAt": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ]
}
```

