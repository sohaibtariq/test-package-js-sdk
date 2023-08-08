
# Api V1 Participants Request

## Structure

`ApiV1ParticipantsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `email` | `string` | Required | - |
| `mobile` | `string \| undefined` | Optional | - |
| `gender` | `string \| undefined` | Optional | - |
| `dob` | `string \| undefined` | Optional | - |
| `tagIds` | `unknown \| null \| undefined` | Optional | - |
| `groupIds` | `unknown \| null \| undefined` | Optional | - |
| `externalId` | `unknown \| null \| undefined` | Optional | - |
| `preferences` | [`Preferences1 \| undefined`](../../doc/models/preferences-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "firstName": "firstName4",
  "lastName": "lastName4",
  "email": "email6",
  "mobile": "mobile4",
  "gender": "gender6",
  "dob": "dob4",
  "tagIds": {
    "key1": "val1",
    "key2": "val2"
  },
  "groupIds": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

