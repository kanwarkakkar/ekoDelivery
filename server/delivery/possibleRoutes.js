import _ from 'lodash'
import {createGraph} from './createGraph'

class PossibleRoutes{
        
        constructor(inputRoutes){
            this.routesGraph='';
            this.routesGraph = createGraph(inputRoutes)
            this.possibleRoutes=0;
            this.cheapestDelivery = Number.MAX_SAFE_INTEGER;
        }

        getDeliveryRoute(fromTown,toTown,maxStops,sameRoute){
            this.findNumberPossibleRoutes(fromTown,toTown,maxStops,sameRoute);
            return this.cheapestDelivery;
        }

        findRoutes(path,isVisitedNode,currentTown,toTown,maxStop,currentStops,deliveryCost,currentCost){
            path = path + currentTown;
            deliveryCost = deliveryCost +  currentCost

            if(currentTown == toTown){
                this.possibleRoutes++;
                if(deliveryCost <= this.cheapestDelivery ){
                    this.cheapestDelivery = deliveryCost
                }
                return;
            }
            if(currentStops >= maxStop){
                return;
            }
            currentStops++;
            isVisitedNode[currentTown] = true;
            let towns = this.routesGraph[currentTown];
            for(let curr of towns ){
                currentTown = Object.keys(curr)[0];
                let currentCost = curr[currentTown];
                if(!isVisitedNode[currentTown])
                    this.findRoutes(path,isVisitedNode,currentTown,toTown,maxStop,currentStops,deliveryCost,currentCost);
                isVisitedNode[currentTown] = false;
            }
            //isVisitedNode[currentTown] = false;
        }

        findNumberPossibleRoutes(fromTown,toTown,maxStop,sameRoute){
            this.possibleRoutes=0;
            this.cheapestDelivery = Number.MAX_SAFE_INTEGER;
            fromTown = fromTown.toUpperCase();
            toTown = toTown.toUpperCase();

            // Checking is one of the town is empty
            if(fromTown.trim().ength === 0 || toTown.trim().length === 0)
                return 0;

            let routes = this.routesGraph[fromTown];
            let isVisitedNode = []
            let path=''
            for(let curr of routes ){
                let currentTown = Object.keys(curr)[0];
                let currentStops = 1;
                let dC = curr[currentTown];
                this.findRoutes(path,isVisitedNode,currentTown,toTown,maxStop,currentStops,dC,0);
                isVisitedNode[currentTown] = false;
            }
            return this.possibleRoutes;
        }
}




export{
    PossibleRoutes
}


