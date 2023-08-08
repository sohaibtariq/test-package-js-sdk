
# Api V1 Participants Request 1

## Structure

`ApiV1ParticipantsRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `gender` | `string \| undefined` | Optional | - |
| `dob` | `string \| undefined` | Optional | - |
| `preferences` | [`Preferences1 \| undefined`](../../doc/models/preferences-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "firstName": "firstName4",
  "lastName": "lastName4",
  "gender": "gender6",
  "dob": "dob4",
  "preferences": {
    "channelId": "channelId6",
    "timezone": "timezone2",
    "reminderHours": [
      220
    ]
  }
}
```

