# Proshop

## :zap: Proshop eCommerce app

- Proshop is a simple eCommerce app where users can buy items from a list of products and pay with PayPal. This app uses a MERN stack (Mongo, Express, React, and Node) with application state managed by Redux. The PayPal API with a sandbox account is used to simulate the processing of payments. This app is from a tutorial demonstrating Redux with React to manage user actions, create, update, and track user orders with an admin dashboard to create and edit products.

## :page_facing_up: Table of Contents

- [:zap: Proshop](#zap-Proshop)
  - [:page_facing_up: Table of Contents](#page_facing_up-table-of-contents)
  - [:books: General Info](#books-general-info)
  - [:computer: Technologies](#computer-technologies)
  - [:camera: Screenshots](#camera-screen-shots)
  - [:floppy_disk: Setup](#floppy_disk-setup)
  - [:microscope: Deep Dive](#microscope-deep-dive)
  - [:sunglasses: Features](#cool-features)
  - [:clipboard: Pending Features](#clipboard-pending-features)
  - [:clap: Inspiration](#clap-inspiration)
  - [:envelope: Contact](#envelope-contact)

## :books: General Info

- A simple eCommerce app using React for the frontend, Redux for app state management, Express node.js for the backend server, and MongoDB Atlas as the cloud hosted database. This was built to better understand Redux handles state across the application, more practice with conditional rendering in React, and handling payment with Paypal.

## :camera: Screenshots

![Screenshot1](/screenshots/proshopScreenshot1.png)

## :computer: Technologies

- [Node.js ](https://nodejs.org/en/)
- [Express server](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosted database
- [React UI](https://reactjs.org/) for frontend user interface
- [Redux](https://redux.js.org/) for application state management
- [React-Redux](https://react-redux.js.org/) library that connects React with Redux
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) handles asynchronous requests and allows writing action creators that return functions
- [React Router](https://reactrouter.com/web/guides/philosophy) manages routes in React
- [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) for authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) for hashing
- [PayPal API](https://developer.paypal.com/docs/api/overview/) for payments

- [Mongoose](https://mongoosejs.com/docs/) Object Data Modeling (ODM) library for MongoDB. Similar to an ORM (Object Relational Mapper) like PostgreSQL.
- [Mongo Compass](https://www.mongodb.com/products/compass) desktop GUI to manage a MongoDB
- [React-PayPal-Button-v2](https://www.npmjs.com/package/react-paypal-button-v2) simplifies using PayPal
- [Redux-DevTools-Extension](https://www.npmjs.com/package/redux-devtools-extension) Simplifies using the Redux devtools
- [Concurrently](https://www.npmjs.com/package/concurrently) run multiple commands at the same time; simultaneously starts the Express server with the React server.
- [Colors](https://www.npmjs.com/package/colors) adds colors to the termial output. Helpful in reading logs and errors
- [Express Async Handler](https://www.npmjs.com/package/express-async-handler) helpful library that helps manage asynchronous errors in express

## :floppy_disk: Setup

- Normally, the setup would be to clone this repo, change directory into it, then type `npm install` and `npm client-install`, however because of the environment variables for Mongo Atlas, JWT secret, etc, etc,. and the associated setup with those services the easiest method is click on the link to the Heroku site either [here](https://proshop3000.herokuapp.com/) or below:

[https://proshop3000.herokuapp.com/](https://proshop3000.herokuapp.com/)

- If you chose to install this app, after running the npm installs, create a .env file and set the following environment variables:

````NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id```

- To start only the node server at prompt in the ROOT DIRECTORY type "npm start". To start nodemon (continual saves/restarts server in dev mode) in the ROOT DIRECTORY type "npm run server". To start both the backend server and React frontend in the ROOT DIRECTORY type "npm run dev"

## :sunglasses: Features

- Users can register, login, and logout
- Users can select items on store, update quantity, remove items, and proceed to payment
- PayPal for payment (simulated using a PayPal sandbox)
- User can view orders and status on Profile page
- Admin dashboard to create and edit products, view user list, product list, and view orders.

## :microscope: Deep Dive

- Coming soon

## :clap: Inspiration

- Get more practice with Redux, conditional rendering in React, and use the PayPal API.

## :envelope: Contact

- repo created by Don Spire [Nspired1](https://github.com/Nspired1), email: don.spire1@gmail.com
````
