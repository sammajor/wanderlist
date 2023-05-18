5.15.23 -
Today we worked on the following: 1. Filled out the docker-compose file with the volume and database and got the containers up and running. 2. We entered all of the issues we wrote last week into the project in GitLab. 3. We worked as a group to build out the authentication feature on our app. We were able to create the accounts table in PostgreSQL, but we weren't able to get the API to return a 200 response when trying to create a user in the Swagger.

5.16.23
Today we worked on the following:

1. Fixed Authentication and got everything working. We created 4 routes (get token, post token, create account, delete account).
2. We created all of the issues in Git so that we could work using issue branches.

5.17.23
Today we discussed how to store the data coming in from the third party parks API to populate the data for national parks. We decided to cache the data in our PostgreSQL database. Drake and I worked on creating the file that defines the function to call the parks API and pull out the pieces of information we want into a parks_data object and then store that object as a row in the parks table in our database. We got the function to successfully pull park data from the third party API and store it in the database! We have one blocker. We took out the activities property in the data we import because it imported as a JS object and we need to figure out how to store that
