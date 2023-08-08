
# Survey Question

## Structure

`SurveyQuestion`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `questionText` | `string` | Required | - |
| `descriptionShort` | `unknown \| null \| undefined` | Optional | - |
| `descriptionLong` | `unknown \| null \| undefined` | Optional | - |
| `uiConfigs` | [`UiConfigs1 \| undefined`](../../doc/models/ui-configs-1.md) | Optional | - |
| `surveyResponseOptions` | [`SurveyResponseOption[] \| undefined`](../../doc/models/survey-response-option.md) | Optional | - |
| `isActive` | `boolean` | Required | - |
| `isRequired` | `boolean` | Required | - |
| `displayOrder` | `number` | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "questionText": "questionText0",
  "descriptionShort": {
    "key1": "val1",
    "key2": "val2"
  },
  "descriptionLong": {
    "key1": "val1",
    "key2": "val2"
  },
  "uiConfigs": {
    "RESPONSE_UI_CONFIGS": {
      "DEFAULT_VALUE": 118,
      "MAX_VALUE": 12,
      "MIN_VALUE": 216,
      "OPTION_SELECTION_MAX": 80,
      "OPTION_SELECTION_MIN": 162
    },
    "SHOW_LONG_DESCRIPTION": false,
    "SHOW_SHORT_DESCRIPTION": false,
    "TEMPLATE": "TEMPLATE8"
  },
  "surveyResponseOptions": [
    {
      "id": "id2",
      "label": "label2",
      "score": 206,
      "descriptionShort": {
        "key1": "val1",
        "key2": "val2"
      },
      "descriptionLong": {
        "key1": "val1",
        "key2": "val2"
      },
      "isActive": false
    },
    {
      "id": "id3",
      "label": "label3",
      "score": 207,
      "descriptionShort": {
        "key1": "val1",
        "key2": "val2"
      },
      "descriptionLong": {
        "key1": "val1",
        "key2": "val2"
      },
      "isActive": true
    },
    {
      "id": "id4",
      "label": "label4",
      "score": 208,
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
  ],
  "isActive": false,
  "isRequired": false,
  "displayOrder": 72
}
```

