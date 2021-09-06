# Tech Blog - MVC

# Description

* A tech based blog that allows for discussion and latest news, encompassing technical concepts, recent advancements, and new technologies.
* This tech blog is built to use a CMS-style site, where developers can publish their blog posts and comment on other developers’ posts as well.
* This application was built from scratch and follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Application Deployment
![Tech Blog App]()



## Sceenshot(s)



# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

- The app is deployed and setup using Heroku. To install on your local device, clone the repo to your GitHub and then use Heroku and JAWS_DB to host the website. 

## Usage

- When the user visits the site for the first time
then, they are presented with the homepage
-  The homepage includes: existing blog posts (if any have been posted), navigation links for the homepage and the dashboard, and the option to log in
- When the user click's on the homepage option then they are taken to the homepage
- When the user click's on any other links in the navigation, then they are prompted to either sign up or sign in
- When the user choose's to sign up, then they are prompted to create a username and password
- When the user click's on the sign-up button
then the user credentials are saved and they are logged into the site
- When the user revisit's the site at a later time and choose's to sign in, then they are prompted to enter their username and password
- When the user is signed in to the site, then they see navigation links for the homepage, the dashboard, and the option to log out
- When the user click's on the homepage option in the navigation, then they are taken to the homepage and presented with existing blog posts that include the post title and the date created
- When the user click's on an existing blog post, then they are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- When the user enter's a comment and click's on the submit button while signed in, then the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- When the user click's on the dashboard option in the navigation, then they are taken to the dashboard and presented with any blog posts they have already created and the option to add a new blog post
- When the user click's on the button to add a new blog post, then they are prompted to enter both a title and contents for their blog post
- When the user click's on the button to create a new blog post, then the title and contents of their post are saved and they are taken back to an updated dashboard with their new blog post
- When the user click's on one of their existing posts in the dashboard, then they are able to delete or update the post and taken back to an updated dashboard
- When the user click's on the logout option in the navigation, then they are signed out of the site
- When the user is idle on the site for more than a set time, then they are able to view comments but they are prompted to log in again before they can add, update, or delete comments

# Credits
Technologies utilized in this project include:
- bcrypt
- connect-session-sequelize
- dotenv
- express (as framework for Node.js)
- express-handlebars
- express-session
- MySQL2


# License
Copyright 2021 Diana L. Daghlas
