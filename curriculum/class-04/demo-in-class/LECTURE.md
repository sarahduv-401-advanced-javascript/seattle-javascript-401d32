# Class 04

## Data Modeling

### What is data modeling?
  - Taking real world data and finding a correlation in a computer language.
    - Objects: Representing multiple types of differing data.
    - Arrays: Representing similar types of data.
    - String: Great for representing organic language.
    - Number: Representing things that require arithmetic operations.
    - Boolean: Things with binary state.

- Starts conceptually => stated logic
- The output of data modeling which is known as a schema.

### Core behaviors of modeling
  - 4 behaviors of our data:
    - Create
    - Read
    - Update
    - Delete

### Interfacing with our data
  - What is our API (application programming interface).
  - The specific means in which data models interact with our persistance layer.
    - SQL DB, mongoDB, ect.
  - Normalization and validation
    - Shaping data so that it's consistant and scalable, and knowing when to update or remove stale data.

Interface:
```js
let categories = new Category();

categories.create({name: 'Tarzan'}); // create
categories.get(); // read
categories.update(1, {name: 'Alladin'}) ;// update
categories.delete(1); // delete

```

Our persistance layer:
```js
class categories {
  constructor(schema) {
    this.schema = schema;
    this.data = [];
  }

  // our methods would go below

  create();
  get();
  update();
  delete();
}

```