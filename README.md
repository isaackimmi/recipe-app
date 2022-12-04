# recipe-app

## General Setup Instructions
Clone the repo to have access to it locally. 

## MySQL Workbench Setup 
Install MySQL Workbench using this link: https://dev.mysql.com/downloads/workbench/. Choose the correct version for your OS.

Follow the setup instructions that are provided by the setup wizard. 

Once you see this screen:

<img width="600" alt="Screen Shot 2022-12-04 at 10 38 38 AM" src="https://user-images.githubusercontent.com/53633984/205509141-a817ef01-9615-4ddf-8727-ae8b74bd7bb0.png">

Click on the tile that is titled `Local instance ####`. This will be the database to which our backend will connect. 

Make sure to remember the `user` and `password` fields that are used for that database instance as you will need these two items when setting up the backend. 


## MySQL Database Setup

You will see that we have two additional folders at the root of our project titled `cs157_prod` and `cs157a_testing`. These folders contain the schema for our prod and testing databases, respectively. In order to import them into MySQL Workbench follow this tutorial: https://www.youtube.com/watch?v=q0EBUXTQQRY. 

## Frontend Setup
Go into the `/app` directory by running `cd client/app` from the root directory of the project. Once you are inside the `/app` directory, run `npm install` to make sure you have all the necessary packages. At this point, you can run `npm start` from the `/app` directory and you should see the frontend running in your browser. 

## Backend Setup
Go into `/server` directory by running `cd server` from the root directory of the project. Once you are inside the `server` directory, run `npm install`. 

Now, find the `index.js` file (inside the `server` directory) and look at lines 8-13 (which should look like this):
```
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1",
  database: "cs157a",
});
```
**IMPORTANT**: Make sure that the code segment above (which is inside `server/index.js` includes the `host`, `user`, and `password` fields that you use locally in MySQL Workbench). The `database` field can be kept as is because we have provided a schema file that matches the database name. If you do not change these fields, you will see an error log when trying to insert data into the database using our app. 

Now, you can run `npm run devStart` from the `server` directory and the backend server should be running. 

At this point, you should be able to enter data into our frontend and send `CREATE`, `UPDATE`, `DELETE`, and `GET` requests to our backend which will update the MySQL database as well. 

**PS**: If you want to switch between `cs157a_prod` and `cs157a_testing`, make sure that you have both databases imported into your MySQL Workbench project. ALSO, switch the `database` field (inside the code segment pasted above) to `cs157a_prod` or `cs157a_testing`.
