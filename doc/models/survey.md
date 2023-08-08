
# Survey

## Structure

`Survey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `code` | `string` | Required | - |
| `name` | `string` | Required | - |
| `descriptionShort` | `unknown \| null \| undefined` | Optional | - |
| `descriptionLong` | `unknown \| null \| undefined` | Optional | - |
| `externalReference` | `unknown \| null \| undefined` | Optional | - |
| `surveyTags` | `unknown[] \| undefined` | Optional | - |
| `surveyGroups` | `unknown[] \| undefined` | Optional | - |
| `surveySections` | [`SurveySection[] \| undefined`](../../doc/models/survey-section.md) | Optional | - |
| `isActive` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "name": "name0",
  "descriptionShort": {
    "key1": "val1",
    "key2": "val2"
  },
  "descriptionLong": {
    "key1": "val1",
    "key2": "val2"
  },
  "externalReference": {
    "key1": "val1",
    "key2": "val2"
  },
  "surveyTags": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "isActive": false
}
```

