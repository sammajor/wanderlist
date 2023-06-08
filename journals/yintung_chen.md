## Jun 7, 2023

Today, I worked on:

- CSS styling with Drake and Brady

We continue what we had left from yesterday, Brady shares the screen and begin to do the home page CSS while Drake and I doing the research and assist Brandy. After research and we are successfully using video as the background for our home page and text layout on the top. The home page looks fantastic!
After the home page was completed, we move to SignUp form page, trying to do CSS. So I shared my screen and play around, but unfortunately, it was harder than we thought, the result was not what we expected. After struggle, Brady suggests we can use an image for the background instead of doing everything on CSS. After we applied to the image, the result turns out pretty nice. We plan to work on styling Sign-in form tomorrow.

## Jun 6, 2023

Today, I worked on:

- Code cleaning with Dasia
- CSS styling with Drake and Brady

In the early project time, I work with Dasia to clean up the code, removed the unused import and try to clean the code that flake8 has been complaining. Only the migration table is unable to modify the code to the shorter version, because it will stop the Docker container.
Later, the entire group discuss on the CSS styling, and color palette for our project, we split into two groups.
I work with Drake and Brady on the home page, we got blockers because we used to bootstrap on React, so if we want to add CSS on top of it, it requires some modified. CSS styling is actually harder than we expect and take longer time to get our navigation bar work. We will keep working on it tomorrow.

## Jun 5, 2023

Today, I worked on:

- Debugging start date and end date issue with Sam

In today’s stand up, the entire group discusses the remaining bugs that we need to fix in order for the project to perform better. So, we split into two groups to work on our bugs. I team up with Sam today, he shared the screen and begin working on showing the alert on the park list detail page. This issue was solved pretty quickly, then we moved on to the create trip form file. When a user creates a trip, the end date can be less than then start date, so this is a bug. Both of us do some research and trying to make the time validation. While I’m trying in my local machine, Sam figures out how to prevent the end date is less than start date by writing a use State and set the date minimum. Later, we move on to the creating a 404 Page Not Found site.

## Jun 3, 2023

Today, I work on writing a unit test and fixing the sign-up duplicate account issue. Showing an error message when the account has already existed when user trying to sign-up.

## Jun 2, 2023

Today, I worked on:

- Navigation bar and note detail page with Drake and Brady

Drake and Brady have worked in a navigation bar since yesterday, so I join with them today to finished this feature. Drake shared his screen while Brady and I were collaborating. Later on, we move on to the note detail page, Brady started the screen and we got 422 errors, then I fixed it by changing the query. It was passing two arguments, then I wrap the two arguments into an object, and check the object has been passed into the react hook. When the note detail data is able to display as we want, we added bootstrap to make it look cleaner.
In the afternoon, the entire group is working together to make a delete note button inside the note detail page.

## Jun 1, 2023

Today, I worked on:

- Trip completed/cancelled button feature in trip detail page with Sam

In today’s project time, I shared my screen first and code the feature for cancel button in the front-end. While I’m coding and Sam was collaborated. He said we do not have a status change field in the back-end. Thus, we go back to the back-end, and I started to make a migration table for trip_status field. We’ve altered the trips table and added a trip_status field in there. Then we modified the Pydantic model, trip queries and added a trip status update router. When trip status is able to change from default pending to complete or cancelled, the create a trip function is broken. Then we spent some time fixing the bugs. A few hours later, when the back-end trip status functionality is completed. Sam takes the next coding part to do the front-end button feature. The completed/cancelled button ran into a 422 issue. So, we went to SEIR for help. They guide us to change our apiSlice.js url and fixing some SQL code. The button is finally working.

## May 31, 2023

Today, I worked on:

- Create a trip detail page with Sam, Brady
- Error handling for login form

Sam take the lead for today’s coding. Initially, we planned to create a note detail page but end-up we must create a trip detail page first. Thus, we reconsider our wireframe. We modified the trip list page by adding an extra button, so this button can guide the user to a specific trip (trip detail page). In our trip detail page, we decided to put a carousel with default images for user-interface. Then we decided to put the trip notes inside of the trip detail page within a small card-body. When user click “view” can take the user directly to trip note detail page. Also, the trip cancellation and finished button feature is included in this trip detail page, but we did not finish in today’s project time. We plan to continue tomorrow. In the night time, I fixed our log-in form bugs by writing an error handling function in the code. Therefore, I can prevent the un-register user to log-in, and when the user enters wrong credential, an error message will show. Also, make sure a registered user is able to login and re-direct to our testing page.

## May 30, 2023

Today, I worked on:

- Fixing the date time issue for creating trip form with Sam, Brady
- Create a trip note form associate to the trip that user has created

In today's project time, I shared my screen to catch up where we've left from the previous day. Create a trip form was having date time format issue, Sam suggested to use Javascript built-in library "date-fns" to organize our date-time format.Which is working perfectly and solved our date issue. Now the art user is able to create the trip in the front-end.
Later, Brady shared screen and create a trip note form, when it comes to the bug-time, Sam and I was trying to catch the error that was showing on the console. We found that the map function has some issue, then Sam gives advice said we need to check the data we passed in, make sure the id was integer, not a string. After revised, the trip note form was created for specific trip. We tested in swagger and it works well.

## May 26, 2023

Today, I worked on:

- Writing a migration table to update the primary key in the trip and trip_note from trip_id to id and trip_note_id to id.
- Fixing trip list front-end console error.

Last night I fixed the error in the trip list, so the data is able to fetch and showing in the front-end. Then I share this good news with Dasia and Brady and explained what I've changed to make it work. However, I saw an error in the console showing "Each Child in a List Should Have a Unique 'key' Prop". Then I went back to revised the trip list fetching data, realized in the console the trip_id prop should just be id. So I went back to the migration table and write a new migration to update the primary key from trip_id to id. Because the primary key should just be id, trip_id sounds more like a foreign-key to use as a primary key.
I did the same thing to update the trip_note_id to id along with updating both of the pydantic model and the prop for the trip list. Now trip list is able to work and fetch the data without error.
While I'm fixing the console issue, Brady and Dasia move on to the CreateTripForm. Later, we exchange of the info on what we did and completed, they told me the form was created but the date time issue in the back-end and front-end was not matched. Therefore, when they are trying to submit the form, the form's date time data sending from the front-end isn't matching with the back-end. They've tried to figure out this issue. However the time has run out, so we decided to fix this issue in the next day.

## May 25, 2023

Today, I worked on:

- Writing the ListTrips.js file
- Fixing back-end authorization

In today's project time, Dasia shares screen and begin to move the trip API endpoints from yesterday into the apiSlice.js file (instructor said we should've kept our API endpoints in one file). Then she created a ListTrips.js file to write the components for list of trips. However, we're not able to fetch the data, the page showing blank and the console showing trips data undefined. After 30 minute rule, we turn into SEIRs for the help. SEIRs guide us through changing many naming variables and realized our back-end authorization has issue.
The issue was requiring a valid token to secure a logged-in user, which we did not do this in our back-end. So, we went back to the back-end trips router and adding some code for secure logged-in user to create a trip, get all trips, and get a specific trip. Because in the swagger, in the back-end, a user should type-in user account_id in order to create a trip. But this feature in the front-end will mess everything, therefore we need to fix the back-end. The user account_id is fetch with token, thus in the front-end the user shouldn't create a trip enter the account_id.
We also found an issue that when an unregistered user can still login with random username and password, and redirect to our testing page. Sam and Drake will try to fix this issue.
We plan to dive-in more trip list page tomorrow. In the night time, I play around the project and was able to pull the list of trip that a user has created in the front-end.

## May 24, 2023

Today, I worked on:

- Completed apiSlice.js file (account token) SignUp, log-out feature with Brady and Dasia

In today's project time, I share my screen to add the account endpoints into our apiSlice.js file. It was only login and getAccount token at the beginning. Therefore, I add sign-up and logout endpoints.
Then we begin to create a sign-up form, Brady actually had a sign-up form template from the previous day, so we just use that and revise. While I’m coding, Brady and Dasia were watching and giving advices.
When sign-up form was complete, we began to logout form. Later on, we open localhost:3000 to test if our sign-up form and logout button is working. We also add a little feature to re-direct to a blank page with “Hi” after a user has sign-up, login, and logout to make sure everything is at least working properly. After this feature is completed, Dasia takes term to code, trips API endpoints.
We plan to work on list of trips page tomorrow.

## May 23, 2023

Today, I worked on:

- Front-end authorization and signup page

After we finished the back-end portion, we decided to move to the front-end, and do the wheel of names to split the group into two and three. So, I team up with Dasia and Brady again. We decided to do the sign-up form and started with Brady shared the screen, and we complete the SignUp form with j's file.
Then we realized the code we wrote in the sign-up form may not be correct because the code is nothing relates to the Redux. So we all agree to re-watch today's lecture recording and realized the SignUp form requires the token and another file (accountApi.js)
But our other two teammates are doing the sign-in and sign-out form so they're working on the token and file (accountApi.js). Then we decide to talk about it tomorrow since we're not familiar with Redux. We plan to do our own research tonight so we can have a better understanding for tomorrow's coding.
In the night-time, I wrote my own accountApi.js file and plan to discuss with my teammate tomorrow.

## May 22, 2023

Today, I worked on:

- Fixing the issue to get list of trip notes and a single note
- write a function to delete a single note

In today’s project time, I share my screen and code first with Dasia and Brady. We are working on fixing the bug to get a list of notes associated with specific trip, and a single note feature. Later on, I fixed the bug by double check the SQL order and my code. So, the single note function is able to work, then we solved the list of notes by entering the account id and trip id to locate the notes that were created under specific trip. Delete note feature was also write and test to make sure it's functional.
Later on, Sam, Brandy, and I were working to to get the list of trips, Sam shares the screen and install redux toolkit and do some coding while Brady and I giving some advice. We're not able to finish this feature today. So, we save it for later.

## May 18, 2023

Today, I worked on:

- Fixing the issue to get list of trips and get a single trip
- Creating a trip notes associate to specific trip with Brady and Dasia

In today's project time, I was the first lead to share screen and coding while Brady and Daisa helping to troubleshoot to get the list of trips. Finally, I caught a parameter TypeError that was passed into our SQL. By fixing that error, the list of trip data was able to fetch and return a 200 success. And we move on to fixing the error of getting a single trip and it was solved.
Dasia takes the second lead on coding to create a trip note associate to specific trip. All three of us re-think the logic behind this functionally and play around and change lots of stuff. We weren't able to figure out for an hour, and the issue was resolved after the SEIRs guidance. The trip note was able to create by specific trip and user. But we still have issues with getting a list of trip notes, so we decide to leave it for tomorrow.

## May 17, 2023

Today, I worked on:

- creating a trip form and a note form with Brady and Dasia

Brady takes the lead for today's coding, while I and Daisa providing the info and read the documentation for some SQL commands. We had a 400 BAD REQUEST bug when trying to create a trip, after searching for an hour, we realized we initially set response 400 when trip was created. Then we fixed this issue. Later, we discovered there's a bug on showing the list of trips. Which will be the goal for the tomorrow.

## May 16, 2023

Today, I worked on:

- Fixing the authentication bugs and make it work

The entire team was trying to fix the authentication 401 issue. We review the code and I wrote the get method on an AccountQueries class(it was missing). Then, under the guidance from the instructor the bugs were caught and fixed. The authentication issue was resolved. We're able to create a user, login, logout, get a token, and getting tokens from HTTP-only cookies.

## May 15, 2023

Today, I worked on:

- Building Postgres database and set-up authentication with entire team

As a team, we decided to build the database together, Brady shared the screen, typing the data. The rest of us were checking if there are any mis-spelling or bugs. We built the Docker container and volume after databse were set-up, and git push to the main branch. Everyone git pull to have the same database.
Later on, I share screen and code with authentication part, login, logout, and creates a user endpoint were successfully showing on localhost, but the user was unable to create due to 401 unauthorized issues.
