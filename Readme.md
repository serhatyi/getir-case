# Getir Case

A sample REST API application which is built using Node.js and Express.js. The application has only single endpoint that connects to a MongoDB database for fetching records.

## Installation

* Install Node.js
* Run: $ git clone  https://github.com/serhatyi/getir-case.git
* Run: $ cd getir-case
* Run: $ npm install
* Run: $ mv ./.env.sample ./.env
* Enter mongodb URL in .env file
* Run: $ npm start
* Run: $ npm test for running unit tests

## API

- GET `/*`
  - Response <br>
      ```json
      {
        "msg": "Hello World"
      }
      ```

- POST `/filterRecord`
  - Request Body <br>
      ```json
      {
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
      }
      ```
  - Response <br>
    ```json
    {
        "code": 0,
        "msg": "Success",
        "records": [
            {
                "key": "ibfRLaFT",
                "createdAt": "2016-12-25T16:43:27.909Z",
                "totalCount": 2892
            },
            ...
      ]
    }
    ```


## Live Demo
Application running in the cloud with Heroku. <br>
[Live Application]( https://getir-case-test.herokuapp.com ) = https://getir-case-test.herokuapp.com
