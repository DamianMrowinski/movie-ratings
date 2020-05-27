Movie Ratings
---------------------------------------------

This project contains technologies:
- Angular 8
- Spring Boot 2.2.2
- Java 11
- JPA + Hibernate
- PostgreSQL 12
- Maven 3.6.2

The application will allow to:
- rate movies and keep track of what movies you have seen
- show the list of top movies
- show details of selected movie
- check coming soon movies
- show recommendations

The main purpose of the application is using Angular 8 in practice.

Currently I'm acquiring knowledge of Angular to finish this project.

## Run with docker-compose

In order to start PostgreSQL please run prepared script:
```
cd docker/dependencies

# On Linux / MacOS
./start.sh

# On Windows
start.sh
```

In order to stop PostgreSQL, you can use following script:
```
cd docker/dependencies

# On Linux / MacOS
./stop.sh

# On Windows
stop.sh
```