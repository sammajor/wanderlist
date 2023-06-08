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
  "true"
}
```

The Accounts API will create, login, logout a user on the WanderList website. User will need to enter in all of the information listed to create an account.

## Trips

Create a Trip

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

Get all trips

- Method: `GET`,
- Path: `/api/trips`

Users will automatically get all the trips they created

Get one trip

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

Update Trip Status

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
