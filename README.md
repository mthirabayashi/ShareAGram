# ShareAGram

[Heroku Link](http://www.shareagram.us/)

ShareAGram is a full-stack web application inspired by Instagram.  It utilizes multiple technologies such as Ruby on Rails on the backend, PostgreSQL database, and React.js with a Redux architectural framework for the frontend.

## Features & Implementation


####Posts
![](http://res.cloudinary.com/duep1w4tv/image/upload/v1478900551/ShareAGram/mxbx8ucngdo2pmhdjesv.png)

Features

- Users can upload photos
- Users can edit and delete their own posts
- Posts automatically displayed on main page of all "followed" users
- Users can view "unfollowed" posts through user profiles

Implementation

Post images are stored on cloudinary.com.  In the backend, the post feed is constructed based on the users that the current user is following.  Deleting a post removes it from the database as well as removing it from the application state.


####Comments
Features

- Users can create comments on a specific post
- Users can delete comments if they are the creator of the comment or the post author

Implementation

Comments are stored in the database as part of a join table between a post and a user.  Deletion rights of a comment are based on the authorship of either the comment itself or the post it relates to.


####Follows
![](http://res.cloudinary.com/duep1w4tv/image/upload/v1478901427/ShareAGram/neiqmc42b7frvxvmml6j.png)

Features

- A user can "follow" another user
	- Posts from followed users will be displayed in the post feed (Home Page)
- A user can "unfollow" a followed user

Implementation

Follows are stored in the database as part of a join table between two users.  Following and unfollowing another user will directly affect a user's post feed as well as profile stats as shown above.

####User Profile
Features

- Users can navigate to other users profile pages
- Displays all the posts of a user
	- Clicking on a post will display a larger view of it with additional information
- Displays the stats of the user
	- Number of posts
	- Number of followers
	- Number of people following
- Users can edit their own posts

Implementation

User profile is where a user can go to follow/unfollow another user.  Navigating to a user profile fetches the posts pertaining to that user and displays them in a condensed version of the home photo feed.  Clicking on an image preview will open a Modal that displays the post details.  From inside the Modal, the user can comment, like, or edit the post if they are the author.


####Likes
Features

- Users can "like" a post
- Users can "unlike" a post
- Total number of likes are displayed on the post

Implementation

Users can click the heart icon next to the comment section to create or delete a "like".  Likes are stored in the database as part of a join table between a user and a post.  Likes are tracked by both the current user as well as the post.  This allows posts to display the number of associated "likes" as well as allowing users to toggle a create/delete "like" action by clicking the same heart icon.


####Search
![](http://res.cloudinary.com/duep1w4tv/image/upload/v1478902876/ShareAGram/kneqwkph0cvjpmdsczcy.png)

Features

- Search for users
- Clicking on a user in the search results allows users to navigate to user profiles

Implementation

Search sends an AJAX request to the database to find all users with a similar username as the search parameter.  It returns the list of matched users on every update of the search parameters and displays it to the user.


####Authentication
Features

- User verification
- Users must be logged in to use the application

Implementation

User authentication is handled by both the frontend and the backend.  The login/signup actions on the frontend send the information to the backend where the current user is tracked.  This allows ShareAGram users to login and navigate around the application while remaining logged in.



## Future Features

There are still some features that will hopefully be added to ShareAgram in the near future.  These future features include the following:
####Hashtags
Hashtags are a key feature of Instagram and I plan to implement it in a similar way on ShareAGram.  Users will be able to add #hashtags in their post descriptions.  The hashtags would get parsed and saved in the database.  Users would be able to search or click on a hashtag to display all the posts that have the same hashtag.

####Discover Page
The discover page is where users can go to find new users to follow.  I plan to implement it to display unfollowed users.  I would like to also have the unfollowed users ordered by

####Direct Messaging
Direct messaging is not a crucial feature but is something I would like to implement if I have time.  Users would be able to privately send each other messages.  Each user would have an inbox where the messages would be kept/sent.
