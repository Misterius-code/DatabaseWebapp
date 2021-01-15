# Database Global Terrorist Attacks
Welcome to small webapp which contains information about terrorist attacks.

## Getting Started
Please Unzip terrorism.zip     It sounds like virus but it is just harmless json file
Please make sure you firstly have Node JS and mongoGB

Please firstly install all necessary dependecies by comand:
 "npm install"
 
If it is your first time using this webapp please next run seeder by command:
"node seeder.js"

You can run webapp by comands:
"npm start" or "npm run dev"

to install the database from Json please use:
mongoimport --db=terror  --collection=terrorismdatas --file="terrorism.json" --jsonArray
