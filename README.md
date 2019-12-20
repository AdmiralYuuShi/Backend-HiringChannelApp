# Backend Hiring Channel App with Express js

The Hiring Channel App is a Restful API that contains data from Company and Engineer, which is made for Engineers to enter their profiles so that Companies can searching for Engineers that match their specifications.


## Before using

- Please make sure that you have installed :
  - latest node.js and npm (https://nodejs.org/)
  - mysql (https://www.apachefriends.org/)
  - Postman (https://www.getpostman.com/) for testing


## How to Use

- Make a new database and import hiring_channel.sql
- Create .env file on your root project folder and fill with :
  - DB_HOST= Your database host
  - DB_USER= Your database username
  - DB_PASS= Your database password
  - DB_NAME= Your database name
  - PORT= Port to run the app
  - SECRET= Secret Key for JWT
- Open terminal at your root project folder and Run 'npm i node'
- Run 'npm start' to start the app
- Open Postman
  - Before you access data, you have to login first
  - If you don't have an account, you have to register
  - After login, you will get a new Token (valid for 1 hours)
  - Insert your token to Authorization
  - Fill Header with email and user_id
  - Get data can do with any Role
  - Only Company Role can manage (create, update, delete) Company data
  - Only Engineer Role can manage (create, update, delete) Engineer data
  - You can manage both by Login as Admin Role


## Existing Endpoint

- Register new user :
  - (POST) /api/v1/user/register
- Login :
  - (POST) /api/v1/user/login
- Get Company data :
  - (GET) /api/v1/company
- Create new Company data : 
  - (POST) /api/v1/company
- Update Company data : 
  - (PUT) /api/v1/company/:company_id
- Change Company logo : 
  - (PUT) /api/v1/changeLogo/:company_id
- Delete Company data : 
  - (DELETE) /api/v1/company/:company_id
- Get all Engineer data :
  - (GET) /api/v1/engineer
- Get Engineer data by specific id :
  - (GET) /api/v1/engineer/:engineer_id
- Search Engineer data by name :
  - (GET) /api/v1/engineer?name=insert_name_here
- Search Engineer data by skill :
  - (GET) /api/v1/engineer?skill=insert_skill_here
- Sort Engineer data by name, skill, or date updated :
  - (GET) /api/v1/engineer?sortBy=sort_type
- Pagination in Engineer data :
  - (GET) /api/v1/engineer?page=number_of_page
- Create new Engineer data :
  - (POST) /api/v1/engineer
- Update Engineer data :
  - (PUT) /api/v1/engineer/:engineer_id
- Delete Engineer data :
  - (DELETE) /api/v1/engineer/:engineer_id
