# Class 14

## Authorization

### What do we have so far..
- Authentication: As a user, "who are you?"
  - **Basic Auth:**
    - Signup: Give us information / credentials -> take those credentials and create a user from those credentials, and send back a token.
    - Signin: encoded username/email plus their password.
      - Step 1: Decode their credentials.
      - Step 2: Query the DB to see if this user exists.
      - Step 3: If the user is valid, we compare their password.
      - Step 4: If their password is valid, we send them their token.
  - **Oauth:**
    - Uses a third party for authentication.
      - Step 1: The user has to make a request to use the service.
      - Step 2: The user gives the auth service their credentials (i.e. google login credentials).
      - Step 3: The auth service sends an authorization code to the resource server.
      - Step 4: Ping the auth service back, asking for a token.
      - Step 5: Auth service gives us our token -> resource server requests user info with token.
        - Substep: Resource server requests the users information with the token.
  - **Bearer:**
    - Instead of strings, this uses token authentication.
      - Step 1: The user makes a request using their token.
      - Step 2: If the token is valid, their requested resources are sent.


#### Authorization: Do you have permission?
- Global authorization standard.
  - Maybe we don't want **all** of our users to do everything.
  - So, we will want to segregrate our users.
  - Example: We can do this by making a list of roles and a list of capabilities.
    - Roles: admin, user, employee, ect.
    - Capabilities: read, update, create, delete
      - Regarding the front end capabilities, maybe we don't want them to click on buttons or seeing specific forms or menus. We will need to be able to conditionally render items. Ultimately, providing the user with an experience that is tailored around their capabilities tied to their token.
  - What can we encode in our token data?
    - We can encode roles and map those roles to a list a capabilities.