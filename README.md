# Eko Delivery App


Eko Delivery is an innovative delivery service where customers define the delivery route by themselves.

### Tech


*  Node.js - evented I/O for the backend
*  Express - node.js network app framework
*  mocha - test framework
*  chai - assertion lib


### Installation

Project is tested on node v8.6.0

Install the dependencies and devDependencies 
```sh
$ cd ekoDelivery
$ npm install 
```

For running test cases ...
```sh
$ npm test
```

For Sarting the server on port 8080.
```sh
$ npm start
```





Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://localhost:8080/eko
```

### Using API

### Case 1 : Cost of DELIVERY
----
  Returns delivery cost of the given route.

* **URL**

  /eko/deliverycost

* **Method:**

  `POST`
  

* **Body**
`{   
     inputGraph: 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1',
     route: 'E-A-C-F' 
 }`
* **Optional:**
`inputGraph` will take default input graph
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"cost": 8}`


* **Sample Call in Node.js:**

  ```javascript
    var request = require("request");
    var options = { method: 'POST',
    url: 'http://localhost:8080/eko/deliverycost',
    body: 
    { inputGraph: 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1',route: 'E-A-C-F' },json: true};
     request(options, function (error, response, body) {
     if (error) throw new Error(error);
     console.log(body);
     });
     ```
  
 ### Case 2 : Number of possible deliveries
----

* **URL**

  /eko/possibleRoutes

* **Method:**

  `POST`
  

* **Body**
`{
"inputGraph":"AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1",
"fromTown":"E",
"toTown":"D",
"maxStops":4
}`

 * **Optional:**
`inputGraph` - will take default sample graph
`maxStops` -  will make unlimited stops
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "possibleRoutes": 4
}`


* **Sample Call:**

  ```javascript
    var request = require("request");
    var options = { method: 'POST',
    url: 'http://localhost:8080/eko/possibleRoutes',
    body: { fromTown: 'E',toTown: 'D',maxStops: 4 },json: true };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    });
  ```
### Case 2 (BONUS) :  Number of possible routes if using same route again
----

* **URL**

  /eko/possibleRoutes

* **Method:**

  `POST`
  

* **Body**
`{
"inputGraph":"AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1",
"fromTown":"E",
"toTown":"E",
sameRoute: true,
maxDeliveryCost: 20
}`

 * **Optional:**
`inputGraph` - will take default sample graph
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "possibleRoutes": 29
}`


* **Sample Call:**

  ```javascript
    var request = require("request");
    var options = { method: 'POST',
    url: 'http://localhost:8080/eko/possibleRoutes',
    body: 
    { inputGraph: 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1',fromTown: 'E',toTown: 'E',sameRoute: true,maxDeliveryCost: 20},
    json: true };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    });
  ```

### Case 3 : Cheapest delivery between two towns
----

* **URL**

  /eko/ekonomicalDelivery

* **Method:**

  `POST`
  

* **Body**
`{
"inputGraph":"AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1",
"fromTown":"E",
"toTown":"D",
"maxStops":4
}`

 * **Optional:**
`inputGraph` - will take default sample graph
`maxStops` -  will make unlimited stops
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "cheapestDelivery": 9
}`


* **Sample Call:**

  ```javascript
    var request = require("request");
    var options = { method: 'POST',
    url: 'http://localhost:8080/eko/ekonomicalDelivery',
    body: { fromTown: 'E', toTown: 'D' },
    json: true };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    });

  ```
### Todos
 - Improve routing algo
 - Add redis, create graph in redis , will help while scaling
 - Write MORE Tests

