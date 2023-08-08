
# Survey Response

## Structure

`SurveyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `surveyQuestionId` | `string \| undefined` | Optional | - |
| `surveyAnswers` | [`SurveyAnswer[] \| undefined`](../../doc/models/survey-answer.md) | Optional | The answer can be either surveyOptionId or answered text based on the type of question. |

## Example (as JSON)

```json
{
  "surveyQuestionId": "surveyQuestionId2",
  "surveyAnswers": [
    {
      "surveyResponseOptionId": "surveyResponseOptionId0",
      "answeredText": "answeredText4",
      "weightedScore": 66.6
    }
  ]
}
```

