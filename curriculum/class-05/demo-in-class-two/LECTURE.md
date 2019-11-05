# Class 05
## Mongo and noSQL

SQL vs noSQL

- Pro's and con's of these two database types.

- SQL
  - SQL is relational: connects tables with other tables.
  - One universal language that all tables / db's share.
  - But it can be restrictive when we need things to change.
    - It requires predetermined tables, and fields.
    - This lets us do powerful things like JOINs.

- noSQL
  - noSQL does not have a universal language, but is more dynamic.
    - We can alter values and add properties to collections (what mongo considers a table) much more easily.
    - We have to be careful about corrupting previous values.

Mongo
  - Our noSQL flavor:
    - Mongoose: ORM (object relational mapping)
    - Use DBname to switch db's or create it
    - db.collections.find({text: "message"})



LAB 05
get will use mongoose .find
create-> save
update ->
delete ->
create a class for each model
use supergoose for tests
repeat the process for products

part 2
create a single model that can take in any class and use ORM methods for that class


