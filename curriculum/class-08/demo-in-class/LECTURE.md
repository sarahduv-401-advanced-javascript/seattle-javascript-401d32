# Class 08

## Express Routing and Param Middleware

- Previous labs used one file to contain all of our server fnctionality.
  - Small amount of modularization with the routes, but now we want to define all of our touring in a seperate file.
  - Welcome to the express.Router()!!!
  - If we are working on a project with a lot of functionality, it helps to have the routing logic in it's own file.

## New Middleware

- Cors
  - Cross origin resource sharing.
  - If you are at www.myawesomesite.com --> make a request --> api.superradservice.come = difference origins.
  - Cors lets us grab resources that are hosted at different origins.

- Morgan
  - This is used as a logger, it will log any requests.