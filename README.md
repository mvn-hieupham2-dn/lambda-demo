# boilerplate-lambda-typescript

This is a kickoff repository for lambda function development with Typescript.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Structure](#structure)
* [Setup](#setup)
## General info
This is boilerplate lambda function by typescript and use database postgresql
## Technologies
- node >= v14.x
- sam >= 1.5
- postgres 12.2
- docker
## Structure
```
.
├── README.md
├── commitlint.config.js                                    // config of commit lint
├── babel.config.js                                         // config of babel
├── docker-compose.yml                                      // database for lambda
├── env.json                                                // override environment lambda
├── jest.config.js                                          // config file of jest
├── package.json                                            // node module dependencies
├── security.txt                                            // security of SA
├── src                                                     // place of your code
│   ├── lambdas                                             // place of your lambda function
│   │   ├── cat                                             // sample function
│   │   │   ├── index.test.ts                               // example test λ handler
│   │   │   ├── index.ts                                    // λ handler
│   │   │   ├── repository.ts                               // all query database
│   │   │   ├── usecase.ts                                  //  
│   │   │   └── validator.ts                                // validate for input and output handle
│   │   └── dog
│   │       ├── index.ts
│   │       ├── repository.ts
│   │       ├── usecase.ts
│   │       └── validator.ts
│   └── layers                                               // layers dir
│       ├── dependencies                                     // dependencies need to run λ function
│       │   └── nodejs
│       │       └── package.json
│       └── shared                                           // shared folder   
│           └── nodejs
│               └── node_modules
│                   ├── models                               // 
│                   │   ├── entity                           // entity folder
│                   │   │   └── cat.entity.ts                // example entity
│                   │   └── index.ts                         // file config connect db
│                   └── shared                               // 
│                       └── utils
│                           ├── custom_error.ts              // format Error
│                           ├── custom_response.ts           // format response
│                           ├── custom_type.ts               // custom some type you wanna use
│                           ├── middleware.ts                // middleware 
│                           ├── response_messages.ts         // common message response
│                           └── validation.ts                // common validator
├── template.yml                                             // SAM template
└── tsconfig.json                                            // Typescript complier option 
```
## Setup
To run this project, install it locally using npm(note: use node >= v14)
```
$ npm i
```
```
$ npm run build-api
```
```
$ npm run start:dev
```
- Run database
```
$ docker-compose up
```
