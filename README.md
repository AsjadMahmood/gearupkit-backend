# gearupkit-backend
Nodejs api using express, mongodb, and mongoose to build backend of gearupkit frontend 


# Getting Started
For the node.js and express.js to run into your system you need to install it first. 
So if you haven't installed it yet click the link https://nodejs.org/en/download/ and install it

# Install Dependencies
If you have node.js and npm install in your pc write command 'npm install' to install the require dependencies for this project

# Connect to DB
Import the dataset by creating 'gearupkit' DB and table named User. 
If you have created your own DB and table in the .env file and index.js file, url to connect to mongodb is written.You can update it accordingly and change the 
table name from 'model/user.model.js' file.

# Server Start 
to start the server write command 'node index.js' 
you can also install 'nodemon' by typing 'npm i nodemon'. It's benefit is you dont have to start/stop the server again after changes. It will auto save your changes
After installing nodemon run 'nodemon index.js' and your server will  start listeing to your requests.
