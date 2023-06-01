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

5.22.23
Today I worked with Drake to fix some minor edits to our work from last week to include try/except blocks that we missed. We then merged the changes to main. I also worked with Brady and Sandy on the following:

1. We made a new branch for our frontend work.
2. We added the TripList component. We copied the JSX from project beta and began editing it to fit our current project.
3. We added the dependencies for the React project that we will need.
   Tomorrow we will start work on redux to include the pieces of state that we will need for this page.

5.23.23
Today we worked as a group to add Redux to our project and then broke into teams to tackle the frontend authorization portion of the app using Redux. I worked with Drake to add the functionality to get the current user information and store as a slice of state. We also handled the login function and updating the state with the username and password to log a user into the app.

5.24.23
Today I continued to work with Drake and we tackled the Parks List page while the others finished the sign up and logout functions on the frontend authorization. We built the component and got it to populate with data. We got that going pretty quickly and spent the rest of the day on CSS to make the page look nice. We got the individual parks into cards and got the cards to display in a masonry-like grid on the page. Tomorrow we are going to try and add pagination and also work on the Nav bar.

5.25.23
I worked with Drake again today and he was a total BEAST coding what I think will probably be the hardest feature which is pagination on the Parks list page. There are 500 parks and we want all of the results to display, but we can't have the page be huge, so we are adding a pagination feature to display only 20 at a time. At this point, we only have 5 parks imported. The feature is about 80% of the way complete. We have the components built and passing props from parent to child and the data is being displayed properly along with the search bar and filter features. So you can type in the search bar and the data will filter and the pages are showing, but we just have some styling to do and making sure that only the proper number of parks is displayed at once. We will probably get it figured out by tomorrow. The other group worked on the trip list page and they have a few issues they are working through so I figure we'll both be finished with our current assignments tomorrow.

5.26.23
Today Drake and I worked again all day on the pagination. We got further, but the page buttons are still not working. Called it quits at 7:50 pm. Hoping we can get it figured out in one more day.

5.31.23
Pagination fixed and merged into main! Today I worked with Brady and Sandy on fixing a date issue on the create trip form and we integrated the trip list and trip form into main. Then we got to work on the create trip note form. That also works and we submitted a merge request. Glad to be getting all of these components built! I want to keep enough time for CSS and cleanup.
