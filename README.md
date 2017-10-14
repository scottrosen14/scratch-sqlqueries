# scratch-sqlqueries
​
## Project Goal
The attempt of the scratch-sqlqueries repo is to create a more gamified version of the find the robber game found in Unit-10SB-Databases.
​
​
The problem we are addressing is to create an environment where the user can practice SQL queries in an engaging environment where the database is safe from any manipulation aside from Select statements.
​
**Workflow**
​
A user will be prompted with a login screen that they will need to sign up with a username and password before being able to log in. 
​
After logging in the user will be presented with a screen with two tabs. The first tab will display an image of an ER diagram of the databases that are in use. The second tab will display individual tables of the database.
Universal in both tabs is the query field where a user can input their SQL query.
​
​
## To do List
[ ] Have a database serving data from a cloud based platform like ElephantSQL.
​
Issue: There's a database create on ElephantSQL, but there have been issues with connecting our server with the database.
-Currently data is able to be served locally and there are instructions below on setup.
​
[ ] Postgres ORM file that can serve data automatically to a database
​
[ ] Have the GUI table be manipulated based on the query provided
​
[ ] Additional pages and components for losing screen
​
[ ] Have the timer reset on a successful answer
​
[ ] Score and High Score tracking
​
[ ] A database for player scores and users
​
​
​
​
## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
​
```
git clone https://github.com/SQLit/scratch-sqlqueries.git
```
​
### Installing
​
A step by step series of examples that tell you have to get a development env running
​
Initial required package build.
​
```
npm install
```
Connect to custom server (instead of Create-React-App build).
​
*Recommendation use Proxy* 
​
```
npm run build 
node server/server.js
```
​
Connecting to PostgreSQL (in terminal)
```
Psql postgress
```
Create local database
```
postgres=#: create database <name>;
```
Create User/password
```
postgres=#: create user xxx password ‘yyy’;
```
Connect to PostgreSQL local database
```
\connect <database name>
```
Create table (see example)..
​
Rest of SQL commands for sample database can be found in `table.sql`
```
create table country(
 code char(3) primary key not null,
 name text not null,
 continent text not null,
 region text not null,
 population integer not null,
 capital integer
);
```
-------------
​
​
​
​
​
​
​
## Built With
​
*Frontend*
- React
​
*Backend*
- Posgres DB
- Node (Express)
​
## Versioning
0.1.0
​
## Authors
*Initial Team* - [SQLit](https://github.com/SQLit) Team
​
Chris Kim - https://github.com/Ckimchris
​
Scott Rosen - https://github.com/scottrosen14
​
Jelena Gruica - https://github.com/jgruica
Vincent Vuong - https://github.com/vincevuong
​
*Completion Team* - TBD
​
​
​
​
See also the list of [contributors](https://github.com/SQLit/scratch-sqlqueries/contributors) who participated in this project.
​
## License
​
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
​
## Acknowledgments
TBD
​
​