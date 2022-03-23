# Final Project: Covid-19 Vacation Planner

## Overview

The purpose of this project is to create a <b>Covid-19 Vacation Planner</b> using current Covid-10 data and predicted Covid-19 cases to narrow down Top 10 Safest Destination. 

We chose this topic to help end-users identify the <b>safest place</b> to go on vacation during the Covid pandemic.  
- Where are the top 10 places we can go on vacation during Covid-19?
- What are the hotel options and their star ratings? 
- What are the Covid-19 predicted cases based on the historical data for those locations? 

The output of this project is an interactive website that will enable users to determine places to vacation in the world while taking into consideration current Covid cases and <i>predicted Covid cases</i> of their desired location. 

✓ [Storyboard on Google Slide(s)](https://docs.google.com/presentation/d/1rRUgBaMj10F-QSXcLct27BEUSyZpRNjWwqpKbI4w5Ks/edit?usp=sharing)

## Planning Steps
![Planning Steps](/Images/Planning_Steps.png)
Image 1. Planning Steps

## Data Collection and Sources
Data sources would include real world data of Covid-19 cases published by [CSSEGIS](https://github.com/CSSEGISandData/COVID-19.git), [Tourist Arrival](https://ourworldindata.org/tourism), [Covid Vaccination](https://ourworldindata.org/covid-vaccinations), and using Google's Places API to obtain Hotel and Rating information.  

## Technologies
![Technologies List](/Images/Technologies.png)
Image 2. Technology List

## [Machine Learning Model](https://github.com/icheung487/Final_Project/blob/main/ML_RandomForestRegressor-Top_Vacations_ML.ipynb)
The <b>Random Forest Regressor algorithm</b> was used to predict confirmed Covid cases based on the current trend. This model was selected because it uses ensemble learning, a technique that make a more accurate prediction because it combines predictions from multiple learning algorithms as opposed to a single algorithm

The Model was first tested on a small dataset, the state on New York before using it on the whole dataset. After achieving an accuracy of 99% in predicting confirmed covid cases, the model was then used to predict confirmed covid cases for the whole data set

![ML Model](/Images/ML%20Flowchart%20(2).png)
Image 3. ML Model

#### Data preprocessing 

Preliminary data preprocessing for the ML model included dropping NaN values, dropping location with missing latitude and longitude values, and encoding categorical data 

#### Features selection
- The target feature(y) that was selected was the number of confirmed covid cases. The ML algorithm was used to predict the number of confirmed covid cases on specific dates.   The output is a predicted number for each coordinate location. 
 
- The features set (X)   that had the strongest relationship with the target feature included cities and their coordinates, last update on covid cases, cases per day and number of people fully vaccinated

![Features Set](/Images/Features%20Set.png)

#### Splitting the training and testing sets 
- Splitting the dataset into the training set and test was done randomly using the following code :

   X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=78)

- The training set has what is known from which the model will learn from
- The test set tests the model’s predictions based on what it has learned from the training set.

#### Results of Analysis
Accuracy scores are below:
<br>![ML Accuracy Score](/Images/Accuracy.png)
<br>Image 4. ML Accuracy Score

![Real Values vs Predicted Values](/Images/Analysis.png)
<br>Image 5. ML Real Values vs Predicted Values

## Data Visualization
#### Flowchart
![Flowchart](/Images/Flowchart.png)
Image 6. Flowchart

#### Interactive Map
This project utilizes <b>Leaflet Maps</b> to display Covid information of Top 10 Visited Countries.  End-users have the ability to click on the map and select from the 3 maps and layers they want to view. [Click here to access JS code.](/Interactive_Map/static/js/final_project.js)  
![Interactive Map](/Images/Interactive_Map.png)
Image 7. Interactive Map Display

#### Hotel API and Covid Information
<b>Google API via Nearby Search</b> is also utilized to display Hotel and Covid information of Top 10 Safest Cities in the world. [Click here to access code.](/Interactive_Map/Vacation_Search.ipynb)
![Hotel and Covid Information](/Images/Hotel_Covid_Info.png)
Image 8. Hotel and Covid Information

#### Interactive Dashboard 

## Recommendations
- Use additional data sources such as Census (population) for countries in conjunction with Covid data
- Pull updated Covid data in the Interactive Map
- Use the ARIMA ML model instead of the Random Forest Regressor as it is more apt in time series forecasting to predict future values based on previously observed values
- Extracting huge amounts of data can be cumbersome and redundant. Using efficient ways to append data would have been useful
