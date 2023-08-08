
# Body

## Structure

`Body`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `contentId` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `contentElements` | [`ContentElement[] \| undefined`](../../doc/models/content-element.md) | Optional | - |
| `uiConfigs` | `string \| undefined` | Optional | - |
| `displayOrder` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "contentId": "contentId6",
  "title": "title4",
  "description": "description0",
  "contentElements": [
    {
      "id": "id7",
      "assetId": {
        "key1": "val1",
        "key2": "val2"
      },
      "asset": {
        "id": "id7",
        "uuid": "uuid3",
        "assetMimeType": "assetMimeType5",
        "assetName": "assetName7",
        "resourceName": "resourceName1"
      },
      "text": "text3",
      "displayOrder": 171
    }
  ]
}
```

