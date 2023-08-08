
# Survey Response Option

## Structure

`SurveyResponseOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `label` | `string` | Required | - |
| `score` | `number \| undefined` | Optional | - |
| `descriptionShort` | `unknown \| null \| undefined` | Optional | - |
| `descriptionLong` | `unknown \| null \| undefined` | Optional | - |
| `isActive` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "label": "label0",
  "score": 148,
  "descriptionShort": {
    "key1": "val1",
    "key2": "val2"
  },
  "descriptionLong": {
    "key1": "val1",
    "key2": "val2"
  },
  "isActive": false
}
```

