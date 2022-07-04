# Node Simple Delay Server

A simple server to delay a successful response.

It should handle any request sent to it and return a successful response for each one.

## How to run

Run:

```
npm i
APP_PORT=3000 DELAY=6000 npm start
```
Environment variables:

* APP_PORT: The port where the app will listen
* DELAY:    The delay, in milis, that will be applied to each request.
