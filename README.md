# demo-lambda-typescript
## Table of contents
* [Technologies](#technologies)
* [Structure](#structure)
* [Setup](#setup)
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
├── src                                                     // place of your code
│   ├── lambdas                                             // place of your lambda function
│   │   ├── detail                                             // sample function
│   │   │   ├── detailDto.ts                                   
│   │   │   ├── handler.ts                                   // λ handler
│   │   │   └── validator.ts                                // validate for input and output handle
│   │   └── products
│   │       ├── productDto.ts
│   │       ├── handler.ts
│   │       └── validator.ts
│   └── layers                                               // layers dir
│       ├── dependencies                                     // dependencies need to run λ function
│       │   └── nodejs
│       │       └── package.json
│       └── shared                                           // shared folder   
│           └── nodejs
│               └── node_modules
│                   ├── models                               // models
│                   │   ├── entites                          // entity folder
│                   │   │   └── index.entity.ts   
│                   │   │   └── detail.entity.ts                // example entity
│                   │   │   └── product.entity.ts                // example entity
                    |   ├── repositories                          // repositores folder
│                   │   │   └── detail.repositories.ts   
│                   │   │   └── detail.repositories.ts                // example repositories
│                   │   │   └── index.ts                // example repositories
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
