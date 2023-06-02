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

As we continued with our trip list component, we learned that some of our authorization was not behaving as expected, even though it seemed to be working correctly. Essentially, our authenticator was NOT passing a unique account ID for the user to get their data. Rather, the user was expected to plug in their account id, which would be unreasonable for a user to do. Once we finish that, we should be able to access trip lists by user instead of getting undefined objects. We plan to finish the trips list component by EOD tomorrow. I led with screen sharing/coding today in our pair programming.

## Friday, May 26

Sandy, Dasia and I switched to a Create Trip form, and Dasia led with screen sharing for the day. We nearly completed this feature, but were consistently getting Unprocessable Entity errors. We eventually realized that JS was trying to submit date as MM-DD-YYYY, while SQL was expecting the date format to be YYYY-MM-DD. We tried to write functions to convert the date format to the SQL expected format, but were unsuccessful at this point. We would later find out that one reason for this was in our slice file.

## Tuesday, May 30

After completing these features, Drake took over to create our Nav bar. It is largely completed without issues, except that the page is not reloading without a manual refresh after logging in or logging out; depending on which is selected, access to certain features are either added or removed for the user.

## Wednesday, May 31

Sam led our trip and trip note detail pages today. Dasia and Drake worked on a Park Detail page. Both groups worked on connecting an instance from our list page to the corresponding detail page. Trip and trip note detail pages were completed minus a couple of buttons (for cancel and finish trip) which are listed as separate issues in our GitLab. Talking through code, console logging, and googling bootstrap documentation got us through today.

## Thursday, June 1

I led most of today's coding by creating buttons that would route from an individual national park on the list page to its respective detail page. We ran into lots of issues where the park list stopped working and upon trying to hit that endpoint it would just grab a (seemlingly) random park ID and take us to a detail page. Eventually we worked out that our Park Card was imported in too many places, so we made adjustments to remove duplicated values and then were able to successfully map.

After completing these features, Drake took over to create our Nav bar. It is largely completed without issues, except that the page is not reloading without a manual refresh after logging in or logging out; depending on which is selected, access to certain features are either added or removed for the user.

## Friday, June 2

Today we had a sprint to complete the last of our features and we did it! I led coding today with Sandy and Drake for the note detail page and note delete button. We had to write a new slice for note deletion, and move around some misplaced tags. From there, we deleted a transform response which was nullifying our note object for the note detail page (i.e. we would get a 200 response for our GET request but the page would be empty). Once we addressed this, we were able to view the entirety of our note. Then, I wrote a function to handle note deletion and re-route to the trip detail page, where the traveler would see the trip overview with their remaining notes.

Sam and Sandy completed our home page and created a trip history page to log trips that were completed or cancelled, while our upcoming trips page holds "pending" trips. We worked together to sort out our merge requests, tested behavior as a team, and then selected who would write which unit tests. Next week, we will work on app styling, along with writing unit tests and ensuring the behavior of the app is as expected with all extraneous imports, commented-out code, etc. deleted before turning in the final product.
