# APIs

## Accounts

- Method: `POST`
- Path: `/api/accounts`

Input:

```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```

Output:

```json
{
  "access_token": "string",
  "token_type": "Bearer",
  "account": {
    "id": int,
    "email": "string",
    "name": "string"
  }
}
```
