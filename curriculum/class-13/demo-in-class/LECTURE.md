# Class 13

## Bearer Authentication

* Basic authentication: string based
* Bearer authentication: token based

- String based authentication receives a string, and our system has to decode the string.
- Token based authentixation receives a token, and our system needs to decode the token.

1) (basic) Our auth process begins with signup and signing: this is basic.
  - We have to start with basic so we can turn strings into tokens
2) (bearer) Once our user has a token, we need to verify the token and pull out any user data.
  - Token will contain an ID tied to the user, as well as any info required for authorization.


- Athentication - Am I who I say I am?
- Athorization - Can I do what I am requesting to do?

### Json Web Token
- A web standard that encodes json into a string.
- It protects data passed between two parties.
- Takes a private and/or public key, and uses this as a way to decode your information.
- No persisting of token data, only user info hidden behind an encoding.