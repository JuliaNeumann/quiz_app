# Quiz App

This is a small quiz app which I created for the purpose of helping me try out different frontend technologies. 

I wrote the baseline version as quickly as possible using only plain JavaScript, HTML & CSS, neither aiming to make it intentionally bad, nor putting much thought into structuring and optimizing my code.
My goal was to provide myself with a small, simple app which I can use to learn and try out different technologies, so I'll be adding branches with refactored versions of the same app using new technologies.

The app uses questions provided by https://opentdb.com/.


# Spring Boot / Kotlin Version
This version is implemented using Spring Boot and Kotlin to add a very simple backend for submitting quiz results, the Vue.js version is used for the frontend.

# Server

## Build & run
```
./gradlew bootRun
```
Expects MySQL DB to be running at localhost:3308.


# Client

## Project setup
```
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
