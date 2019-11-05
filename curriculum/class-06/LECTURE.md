HTTP & REST

WRRC --> web request response cycle

RR is basically HTTP widdled down.

HTTP --> the language machines use to communicate over the web.
  - Starts: verb (get, post, patch, delete)
  - includes a location: localhost:3000 /apps /categories / ip address
  - always has a request and a response

Rest --> Representational state transfer
  - A client (browser) wants some info, in going to request
  - A design pattern that utilizes http

RESTfulness
  - our HTTP verbs represent what action is being performed.
    - get (always for fetching)
    - post (always creating)
    - patch/put (change an item / replace an item)
    - delete (always removing an item)
  - our location is always going to include a resource.
    - always have something like --> categories --> /categories
    - if we want to do sepcific stuff to the resource, add a param --> categories/:id or categories/:name
    - for every resource we represent the functionality performed with a verb plus resource

Repreenting state
  - our back ends are stateless
    - all they know is "I need to handle this one request"
    - return appropriate requested info
  - our client is responsible for state
    - it traditionally saves this to its url

JSON server
  - a light weight, json powered REST HTTP server

npm init -y
npm install --save json-server
vim to open in bash
json-server db.json --> this will start a little server --> localhost:3000/products
json-server --watch db.json --> will open in browser, watch will restart the server
localhost:3000/categories/?test=mysweetcategory --> will go to test inside categories

under scripts add
"start": "node server.js",
"dev": "json-server --id=_id --watch db.json --routes routes.json"

export --> download api --> json resolved
openapi.json, move to project and name swagger.json
put swagger into docs directory

check boxes / create api definition / export / download api / json resolved




