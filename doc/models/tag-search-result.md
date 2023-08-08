
# Tag Search Result

Search result model containing an array of searched items and a total count

## Structure

`TagSearchResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`Tag[]`](../../doc/models/tag.md) | Required | - |
| `total` | `number` | Required | - |

## Example (as JSON)

```json
{
  "results": [
    {
      "id": "id3",
      "name": "name3",
      "code": "code1",
      "isActive": true
    }
  ],
  "total": 10
}
```

