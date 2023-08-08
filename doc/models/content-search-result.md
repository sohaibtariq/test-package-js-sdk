
# Content Search Result

## Structure

`ContentSearchResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`Result2[] \| undefined`](../../doc/models/result-2.md) | Optional | - |
| `total` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "results": [
    {
      "id": "id3",
      "uuid": "uuid9",
      "publishedVersionId": "publishedVersionId1",
      "contentTypeId": "contentTypeId7",
      "contentType": {
        "id": "id9",
        "contentTypeCode": "contentTypeCode9",
        "contentTypeName": "contentTypeName3",
        "contentTypeDescription": "contentTypeDescription5",
        "isActive": true
      }
    }
  ],
  "total": 10
}
```

