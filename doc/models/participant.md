
# Participant

A partcipant view model

## Structure

`Participant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `email` | `string` | Required | - |
| `mobile` | `string \| undefined` | Optional | - |
| `gender` | `string \| undefined` | Optional | - |
| `dob` | `string \| undefined` | Optional | - |
| `participantTags` | `unknown[] \| undefined` | Optional | - |
| `participantExtras` | `unknown[] \| undefined` | Optional | - |
| `participantGroups` | `unknown[] \| undefined` | Optional | - |
| `deviceToken` | `string \| undefined` | Optional | - |
| `preferences` | [`Preferences \| undefined`](../../doc/models/preferences.md) | Optional | - |
| `status` | [`Status \| undefined`](../../doc/models/status.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "firstName": "firstName4",
  "lastName": "lastName4",
  "email": "email6",
  "mobile": "mobile4",
  "gender": "gender6",
  "dob": "dob4",
  "participantTags": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ]
}
```

