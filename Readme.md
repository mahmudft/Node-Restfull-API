# Pure Node.js Restfull API(Without Express.js)

> It is a pure Node Api, which uses Mongodb as a database .


# For Frontend Consumption
## For Pagination it is better save results in an array (in React it is a state) and split it for your needs 

| Routes  | Method |  INFO     |
| ------------- |:-------------:| :-------------:|
| /goods      | GET     | Send an Empty body to this route and this route will return a list of goods     |
| /goods      | POST    |   **Only for test purposes -- Send an object and it will return the insterted item |
| /goods/:id      | GET     | send id of an item and it will return full properties of it     |

## Docker Guide

```
docker-compose up
```