
# Group Search Result

Search result model containing an array of searched items and a total count

## Structure

`GroupSearchResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`Group[]`](../../doc/models/group.md) | Required | - |
| `total` | `number` | Required | - |

## Example (as JSON)

```json
{
  "results": [
    {
      "id": "id3",
      "groupType": "groupType1",
      "parentGroupId": "parentGroupId3",
      "name": "name3",
      "code": "code1",
      "description": "description7",
      "logoUrl": "logoUrl7",
      "groupTags": [
        {
          "key1": "val1",
          "key2": "val2"
        },
        {
          "key1": "val1",
          "key2": "val2"
        }
      ],
      "isActive": true
    }
  ],
  "total": 10
}
```

