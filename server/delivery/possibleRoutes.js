import _ from 'lodash'
import {createGraph} from './createGraph'
import { ADDRGETNETWORKPARAMS } from 'dns';

class PossibleRoutes{
        
        constructor(inputRoutes){
            this.routesGraph = createGraph(inputRoutes)         // Creating graph of input routes
            this.possibleRoutes=0;                              // for storing max number of routes possible
            this.cheapestDelivery = Number.MAX_SAFE_INTEGER;    // for storing cheapest delivery cost
        }

        // Getting route of delivery between two towns
        getDeliveryRoute(deliveryRouteArgs){
            // Finding max number of possible routes
            this.findNumberPossibleRoutes(deliveryRouteArgs);
        
            // If the cheapestDelivery varible does not get assigned- means route does not exist between two towns return 0
            if (this.cheapestDelivery === Number.MAX_SAFE_INTEGER) {
                return 0;
            } else {
                return this.cheapestDelivery;
            }
        }

        // Recursive function to find the possible routes
        /*
        @params {isVisitedNode}     - To keep track of visited nodes while traversal
                {fromTown}          - Starting Town
                {toTown}            - Destination Town
                {maxStops}          - maximum number of stops allowrd
                {currentStops}      - Total number of stops till now
                {aggDeliveryCost}   - Aggregate Delivery Cost
                {currentCost}       - cost of current delivery btw two towns
                {maxDeliveryCost}   - Upper limit of delivery cost
                {sameRoute}         - flag to check if same route is allowed twice or not
        */
        findRoutes(pathC, path, isVisitedNode, fromTown, toTown, maxStops, currentStops, aggDeliveryCost, currentCost, maxDeliveryCost, sameRoute) {

            path = path + fromTown;
            aggDeliveryCost = aggDeliveryCost + currentCost

            // Check if both from and to towns are same.(Destination reached)
            if (fromTown == toTown) {
                path = path.trim();

                this.possibleRoutes++;                  // Increase number of possible routes
                if (aggDeliveryCost <= this.cheapestDelivery) {
                    this.cheapestDelivery = aggDeliveryCost;
                }
                
                // If same route is allowed then do not return - let the program continue
                if (!sameRoute)
                    return;

            }

            // If aggregate cost is greater than upper cost limit return
            if (aggDeliveryCost >= maxDeliveryCost) {
                return
            }

            // If number of stops till now is greater than upper stops limit return
            if (currentStops >= maxStops) {
                return;
            }
            // Increase number of stops till now
            currentStops++;
            
            // Initialization : routeRepeat - using if sameRoute is allowed twice or not 
            let routeRepeat = 1
            
            // If same route is allowed make variable 2.
            if (sameRoute) {
                routeRepeat = 2
            }

            // Fetch the towns linked to fromTown from routesGraph created earlier.
            let towns = this.routesGraph[fromTown];

            // Loop over towns and do recursion.
            for (let curr of towns) {
                let cT = Object.keys(curr)[0];
                let currentCost = curr[cT];
                
                // Marking the route visited based on same route allowed condition
                // Using {1} if same route is not allowed
                // Using {2} if same route is allowed
                if (isVisitedNode[fromTown + cT]) {
                    isVisitedNode[fromTown + cT]++;
                } else {
                    isVisitedNode[fromTown + cT] = 1
                }
                if (!(isVisitedNode[fromTown + cT] > routeRepeat))
                    this.findRoutes(pathC, path, isVisitedNode, cT, toTown, maxStops, currentStops, aggDeliveryCost, currentCost, maxDeliveryCost, sameRoute);

                // Marking route 
                isVisitedNode[fromTown + cT]--;
            }
        }

        /*
        @parms  {fromTown}              - starting town
                {toTown}                - Destination town
                {sameRoute}             - Variable set if same route is allowed twice
                {maxDeliveryCost}       - Upper limit of delivery cost
                {maxStops}              - Upper limit of stops in the route
        */
        findNumberPossibleRoutes(possibleRoutesArgs){
            let fromTown = possibleRoutesArgs.fromTown || '';
            let toTown = possibleRoutesArgs.toTown ||'';
            let sameRoute = possibleRoutesArgs.sameRoute || false;
            let maxDeliveryCost = possibleRoutesArgs.maxDeliveryCost || Number.MAX_SAFE_INTEGER;
            let maxStops = possibleRoutesArgs.maxStops || Number.MAX_SAFE_INTEGER;

            
            this.possibleRoutes=0;
            this.cheapestDelivery = Number.MAX_SAFE_INTEGER;
            
            // Checking is one of the town is empty
            if(fromTown.trim().ength === 0 || toTown.trim().length === 0)
                return 0;
            fromTown = fromTown.toUpperCase();
            toTown = toTown.toUpperCase();

            let routes = this.routesGraph[fromTown];
            let isVisitedNode = [];

            let path=''
            for(let curr of routes ){
                let currentTown = Object.keys(curr)[0];
                let currentStops = 1;
                let dC = curr[currentTown];
                this.findRoutes('', path, isVisitedNode, currentTown, toTown, maxStops, currentStops, dC, 0, maxDeliveryCost, sameRoute);
                isVisitedNode[fromTown+currentTown]--;
            }
            return this.possibleRoutes;
        }
}




export{
    PossibleRoutes
}


