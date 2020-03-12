# Lerna Versioning

## Design

Version lerna packages independently.

`lerna.json`

```json
{
  "version": "independent"
}
```

## Rationale

Allows package versions to be updated independently.
Independent versioning can communicate semantic versions more accurately.
