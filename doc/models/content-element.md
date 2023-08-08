
# Content Element

## Structure

`ContentElement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `assetId` | `unknown \| undefined` | Optional | - |
| `asset` | [`Asset \| undefined`](../../doc/models/asset.md) | Optional | - |
| `text` | `string \| undefined` | Optional | - |
| `displayOrder` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "assetId": {
    "key1": "val1",
    "key2": "val2"
  },
  "asset": {
    "id": "id0",
    "uuid": "uuid6",
    "assetMimeType": "assetMimeType2",
    "assetName": "assetName0",
    "resourceName": "resourceName6"
  },
  "text": "text0",
  "displayOrder": 72
}
```

