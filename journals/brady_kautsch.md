## Monday, May 15

We began the day by confirming that we will use Postgres as our database. From there, I shared my screen and began writing the code for the docker-compose.yaml file to account for our services and database. Everyone else provided feedback and helped troubleshoot along the way until we could confirm that we had functioning containers/image/volume in Docker.

When this was completed, Drake shared his screen and transferred content from issues we had previously written out in a Google doc into GitLab such that we will be able to create branches associated with the issues as we tackle them utilizing pair-programming.

Finally, Sandy shared her screen and led us in coding our authentication, while we all contributed thoughts as troubleshooting was needed. By the end of the day, we still had a 401 Unauthorized error, because we did not successfully complete our "get" Account Query, which was preventing a newly created account from logging in.


## Tuesday, May 16

Dasia led in screen sharing as we fixed our accounts table, and updated our ./routers/accounts.py, ./models/accounts.py, and ./queries/accounts.py files. Once we addressed the remaining edits in these files, we were successful in creating our login, logout, token, create account, and protected routes with 200 responses.

Upon completing authorization, we merged to main with Drake serving as our merge request reviewer, and moved on to planning the next steps of our backend. Drake, Sam, and I will be working on communicating with the National Park Service API, including the decision to run a get request or add to our own database. Dasia and Sandy will work on the Trip and Trip Notes components of our database. We will all be present for the third-party API strategy discussion.
