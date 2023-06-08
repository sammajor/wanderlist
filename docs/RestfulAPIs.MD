# APIs

## Accounts

- Method: `POST`
- Path: `/api/accounts`

Input:

```json
{
  "email": string,
  "password": string,
  "name": string
}
```

Output:

```json
{
  "access_token": string,
  "token_type": Bearer,
  "account": {
    "id": int,
    "email": string,
    "name": string
  }
}
```

### Login

- Method: `POST`
- Path: `/login`

Input:

```json
{
  "username": string,
  "password": string
}
```

Output:

```json
{
  "access_token": string,
  "token_type": Bearer
}
```

### Logout

- Method: `DELETE`
- Path: `/logout`

Output:

```json
{
  true
}
```

The Accounts API will create, login, logout a user on the WanderList website. User will need to enter in all of the information listed to create an account.

## Trips

# Create a trip

- Method: `POST`,
- Path: `/api/trips`

Input:

```json
{
  "start_date": date,
  "end_date": date,
  "park": string
}
```

Output:

```json
{
  "id": int,
  "account_id": int,
  "start_date": date,
  "end_date": date,
  "park": string,
  "trip_status": string
}
```

# Get all trips

- Method: `GET`,
- Path: `/api/trips`

Users will automatically get all the trips they created

# Get one trip

- Method: `GET`
- Path: `/api/trips/{trip_id}`

Input:

```json
{
  "trip_id": int,
}
```

Output:

```json
{
  "id": int,
  "account_id": int,
  "start_date": date,
  "end_date": date,
  "park": string,
  "trip_status": string
}
```

# Update trip status

- Method: `PUT`
- Path: `/api/trips/{trip_id}/status`

Input:

```json
{
  "trip_id": int,
  "trip_status": string,
}
```

Output:

```json
{
  "string"
}
```

### Trip Notes

# Create a trip note

- Method: `POST`,
- Path: `/api/trips/{trip_id}/notes`

Input:

```json
{
  "title": string,
  "trip_id": int,
  "description": string
}
```

Output:

```json
{
  "id": int,
  "trip_id": int,
  "account_id": int,
  "title": string,
  "description": string
}
```

# Get all notes

- Method: `GET`,
- Path: `/api/trips/{trip_id}/notes`

Input:

```json
{
  "trip_id": int,
}
```

Output:

```json
{
[
  {
    "id": int,
    "trip_id": int,
    "account_id": int,
    "title": string,
    "description": string
  }
]
}
```

# Get one note

- Method: `GET`
- Path: `/api/trips/{trip_id}/notes/{note_id}`

Input:

```json
{
  "trip_id": int,
  "note_id": int,
}
```

Output:

```json
{
  "id": int,
  "trip_id": int,
  "account_id": int,
  "title": string,
  "description": string
}
```

# Delete a note

- Method: `DELETE`
- Path: `/api/trips/{trip_id}/notes/{note_id}`

Input:

```json
{
  "note_id": int,
}
```

Output:

```json
{
  true
}
```

## Parks

# Get park data

- Method: `GET`
- Path: `/api/parks`

Output:

```json
{
  [
  {
    "id": int,
    "full_name": string,
    "park_code": string,
    "description": string,
    "city": string,
    "state": string,
    "park_url": string,
    "park_id": string,
    "activities": [
      string
    ],
    "park_image": string
  }
]
}
```

# Get one park

- Method: `GET`
- Path: `/api/parks/{park_id}`

Input:

```json
{
  "park_id": string,
}
```

Output:

```json
{
  [
  {
    "id": string,
    "full_name": string,
    "park_code": string,
    "description": string,
    "city": string,
    "state": string,
    "park_url": string,
    "park_id": string,
    "activities": [
      string
    ],
    "park_image": string
  }
]
}
```
