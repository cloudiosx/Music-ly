# Music.ly

## Music.ly at a Glance

Music.ly utilizes PostgresSql, Flask, React, and Node to allows users to create, watch, and share 15-second videos. Logged in users can share their own video posts while being able to view other users' video posts.

## Application Architecture

Music.ly is built on a React frontend with a Flask backend, using PostgreSQL as a database. Psycopg2 and SQLAlchemy are both utilized to allow for the Python programming language to communicate effectively with the PostgresSQL database.

## Frontend Overview

The vast majority of Music.ly's application logic lies in its backend, and the display/interaction logic on the frontend is managed utilizing several technologies including React.

### Frontend Technologies Used

#### React 

Music.ly is a React application. All display logic is handled by the React libraries.

#### Redux

Music.ly makes extensive use of Redux. All state management is handled with Redux, with thunks making API calls to the backend Flask server for data. 

#### Amazon Serverless Image Handler

Amazon Web Services S3 Scalable Storage in the Cloud is used to store user profile photos for display on Music.ly. Furthermore, this allows for users to be able to upload any image as a profile photo.


## Backend Overview

Music.ly uses the SQLAlchemy toolkit to enable the interaction between a Flask server and a PostgreSQL database.

### Backend Technologies Used

#### Flask

Flask was an easy choice to make for the Music.ly server. The complex data flow from the frontend with JavaScript to the backend with Python made for effective and dynamic development.

#### PostgreSQL

PostgreSQL was the database of choice because it is simple to work with and is easily manipulate using SQLAlchemy.

#### SQLAlchemy

SQLAlchemy was the ORM of choice for Music.ly because of how nicely it integrates with PostgreSQL.

#### AWS S3

Amazon Web Services S3 was used to allow users to upload both songs and images to be used on Music.ly.

## Conclusion and Next Steps

Given the limited time to prepare for planning of this project, I would like to take the time, if allotted, to redesign some of the visual aspects of the site, rethink possibly the music player to use, and contemplate the CRUD features that will be executed.