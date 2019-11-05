# Class 12

## Oauth

Auth as a service

- **Oauth has a standard:**
  1) You have to create an "app" on the Oauth proivder's system.
  2) Redirect URI - A URI to your own service.
  3) Client ID - A handshake credential that identifies your application as one that is authorized to use the auth providers Oauth.
  4) Client Secret - The server side credential that really makes sure your application is who you say you are.
  5) Scopes - What information does your app need from the auth service.

- **Four roles:**
  1) Client: The front end that attemps to make use of user info.
  2) Authorization Server: This is the Oauth services server.
    - URLs:
      - One for sending a request for GRANT CODE
      - One for sending requests for Auth Token
      - Possibly one more for making a request for user info.
  3) Resources Server: This is the applications server that has protected resources.
  4) The User: This is the owner of both the auth servers account info, and the owner of the resource servers info.
    - The person who wants access to something.

The client sends the following:
- <a> to the auth server
- href has a redirect URL

The auth server sends back to the client:
- (check time of 1:37 for diagram)
- client id to where the redirect url was
- surrender creds / sign in form / will contain a code
- when you click the "ok" button, there is a series of things that happen
  - Does your client / redirect url check out?
  - Does the code checkout? req.param.code is sent to the resource server
  - If it checks out a token is requested frmm the auth server
  - The token is sent back to the resource server
  - Once you have the token, you can make any request you want per the scopes
  - Any incoming user info --> new User().save()

1) Start on the <a> tag on the client. This is our request for grant code.
2) Auth server goes to the resource server and says, sure, here is your code at your redirect.
3) We have received code at the resource server, and we will make a request for the token from the auth server. This includes client secret which has to be attached to our request. request.token
4) If this passes, the auth server sends back the response.token to the resource server. (this is the end of the oauth handshake).
5) Request on user behalf -> Give us user info


