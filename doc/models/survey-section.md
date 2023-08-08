
# Survey Section

## Structure

`SurveySection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `name` | `string` | Required | - |
| `descriptionShort` | `string \| undefined` | Optional | - |
| `descriptionLong` | `string \| undefined` | Optional | - |
| `uiConfigs` | [`UiConfigs \| undefined`](../../doc/models/ui-configs.md) | Optional | - |
| `surveyQuestions` | [`SurveyQuestion[] \| undefined`](../../doc/models/survey-question.md) | Optional | - |
| `isActive` | `boolean` | Required | - |
| `displayOrder` | `number` | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "descriptionShort": "descriptionShort0",
  "descriptionLong": "descriptionLong6",
  "uiConfigs": {
    "SHOW_LONG_DESCRIPTION": false,
    "SHOW_NAME": false,
    "SHOW_SHORT_DESCRIPTION": false,
    "TEMPLATE": "TEMPLATE8"
  },
  "surveyQuestions": [
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
          "DEFAULT_VALUE": 30,
          "MAX_VALUE": 160,
          "MIN_VALUE": 108,
          "OPTION_SELECTION_MAX": 228,
          "OPTION_SELECTION_MIN": 54
        },
        "SHOW_LONG_DESCRIPTION": false,
        "SHOW_SHORT_DESCRIPTION": false,
        "TEMPLATE": "TEMPLATE8"
      },
      "surveyResponseOptions": [
        {
          "id": "id2",
          "label": "label2",
          "score": 98,
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
          "score": 99,
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
          "score": 100,
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
      "displayOrder": 220
    }
  ],
  "isActive": false,
  "displayOrder": 72
}
```

