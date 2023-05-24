## Monday, May 15

We began the day by confirming that we will use Postgres as our database. From there, I shared my screen and began writing the code for the docker-compose.yaml file to account for our services and database. Everyone else provided feedback and helped troubleshoot along the way until we could confirm that we had functioning containers/image/volume in Docker.

When this was completed, Drake shared his screen and transferred content from issues we had previously written out in a Google doc into GitLab such that we will be able to create branches associated with the issues as we tackle them utilizing pair-programming.

Finally, Sandy shared her screen and led us in coding our authentication, while we all contributed thoughts as troubleshooting was needed. By the end of the day, we still had a 401 Unauthorized error, because we did not successfully complete our "get" Account Query, which was preventing a newly created account from logging in.


## Tuesday, May 16

Dasia led in screen sharing as we fixed our accounts table, and updated our ./routers/accounts.py, ./models/accounts.py, and ./queries/accounts.py files. Once we addressed the remaining edits in these files, we were successful in creating our login, logout, token, create account, and protected routes with 200 responses.

Upon completing authorization, we merged to main with Drake serving as our merge request reviewer, and moved on to planning the next steps of our backend. Drake, Sam, and I will be working on communicating with the National Park Service API, including the decision to run a get request or add to our own database. Dasia and Sandy will work on the Trip and Trip Notes components of our database. We will all be present for the third-party API strategy discussion.


## Wednesday, May 17

Sam and Drake split up to work on seeding the database with a call to the /parks api endpoint for the National Park Service API. Dasia, Sandy, and I went on to construct the rest of the backend. I led the screen sharing initiative today by getting our trips and trip notes files for the backend started (routers, models, queries). We ran into several bugs, but after debugging together we were able to get all of the trip endpoints working properly.

## Thursday, May 18

Today, we focused on trip notes. Dasia screen-shared and we worked together for the afternoon. We were able to make adjustments/progress such that we received different errors each time we hit one of our trip note endpoints, but we were only able to get our POST endpoint for notes working. Our GET and DELETE were not operational. Sam and Drake nearly finished with the parks aspect of our database construction, but realized they didn't write code to handle errors. To finish the backend on Monday, Sam and Drake would need to write in try--except blocks and we would finish our GET and DELETE api calls.


## Monday, May 22

After about an hour, we were able to resolve our GET and DELETE issues for trip notes. Turns out that a couple days away from the project works wonders for troubleshooting capacity! Sam and Drake fixed error handling and we moved on to handling merge requests between the two issues.

## Tuesday, May 23

We moved on to front-end authorization. As a group, we decided that we want to use Redux for our project. Then, we split up into a group working on login/getting acccount tokens, and a group to begin researching signing up and logging out. Sandy, Dasia and I worked on signing up and logging out. We were able to locate snippets of code to help our efforts, but were not able to resolve these issues. Sam and Drake finished with login/get token.

## Wednesday, May 24

We started with code review and merge requests. Then, everyone pulled from main. We will continue working on signup and logout now that we have the rest of Drake and Sam's login/token code. Drake and Sam will begin on a front-end list page. Around 1:30, we finished up with sign up and not are moving on to logging out a user. At the end of the day, we began working on our list pages for parks and user trips.

## Thursday, May 25


