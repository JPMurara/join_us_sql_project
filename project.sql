ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; -- set up connection

CREATE DATABASE finalproject;
USE finalproject;

select COUNT(*) from project_users;