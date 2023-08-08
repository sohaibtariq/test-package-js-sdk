
# Data 2

## Structure

`Data2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `activityValues` | [`ActivityValue2[] \| undefined`](../../doc/models/activity-value-2.md) | Optional | - |
| `scheduledAt` | `string \| undefined` | Optional | - |
| `reportedAt` | `unknown \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "activityValues": [
    {
      "id": "id3",
      "measureTypeId": "measureTypeId3",
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
```

