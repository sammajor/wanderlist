5.15.23 -
Today we worked on the following: 1. Filled out the docker-compose file with the volume and database and got the containers up and running. 2. We entered all of the issues we wrote last week into the project in GitLab. 3. We worked as a group to build out the authentication feature on our app. We were able to create the accounts table in PostgreSQL, but we weren't able to get the API to return a 200 response when trying to create a user in the Swagger.

5.16.23
Today we worked on the following:

1. We finished the authentication app today and got a 200 response from all routes.
2. We created four authentication routes for login, get token, logout, and create token.

5.17.23
Today Drake and I worked on getting data from the national parks API and caching the data into our database. We completed the following:

1. Hitting the national parks API using an API key and storing the data in our database. We created a file that needs to run in order to execute that task.
2. We created routes for getting all park details from our API and getting an individual park's details. We were able to finish everything without one property. The activities are sent as an object and we have a blocker saving that object in the database column. For today we just omitted it and we'll go back and add it back in tomorrow.
3. We created tables for parks and also for park images that will have a Foreign key of the park code.

5.18.23
Today I worked with Drake again to finish our API queries and routes on parks. We were able to store the data for the activities object as a JSONB field and then retrieve it from the database. All the park routes work and return 200 responses!
