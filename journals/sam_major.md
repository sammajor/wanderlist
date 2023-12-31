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
Pagination fixed and merged into main! Today I worked with Brady and Sandy on fixing a date issue on the create trip form and we integrated the trip list and trip form into main. Then we got to work on the create trip note form. That also works and we submitted a merge request. I coded this with Brady and Sandy on eagle eye duty. Glad to be getting all of these components built! I want to keep enough time for CSS and cleanup.

6.01.23
Today I worked with Sandy on the complete and cancel buttons for the trip detail page. That was a lot more complicated than I thought it would be. The actual coding of the frontend was easy, but we had a bug that we couldn't figure out when we tried to re-render the page with new state. Finally figured it out. The backend was a lot more complicated because we had to alter the database with a new column for trip status and getting the route, query, and pydantic models updated took a lot of effort. We didn't have a put route created and so we had to do all of that from scratch. We finally got it figured out and pushed to main, so that was good. 5 features left to finish and then we are moving on to CSS, code polishing, comments, and cleanup next week!

6.02.23
We got so much done today! I worked with Dasia today. We plowed through getting the Trip history page done and also the homepage. We then got back together with the other group and we worked together on finishing the trip note delete button and then we collaborated on starting the cleanup making sure comments and console.log statements are deleted. Looking forward to working on CSS, unit tests and more cleanup next week.

06.05.23
Today I worked with Sandy. I coded with her help. We added the a section to get park alerts for each park. I added a new slice file AlertSlice.js and made the call to the Alert API. We then called the query in the Park Detail page and added a section for the alerts to display. I also added a custom 404 page. I then worked on my unit test for getting one trip note. All of that was sucessfully merged into the main branch. We also worked together on doing some clean up and debugging.

6.06.23
Today I worked with Drake to clean up code on the queries files and the park.py file. We removed excess code, used a linter to clean up the spacing and formatting. We also delted unused imports and variables. Then I worked with Dasia on CSS styling of the park list page. We got into it and the final product looks really good!!

6.07.23
Today I worked with Dasia and we got so much done! I coded with her help and we completed CSS styling on the Trip list page, Trip History page and the note detail page. We got stuck for a LONG time on the trip list page because our image was being wonky and we needed help from a SEIR. We worked with Garrett and Lauren for a LONG time but we were finally able to fix it.

6.08.23

Today I worked with Brady and Dasia on more CSS. We figured out the last bit on the note detail page and also did the styling on the trip detail page. We made some pretty significant changes and they look great. We made the background a bulletin board and made each note a "sticky" note. It turned out great. In the afternoon after all of the CSS styling was finished we moved on to adding comments to the code and doing the last bit of code cleanup.

6.09.23

Today we worked as a group to review final edits to the README.md file. I did a few minor edits to make sure the docker log for the ghi container didn't have so many errors pop up for mis-labeled img tags, I removed an <a> tag. Other minor changes. I also added a button on the note detail page to navigate back to the trip details, so you don't have to click triplist, click into the trip, etc. We then did a final run through making the volumes, building the images and running containers and then clicked on each element to make sure there were no errors in the console. Everything looks great and I'm so excited to submit!!
