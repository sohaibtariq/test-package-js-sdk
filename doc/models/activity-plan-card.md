
# Activity Plan Card

## Structure

`ActivityPlanCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `activityPlanId` | `string` | Required | - |
| `title` | `string` | Required | - |
| `description` | `unknown \| null \| undefined` | Optional | - |
| `imageUrl` | `string \| undefined` | Optional | - |
| `isOneOff` | `boolean` | Required | - |
| `scheduledAt` | `string \| undefined` | Optional | - |
| `reportedAt` | `string \| null \| undefined` | Optional | - |
| `data` | [`Data \| undefined`](../../doc/models/data.md) | Optional | - |
| `associatedJourney` | `string \| null \| undefined` | Optional | The name of journey linked to this card if any |
| `uiConfigs` | [`UiConfigs2 \| undefined`](../../doc/models/ui-configs-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "activityPlanId": "activityPlanId4",
  "title": "title4",
  "description": {
    "key1": "val1",
    "key2": "val2"
  },
  "imageUrl": "imageUrl0",
  "isOneOff": false,
  "scheduledAt": "scheduledAt8",
  "reportedAt": "reportedAt0"
}
```

