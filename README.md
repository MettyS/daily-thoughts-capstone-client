

# Daily Thoughts Capstone
One line description of what this app is doing and who is it for



### 1. Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/



### 2. User Stories (to do now)
This app is for two types of users: a visitor and a logged-in user

###### (Example) Landing Page (Importance - High)
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

###### (Example) Login Page (Importance - High)
* As a returning register user
* I want to enter my password and username to log into this app,
* So I can have access to my account.

###### (Example) Sign Up (Importance - High)
* As a new user
* I want to register to use this app
* So I can create a personal account.

###### Project List (Importance - High)
* As a logged-in user,
* I want to be able to view the contents of my project(s)
* So I can decide what project I want to navigate to.

###### Project Page (Importance - High)
* As a logged-in user,
* I want to be able to submit a new sentence into a project,
* so I can see my project added onto.

###### User Preferences (Importance - Medium)
* As a logged-in user,
* I want to be able to update my account cridentials,
* So I can be able to log in.

###### (Example) Home Page (Importance - Medium)
* As a logged-in user,
* I want to be able to preview the content and sections of the app,
* So I can decide what section I want to navigate to.

###### Dashboard (Importance - Medium)
* As a logged-in user,
* I want to be able to see my account statistics and previous posts,
* so I can decide what information I find important.

###### Project Sentence Thread (Importance - Medium)
* As a logged-in user,
* I want to be able to edit previously submitted content,
* So I can update the content of my project.

###### Project Sentence Thread (Importance - Medium)
* As a logged-in user,
* I want to be able to edit the sharing preferences on my project,
* So I can decide if I want my sentences to be visible to others.

###### Home Page (Importance - Medium)
* As a logged-in user,
* I want to be able to view recent public posts made by users,
* So I can get inspiration for my project(s).

###### Project Page (Importance - Low)
* As a logged-in user,
* I want to be able to 'pin' a project,
* So I can access it directly from my Home Page

###### User Preferences (Importance - Low)
* As a logged-in user,
* I want to be able to choose app color themes,
* So the app is more accessible.


### 3. Functionality (to do now)
The app's functionality includes:
* (Example) Every User has the ability to create an account



### 4. Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes (to do now)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.jpg)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)



### 6. Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateless)
            * __Login.js__ (stateful) - connect to Users table (nickname, email, password)
            * __Register.js__ (stateful) - connect to Users table (nickname, email, password)
        * __Navbar.js__ (stateless) -
        * __Projects.js__ (stateful) - connect to Projects table (id, project_name, created_date)
        * __SentenceThread.js__ (stateful) - connect to Sentences table (id, created_date, content)




### 7. Back-end Structure - Business Objects
* Users (database table)
    * id (auto-generated)
    * nickname (minimum 5 characters, no special chars, no initial/trailing space validation)
    * email (must be unique, email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)

* Projects (database table)
    * id (auto-generated)
    * user_id (foreign key connected with user table)
    * project_name (minimum 1 character, no spaces validation) [if I'm going to have clean conversion to url]
    * date_created (now())
    * is_archived (default false)

* Sentences (database table)
    * id (auto-generated)
    * project_id (foreign key connected with project table)
    * date_created (now())
    * content (TEXT NOT NULL, no trailing or leading space validation)
    * is_archived (default false)


### 8. API Documentation (to do later)
API Documentation details:
* (Example) get all users



### 9. Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)



### 10. Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality



### 11. How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test