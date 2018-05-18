import express from 'express'

import {PossibleRoutes,EKonomicalDelivery,DeliveryCost} from '../index'
let router = express.Router();

// Testing API
router.get('/eko', (req, res, next) => {

    res.send('API is UP and Running :)')
})

/*
        @parms  {route}                 - delivery route
                {inputGraph}            - input routes between towns
        */
       // API to calculate delivery cost in a route
router.post('/eko/deliveryCost',(req,res,next)=>{
   
    let inputGraph = req.body.inputGraph || 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1';
    let route = req.body.route;
    if (!route)
        res.status(500).send('Please enter valid params e.g inputGraph: AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1 and route:E-A-C-F in json format')
    else {
        let dC = new DeliveryCost(inputGraph);
        let result = dC.findCostOfDelivery(route);
        res.status(200).send({cost:result});
    }
})
        /*
        @parms  {fromTown}              - starting town
                {toTown}                - Destination town
                {inputGraph}            - input routes between towns
        */
       //API to find cheapest delivery in the route
router.post('/eko/eKonomicalDelivery',(req,res,next)=>{
    let inputGraph = req.body.inputGraph || 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1';
    let fromTown = req.body.fromTown;
    let toTown = req.body.toTown
    let maxStops = req.body.maxStops?req.body.maxStops:Number.MAX_SAFE_INTEGER
    
    if (!fromTown || !toTown)
        res.status(500).send('Please enter valid input e.g fromTown:"E", toTown:"D" in json format')
    else {
        
        let cD = new EKonomicalDelivery(inputGraph);
        let result = cD.getCheapestDeliveryRoute(fromTown,toTown,maxStops,false);
        res.status(200).send({cheapestDelivery:result});
    }
})

 /*
        @parms  {fromTown}              - starting town
                {toTown}                - Destination town
                {sameRoute}             - Variable set if same route is allowed twice
                {maxDeliveryCost}       - Upper limit of delivery cost
                {maxStops}              - Upper limit of stops in the route
                {inputGraph}            - input routes between towns
        */
       // To find the number of possible routes
router.post('/eko/possibleRoutes',(req,res,next)=>{
    let inputGraph = req.body.inputGraph || 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1';
    let fromTown = req.body.fromTown;
    let toTown = req.body.toTown
    let maxStops = req.body.maxStops?req.body.maxStops:Number.MAX_SAFE_INTEGER
    
    if (!fromTown || !toTown)
        res.status(500).send('Please enter valid input e.g fromTown:"E", toTown:"D" and maxStops:4 in json format')
    else {
        
        let pR = new PossibleRoutes(inputGraph);
        const possibleRoutesObject = {
            fromTown: fromTown,
            toTown: toTown,
            maxStops: maxStops,
        }
        
        let result = pR.findNumberPossibleRoutes(possibleRoutesObject);
        res.status(200).send({possibleRoutes:result});
    }
})


export default router