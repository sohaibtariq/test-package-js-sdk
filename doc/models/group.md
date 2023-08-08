
# Group

## Structure

`Group`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `groupType` | `string` | Required | - |
| `parentGroupId` | `string \| null \| undefined` | Optional | - |
| `name` | `string` | Required | - |
| `code` | `string` | Required | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `logoUrl` | `string \| null \| undefined` | Optional | - |
| `groupTags` | `unknown[] \| undefined` | Optional | - |
| `isActive` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "groupType": "groupType8",
  "parentGroupId": "parentGroupId6",
  "name": "name0",
  "code": "code8",
  "description": "description0",
  "logoUrl": "logoUrl0",
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
  "isActive": false
}
```

