# Final Project: Covid-19 Vacation Planner

## Overview

The purpose of this project is to create a <b>Covid-19 Vacation Planner</b>. 

We choosed this topic to help theuser to answer the ultimate question <b> Where should i go for my vacation? Is it safe ?</b>.  

This analysis will help predict whether it's safe to for to a destination. Adding more vacation information about the cost and weather. 

Data sources would include real world data of Covid-19 cases published by [CSSEGIS](https://github.com/CSSEGISandData/COVID-19.git) and by using Google's Places APIs and Hotel APIs.  With the interactive map, we will utilize [The Global Economy](https://www.theglobaleconomy.com/download-data.php) data to show percentage of tourist arrival in a given place.  

The expected output of this project is an interactive website that will enable users to determine places to vacation in the world while taking into consideration current Covid cases and <i>predicted Covid cases</i> of their desired location. 

## Communication Protocols

The project team will communicate updates via Slack.  We will meet weekly during class hours to discuss and update each other on the progress.  We will be meeting during weekends as well so we can help each other troubleshoot any issues we may have. 

## Machine Learning Model
<<<<<<< HEAD

The Machine Learning Model would be designed to <i>predict Covid cases</i> based on the current trend.  
The model will use Random forrest or ARIMA model for analyzing and forecasting time series data to find relationship between various variable to predict the confirmed Covid cases per day
Outputs labels would include...
=======
- The Machine Learning Model would be designed to <i>predict Covid cases</i> based on the current trend.  
Outputs labels would include:
>>>>>>> d00e914cb93f79c01531c7a1dc1a2ad8289505cf
- Current number of Covid cases
- Predicted number of Covid cases

## Database

- Sample planning steps illustrated below.
![Planning Steps](/Images/Planning_Steps.png)
Image 1. Planning Steps

- Sample data structure or schema would be as follows:
Data Structure will be AWS and Postgress
![Mock Database Structure](/Images/Test_sample_image.png)
Image 2. Mock Database Structure

![Data Structure](INSERT DATA STRUCTURE PNG FILE)
Image 3. Data Structure Illustration

- Draft machine learning model would be as follows: We are looking to use linear regression model. 

Team members present a fully integrated database.

✓ Database stores static data for use during the project

✓ Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model)

✓ Includes at least two tables (or collections, if using MongoDB)

✓ Includes at least one join using the database language (not including any joins in Pandas)

✓ Includes at least one connection string (using SQLAlchemy or PyMongo)

Note: If you use a SQL database, you must provide your ERD with relationships.

## API request 

The API request will be for Google API and Leaflet to add the hotel, cost and weather information. 

## Visualisation 

The data will be visualized on an HTML page. User interface will be similar to the picture below .

![Website_wireframe](https://user-images.githubusercontent.com/91625564/155895250-277bab40-3f1e-4e4b-84bc-a84a169f19b0.png)

A blueprint for the dashboard is created and includes all of the following:

✓ [Storyboard on Google Slide(s)](https://docs.google.com/presentation/d/1rRUgBaMj10F-QSXcLct27BEUSyZpRNjWwqpKbI4w5Ks/edit?usp=sharing)

✓ Description of the tool(s) that will be used to create final dashboard

✓ Description of interactive element(s)

