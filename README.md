# Join US - My SQL project
![project](https://github.com/JPMurara/join_us_sql_project/blob/main/screenshots/screenshot.png?raw=true)

Welcome to the Join US project! This project was developed during a SQL bootcamp, showcasing my skills in writing queries using MySQL.
I have also studied other databases such as MS SQL Server, Postgres, and MongoDB.

## Description

The Join US project is a web application built with Node.js and Express.js, where I have connected a MySQL database. The purpose of this website is to serve as a mailing list, collecting email addresses that can be utilized for marketing campaigns or any other purpose.

## Features
Express App Integration: The MySQL database is seamlessly integrated into an Express application, allowing for easy management and interaction.

EJS Template Engine: I have utilized the EJS template engine to dynamically generate HTML pages, making it straightforward to display information from the database and create a smooth user experience.

Home Route: The home route is the landing page of the website, displaying essential information about the mailing list. It shows the total number of email addresses currently stored in the database. Additionally, there is an input field where users can submit their email address to join the waiting list.

POST Method: When a user submits their email address through the form, a POST method is triggered. This method inserts the new email address into the MySQL database. Afterwards, the home route queries the database to retrieve the updated total number of email addresses and dynamically displays it on the page.
 
