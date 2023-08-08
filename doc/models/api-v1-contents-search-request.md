
# Api V1 Contents Search Request

## Structure

`ApiV1ContentsSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentTypeId` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `tagIds` | `string[] \| undefined` | Optional | - |
| `groupIds` | `string[] \| undefined` | Optional | - |
| `isPublished` | `boolean \| undefined` | Optional | - |
| `isActive` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "contentTypeId": "contentTypeId6",
  "title": "title4",
  "tagIds": [
    "tagIds0",
    "tagIds1"
  ],
  "groupIds": [
    "groupIds6",
    "groupIds7",
    "groupIds8"
  ],
  "isPublished": false
}
```

