## 05/17/23 Wednesday, May 17th 2023

Sam and I began integrating the third party API and coding out what we would need, as well as creating new tables for the data and images for migrations. Made a keys.py file and put api key in there as well as creating the park.py file which holds the code to us integrating the data. Towards the end we were able to compile data into our database but not all of the data that we needed. We ended up having to take out the "activities" part and going to have to end up creating a new table to hold that information.

Everyone then came together to help and integrate it into the PGADMIN to help with the database. Ended up seeing the data that we had successfully compiled and pushed the branch that Sam and I were working in to gitlab.

## 5/18/23 Thursday, May 18th 2023

Today I worked with Sam and we began to finish our API queries as well as our routes. We were then able to get activities into the database, and retrieve the data and seed it into our own database. Then checked the swagger to make sure we were getting 200 responses on our routes.


## 5/22/23 Monday, May 22nd 2023

Today Sam and I worked together to fix some bugs and edit a little bit of the code from last week to include anything that we had missed. Then merged to the main branch and grouped up in with our group to discuss what else we need to work on.

We all switched partners and I worked with Dasia on the Parks List page, getting ideas and seeing if we should use redux.

## 5/23/23 Tuesday, May 23rd 2023

During the standup the group decided that we should hold off on what we were working on and start on the frontend auth, as well as we should use redux on our project. The groups went back to Sam and I again and we started to tackle the frontend auth.

What we did was handle the login funcion and updating the username and password, being able to login and redirect to a different page.

## 5/24/23 Wednesday, May 24th 2023

I continued working with Sam and what we did today was tackle the parks list page that Dasia and I were orignally doing, since we finished our frontend auth a little bit earlier than expected. We quickly were able to get it to work barebones and populate the page with data, we then went to riley to ask and see how we should add our columns, and he suggested that we use something called Masonry, which we took and used for our project instead of doing columns.

## 5/25/23 Thursday, May 25th 2023

Today was one of the tougher days, Sam and I were working on a new feature for the details page, with it being pagination. Were trying to populate the page with at least 20 parks and have 24 pages for all the 500 parks in the National Parks Database. We got some sort of pages to show but they weren't doing what we wanted them to, so we ended up going to see the SEIRS to see if they can help us out. Ryan was a huge help in putting us into the right direction as we saved some more of the work for tomorrow.

## 5/26/23 Friday, May 26th 2023

Sam and I continued working on the pagination pages were getting somewhere but it also feels like were getting nowhere. Today we also went to see the SEIRS again and they were a huge help in helping us fix some things and trying new things out. Stayed until closing but still couldn't finish what we were trying to do.

## 5/30/23 Tuesday, May 30th 2023

Sam had worked on the paginaiton pages over the weekend(thank you Sam!) so we were able to just move on and switch groups to do some other features. So I worked with Dasia and we had worked on the park details page, and the park details page only works when you use the string of 'park_id' instead of the actual ID integer. We quickly got the details page to work and got back with the team to let them know if they want us to work on anything else.

## 5/31/23 Wednesday, May 31st 2023

There were some things that was needed to add onto the park details page, so Dasia and I went back and added them. What we added was the 'Create Trip' button and the only issue was that you were able to see it without an account so thats one of the only bugs that we ran into when finishing up the page, other than that it was ready to commit and merge.

## 6/1/23 Thursday, June 1st 2023

Today I started working with Brady and Dasia to implement a views button onto the list of parks so when you click on it, it takes you to that individual park. We were having some trouble so we went to the SEIR's for help and they were able to steer us into the right direction. As well as making adjustments and getting rid of redundant code. Later in the day we were able to finish that feature, and I took over to start going over the nav bar quickly finishing it but coming up on some minor bugs. The bugs were where if you were to logout/login/signup the navbar wouldnt refresh without a hard browser refresh.

## 6/2/23 Friday, June 2nd 2023

Continued working on the nav-bar today to finish out the features and make sure that it refreshed everytime you loggedin/loggedout/signedup. Later on I was still working with Brady and Sandy as we finished the nav-bar we moved onto the Notes details page. We were coming into some trouble realizing that it was one of the transform respones and we passed two arguements into the query getting our function to work.

## 6/5/23 Monday, June 5th 2023

Today we just went over some bugs we had during standup and then split up into out groups. In the group today was Brady, Dasia and I and we just went over what we wanted protected by accounts and going over the pagination bug. After all the debugging and such we were able to commit and create our merge requests for the day and testing to see if our project was working without any other bugs.

## 6/6/23 Tuesday, June 6th 2023

Today as a group we all talked about code cleanup and using flake8 and black to go over what was needed to clean, as well as getting rid of any unecessary console.logs, prints, and our commented out code as well.  Then all that came was to style our project and at first we started on the homepage then after 5:00pm break we got together again, and to find out Dasia and Sam had worked on the Navbar styling already so we moved our efforts towards the homepage.


## 6/7/23 Wednesday, June 7th 2023

Today Brady, Sandy and I worked on the homepage together. Brady led as he shared his screen, and what we were going for is a moving video/image in the background and as it plays we just have a welcome title as well as a button that takes you straight to the parks list page. As we finished up on that we moved on to start working on the Signup/Signin forms adding images to the back making them cards and centering them so those pages don't look too plain and barebones. We were able to finish up the signup form in time, but the login form was a bit of a challenge due to how it was built differently from the signup form.


## 6/8/23 Thursday, June 8th 2023

Today we split up into different groups today and I got to work with Sandy. We finished up the Signin/Signup forms as well as the Create Trip and Create Trip Note Forms. Making everything kind of the same for consistency and not adding anything crazy just background pictures so it doesn't look too plain. Later after the group had split Sandy and I started finishing up ther README file and all thats missing now is the wireframe pictures.


## 6/9/23 Friday, June 9th 2023

Today before submission the group just went over some final bug fixes and error fixes before we submit our project, and did an overview together to see if every feature and such were working.
