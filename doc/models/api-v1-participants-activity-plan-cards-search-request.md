
# Api V1 Participants Activity Plan Cards Search Request

## Structure

`ApiV1ParticipantsActivityPlanCardsSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `activityPlanType` | `string \| undefined` | Optional | a type of Activity Plan. eg) GENERAL_ACTIVITY, SURVEY, CONTENT etc. |
| `activityPlanName` | `string \| undefined` | Optional | the name or title of the activity plan card |
| `fromDate` | `string \| undefined` | Optional | - |
| `toDate` | `string \| undefined` | Optional | - |
| `isReported` | `boolean \| undefined` | Optional | returns only reporetd cards if true |
| `isActive` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "activityPlanType": "activityPlanType2",
  "activityPlanName": "activityPlanName6",
  "fromDate": "fromDate2",
  "toDate": "toDate6",
  "isReported": false
}
```

