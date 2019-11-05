# Class 10

## GraphQL
  - This is an alternative to REST:
    - While REST has a huge list of endpoints and methods, GraphQL says:
      - Let's just use one endpoint and one method, and let the user specifiy exactly what they want.
      - i.e. --> it may have a ton a data, but you only want a specific subset of data.
      - GraphQL functions by letting developers specify a Schema, which has a list of queries that can be performed on data and their respective resolvers:
        - Resolver --> whatever operations are needed to fulfill a query.

```js
type Query{
  people: [peopleTypes]
}

{
  people: () => people.find();
}
```



## Mongoose Virtuals
  - categories.virtual
  - A virtual lets us populate a virtual field that doesn't formally exist on our schema.
  - We can combine lifecycle hooks to take fields that match on seperate models (the instance of the schema) and associate them. This would be the equivalent of a join in SQL.
