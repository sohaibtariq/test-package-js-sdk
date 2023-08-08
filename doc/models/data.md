
# Data

## Structure

`Data`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `activityPlanType` | `string` | Required | - |
| `activityPlanTypeId` | `string` | Required | - |
| `activityValues` | [`ActivityValue[] \| undefined`](../../doc/models/activity-value.md) | Optional | - |

## Example (as JSON)

```json
{
  "activityPlanType": "activityPlanType2",
  "activityPlanTypeId": "activityPlanTypeId2",
  "activityValues": [
    {
      "id": "id3",
      "MeasureTypeId": "MeasureTypeId9",
      "measureTypeName": "measureTypeName1",
      "measureDataType": "measureDataType9",
      "measureTypeOptions": [
        "measureTypeOptions3"
      ]
    }
  ]
}
```

