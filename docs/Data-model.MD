# Data Models

### Accounts

| name            | type        | unique |
| --------------- | ----------- | ------ |
| id              | Primary Key | yes    |
| email           | string      | yes    |
| hashed_password | string      | yes    |
| name            | string      | no     |

The `Account` entity contains the data for a unique user.

### Parks

| name        | type        | unique |
| ----------- | ----------- | ------ |
| id          | Primary Key | yes    |
| full_name   | string      | no     |
| city        | string      | no     |
| state       | string      | no     |
| description | string      | no     |
| activities  | list        | no     |
| park_url    | string      | yes    |
| park_id     | string      | yes    |
| park_code   | string      | yes    |
| park_image  | string      | no     |

### Trips

| name       | type        | unique |
| ---------- | ----------- | ------ |
| id         | Primary Key | yes    |
| account_id | string      | yes    |
| start_date | string      | no     |
| end_date   | string      | no     |
| park       | string      | no     |
| status     | list        | no     |

### Trip Notes

| name        | type        | unique |
| ----------- | ----------- | ------ |
| id          | Primary Key | yes    |
| trip_id     | integer     | no     |
| account_id  | integer     | yes    |
| title       | string      | no     |
| description | string      | no     |
