# Final Project: Covid-19 Vacation Planner

## Overview of Data Analysis: Data Exploration
 * Data Sources: COVID19 Dat and Number of people fully vaccinated
 * Steps of Cleaning and Merge the dataset: 
   1. Combined all the COVID19 files.
   2. Created a for loop to remove the null values and replace them with values from other columns.
   3. Created new dataframe for only the columns needed for the team.
   4. Merged the COVID19 data set with people fully vaccinated data.
   5. Created a new column coordinates.
   6. Removed any null values from lat and long. 

## Database:
* Postgress and AWS to store the data in the cloud. 
* We also stored the data in Mongodb as a backup. 

* Please see below image of connecting and uploading the data from Postgress
![image]

* Please see below tables created in Postgres, total of 3 tables.
![image]

