## May 23, 2023
Today, I worked on:

* Front-end authorization and signup page

After we finished the back-end portion, we decided to move to the front-end, and do the wheel of names to split the group into two and three. So, I team up with Dasia and Brady again. We decided to do the sign-up form and started with Brady shared the screen, and we complete the SignUp form with j's file.
Then we realized the code we wrote in the sign-up form may not be correct because the code is nothing relates to the Redux. So we all agree to re-watch today's lecture recording and realized the SignUp form requires the token and another file (accountApi.js)
But our other two teammates are doing the sign-in and sign-out form so they're working on the token and file (accountApi.js). Then we decide to talk about it tomorrow since we're not familiar with Redux. We plan to do our own research tonight so we can have a better understanding for tomorrow's coding.
In the night-time, I wrote my own accountApi.js file and plan to discuss with my teammate tomorrow.


## May 22, 2023
Today, I worked on:

* Fixing the issue to get list of trip notes and a single note
* write a function to delete a single note

In today’s project time, I share my screen and code first with Dasia and Brady. We are working on fixing the bug to get a list of notes associated with specific trip, and a single note feature. Later on, I fixed the bug by double check the SQL order and my code. So, the single note function is able to work, then we solved the list of notes by entering the account id and trip id to locate the notes that were created under specific trip. Delete note feature was also write and test  to make sure it's functional.
Later on, Sam, Brandy, and I were working to to get the list of trips, Sam shares the screen and install redux toolkit and do some coding while Brady and I giving some advice. We're not able to finish this feature today. So, we save it for later.

## May 18, 2023
Today, I worked on:

* Fixing the issue to get list of trips and get a single trip
* Creating a trip notes associate to specific trip with Brady and Dasia

In today's project time, I was the first lead to share screen and coding while Brady and Daisa helping to troubleshoot to get the list of trips. Finally, I caught a parameter TypeError that was passed into our SQL. By fixing that error, the list of trip data was able to fetch and return a 200 success. And we move on to fixing the error of getting a single trip and it was solved.
Dasia takes the second lead on coding to create a trip note associate to specific trip. All three of us re-think the logic behind this functionally and play around and change lots of stuff. We weren't able to figure out for an hour, and the issue was resolved after the SEIRs guidance. The trip note was able to create by specific trip and user. But we still have issues with getting a list of trip notes, so we decide to leave it for tomorrow.


## May 17, 2023
Today, I worked on:

* creating a trip form and a note form with Brady and Dasia

Brady takes the lead for today's coding, while I and Daisa providing the info and read the documentation for some SQL commands. We had a 400 BAD REQUEST bug when trying to create a trip, after searching for an hour, we realized we initially set response 400 when trip was created. Then we fixed this issue. Later, we discovered there's a bug on showing the list of trips. Which will be the goal for the tomorrow.

## May 16, 2023
Today, I worked on:

* Fixing the authentication bugs and make it work

The entire team was trying to fix the authentication 401 issue. We review the code and I wrote the get method on an AccountQueries class(it was missing). Then, under the guidance from the instructor the bugs were caught and fixed. The authentication issue was resolved. We're able to create a user, login, logout, get a token, and getting tokens from HTTP-only cookies.

## May 15, 2023

Today, I worked on:

* Building Postgres database and set-up authentication with entire team

As a team, we decided to build the database together, Brady shared the screen, typing the data. The rest of us were checking if there are any mis-spelling or bugs. We built the Docker container and volume after databse were set-up, and git push to the main branch. Everyone git pull to have the same database.
Later on, I share screen and code with authentication part, login, logout, and creates a user endpoint were successfully showing on localhost, but the user was unable to create due to 401 unauthorized issues.
