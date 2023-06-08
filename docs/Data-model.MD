# Data Models

### Accounts

| name            | type        | unique |
| --------------- | ----------- | ------ |
| id              | Primary Key | yes    |
| email           | string      | yes    |
| hashed_password | string      | no     |
| name            | string      | no     |

The `Account` entity contains the data for a unique user.

### Parks

| name        | type        | unique |
| ----------- | ----------- | ------ |
| id          | Primary Key | no     |
| full_name   | string      | no     |
| city        | string      | no     |
| state       | string      | no     |
| description | string      | no     |
| activities  | list        | no     |
| park_url    | string      | no     |
| park_id     | string      | no     |
| park_code   | string      | yes    |
| park_image  | string      | no     |

### Trips

| name       | type        | unique |
| ---------- | ----------- | ------ |
| id         | Primary Key | no     |
| account_id | string      | no     |
| start_date | string      | no     |
| end_date   | string      | no     |
| park       | string      | no     |
| status     | list        | no     |

### Trip Notes

| name        | type        | unique |
| ----------- | ----------- | ------ |
| id          | Primary Key | no     |
| trip_id     | integer     | no     |
| account_id  | integer     | no     |
| title       | string      | no     |
| description | string      | no     |
