# Final Project: Covid-19 Vacation Planner

## Overview of Data Analysis: Data Exploration
 * Data Sources: [COVID19](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports) Data and Number of people fully vaccinated
 * Steps of Cleaning and Merge the dataset: 
   1. Combined all the COVID19 files.
   2. Created a for loop to remove the null values and replace them with values from other columns.
   3. Created new dataframe for only the columns needed for the team.
   4. Merged the COVID19 data set with people fully vaccinated data.
   5. Created a new column coordinates.
   6. Removed any null values from lat and long. 
#Final Data set image below:
![image](https://github.com/icheung487/Final_Project/blob/main/Images/Final_COVID19_data.png)

## Database:
* Postgress and AWS to store the data in the cloud. 
* We also stored the data in Mongodb as a backup. 
* Image below is Mongodb for reference. 
![image](https://github.com/icheung487/Final_Project/blob/main/Images/MongoDB_Collections.png)

* Please see below image of connecting and uploading the data from Postgress
![image](https://github.com/icheung487/Final_Project/blob/main/Images/Connecting_And_Downloading_to_Postgres.png)

* Please see below tables created in Postgres, total of 3 tables.
![image](https://github.com/icheung487/Final_Project/blob/main/Images/Postgres_Connections.png)

