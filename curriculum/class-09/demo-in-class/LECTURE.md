### Class - 09

### Middelware

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

### What are some examples of middleware?

- app.use(cors());
- app.use(morgan('dev'));

- Cors
  - Cross origin resource sharing.
  - If you are at www.myawesomesite.com --> make a request --> api.superradservice.come = difference origins.
  - Cors lets us grab resources that are hosted at different origins.

- Morgan
 - This is used as a logger, it will log any requests.

### Mongo DB

- You can add the following to scripts:
  - "startdb": "mkdir -p db && mongod --dbpath db"


Sources:
https://mongoosejs.com/docs/middleware.html
https://expressjs.com/en/4x/api.html#router.param
