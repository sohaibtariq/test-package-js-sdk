
# Api V1 Participants Survey Responses Request

## Structure

`ApiV1ParticipantsSurveyResponsesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `activityPlanCardId` | `string \| undefined` | Optional | - |
| `surveyId` | `string \| undefined` | Optional | - |
| `surveyResponses` | [`SurveyResponse[] \| undefined`](../../doc/models/survey-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "activityPlanCardId": "activityPlanCardId4",
  "surveyId": "surveyId2",
  "surveyResponses": [
    {
      "surveyQuestionId": "surveyQuestionId2",
      "surveyAnswers": [
        {
          "surveyResponseOptionId": "surveyResponseOptionId4",
          "answeredText": "answeredText0",
          "weightedScore": 91.16
        },
        {
          "surveyResponseOptionId": "surveyResponseOptionId3",
          "answeredText": "answeredText1",
          "weightedScore": 91.17
        },
        {
          "surveyResponseOptionId": "surveyResponseOptionId2",
          "answeredText": "answeredText2",
          "weightedScore": 91.18
        }
      ]
    },
    {
      "surveyQuestionId": "surveyQuestionId1",
      "surveyAnswers": [
        {
          "surveyResponseOptionId": "surveyResponseOptionId3",
          "answeredText": "answeredText1",
          "weightedScore": 91.17
        }
      ]
    }
  ]
}
```

