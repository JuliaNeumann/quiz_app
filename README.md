# Quiz App

This is a small quiz app which I created for the purpose of helping me try out different technologies. 

I wrote the baseline version as quickly as possible using only plain JavaScript, HTML & CSS, neither aiming to make it intentionally bad, nor putting much thought into structuring and optimizing my code.
My goal was to provide myself with a small, simple app which I can use to learn and try out different technologies, so I'll be adding branches with refactored versions of the same app using new technologies.

The app uses questions provided by https://opentdb.com/.


# Spring Boot / Kotlin Version
This version is implemented using Spring Boot and Kotlin to add a very simple backend for submitting quiz results,
the Vue.js version is used for the frontend.

# Server

## Build & run
```
cd server
./gradlew bootRun
```
Expects MySQL DB to be running at localhost:3308.
With docker, you can use:
```
docker run --rm --name test-mysql -p 3308:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=kotlin_crud_db -d mysql:latest
```

## API
```
http://localhost:8080/api/submissions/                      - GET all submissions / POST new submission
http://localhost:8080/api/submissions/aggregated/{user}     - GET average quiz result for given username
```

# Client

## Project setup
```
cd client
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
