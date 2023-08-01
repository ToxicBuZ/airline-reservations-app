# Airline Reservations App

### Requirements

Docker 4+, Angular 16, Express 4.16

### Docker

- To create a docker container with a Postgres database run: `docker-compose -f "docker-compose.yaml" up -d --build` on a terminal from the `airline-reservations-app` directory (root).
- Credentials for the Postgres Database can be found in `postgres-service.js` and can be used to connect to the Database Tool.
- For the purposes of this project, DBeaver Community was used to test the database `https://dbeaver.io/`.

### Backend

This project was generated with Express 4.16.1.

- Navigate to the `airline-reservations-api` directory then use `npm i` to install dependencies.
- To run the project use `npm start` then load `http://localhost:3000/` in your browser to access the app.
- The `API_KEY` can be found in the .env file.
- Run `npm test` to execute the unit tests via Jest.

Notes: Make sure the docker container is running, and then run the project from the `airline-reservations-api` directory.


### Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

- Navigate to `the airline-reservations-spa` directory then use `npm i` to install dependencies.
- To run the project use `ng serve` then load `http://localhost:4200/` in your browser to access the app.
- The application will automatically reload if you change any of the source files.
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
