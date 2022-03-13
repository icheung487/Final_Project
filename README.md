# Final Project: Covid-19 Vacation Planner

## Overview

The purpose of this project is to create a <b>Covid-19 Vacation Planner</b>. 

We choose this topic to help the user to answer the ultimate question <b> Where should i go for my vacation? Is it safe?</b>.  

This analysis will help predict whether it's safe to for to a destination. Adding more vacation information about the cost and weather. 
Data sources would include real world data of Covid-19 cases published by [CSSEGIS](https://github.com/CSSEGISandData/COVID-19.git) and by using Google's Places APIs and Hotel APIs.  With the interactive map, we will utilize [The Global Economy] (https://www.theglobaleconomy.com/download-data.php) data to show percentage of tourist arrival in a given place.  

The expected output of this project is an interactive website that will enable users to determine places to vacation in the world while taking into consideration current Covid cases and <i>predicted Covid cases</i> of their desired location. 

## Communication Protocols

The project team will communicate updates via Slack.  We will meet weekly during class hours to discuss and update each other on the progress.  We will be meeting during weekends as well so we can help each other troubleshoot any issues we may have. 

## Machine Learning Model
The Random Forest Regressor algorithm was used to predict confirmed Covid cases based on the current trend. This model was selected because it uses ensemble learning, a technique that make a more accurate prediction because it combines predictions from multiple learning algorithms as opposed to a single algorithm

The Model was first tested on a small dataset, the state on New York before using it on the whole dataset. After achieving an accuracy of 99% in predicting confirmed covid cases, the model was then used to predict confirmed covid cases for the whole data set

#### Data preprocessing 

Preliminary data preprocessing for the ML model included dropping NaN values, dropping location with missing latitude and longitude values, and encoding categorical data 

#### Features selection
- The target feature(y) that was selected was the number of confirmed covid cases. The ML algorithm was used to predict the number of confirmed covid cases on specific dates.   The output is a predicted number for each coordinate location. 
 
- The features set (X)   that had the strongest relationship with the target feature included cities and their coordinates, last update on covid cases, cases per day and number of people fully vaccinated

#### Splitting the training and testing sets 
- Splitting the dataset into the training set and test was done randomly using the following code :

   X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=78)

- The training set has what is known from which the model will learn from
- The test set tests the model’s predictions based on what it has learned from the training set.

## Database

- Sample planning steps illustrated below.
![Planning Steps](/Images/Planning_Steps.png)
Image 1. Planning Steps

- Sample data structure or schema would be as follows:
Data Structure will be AWS and Postgress
![Mock Database Structure](/Images/Test_sample_image.png)
Image 2. Mock Database Structure
<<<<<<< HEAD

![Data Structure](INSERT DATA STRUCTURE PNG FILE)
Image 3. Data Structure Illustration

- Draft machine learning model would be as follows: We are looking to use linear regression model. 

Team members present a fully integrated database.

✓ Database stores static data for use during the project

✓ Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model)
#### <br><b>- Interactive Map via Leaflet</b>
Displays Top 10 Most Visited Countries with 3 different types of layers: Top 10 Safest Cities, Confirmed Covid Cases, and Total Vaccinated.
The dataset is interfaced with the JavaScript file from the Postgres database.
#### <b>- Hotel Information via Google API</b>
Displays Hotel and Covid Information for Top 10 Safest Cities.
THe dataset is interfaced with Jupyter from the Postgres database. 

✓ Includes at least two tables (or collections, if using MongoDB)

=======

![Data Structure](INSERT DATA STRUCTURE PNG FILE)
Image 3. Data Structure Illustration

- Draft machine learning model would be as follows: We are looking to use linear regression model. 

Team members present a fully integrated database.

✓ Database stores static data for use during the project

✓ Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model)

✓ Includes at least two tables (or collections, if using MongoDB)

>>>>>>> c86215ad6db6edadd1c9fea2cdb39eb0b458d98b
✓ Includes at least one join using the database language (not including any joins in Pandas)

✓ Includes at least one connection string (using SQLAlchemy or PyMongo)

Note: If you use a SQL database, you must provide your ERD with relationships.

## API request 

The API request will be for Google API and Leaflet to add the hotel and Covid data information. 

## Visualization 

The data will be visualized on an HTML page. User interface will be similar to the picture below .

![Website_wireframe](https://user-images.githubusercontent.com/91625564/155895250-277bab40-3f1e-4e4b-84bc-a84a169f19b0.png)

A blueprint for the dashboard is created and includes all of the following:

✓ [Storyboard on Google Slide(s)](https://docs.google.com/presentation/d/1rRUgBaMj10F-QSXcLct27BEUSyZpRNjWwqpKbI4w5Ks/edit?usp=sharing)

✓ Description of the tool(s) that will be used to create final dashboard

✓ Description of interactive element(s)
<br>This project utilizes <b>Leaflet Maps</b> to display Covid information of Top 10 Visited Countries.  End-users have the ability to click on the map and select from the 3 layers information they want to view.  <b>Google API via Nearby Search</b> is also utilized to display Hotel and Covid information of Top 10 Safest Cities in the world. 
![Interactive Map](/Images/Interactive_Map.png)
Interactive Map Display

![Hotel and Covid Information](/Images/Hotel_Covid_Info.png)
Hotel and Covid Information




