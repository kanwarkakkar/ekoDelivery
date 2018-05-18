import _ from 'lodash'
import {createGraph} from './createGraph'

class PossibleRoutes{
        
        constructor(inputRoutes){
            this.routesGraph='';
            this.routesGraph = createGraph(inputRoutes)
            this.possibleRoutes=0;
            this.cheapestDelivery = Number.MAX_SAFE_INTEGER;
            this.pathCovered = []
        }

        getDeliveryRoute(fromTown,toTown,maxStops){
            this.findNumberPossibleRoutes(fromTown,toTown,maxStops,false);
            if (this.cheapestDelivery === Number.MAX_SAFE_INTEGER) {

                return 0;
            } else {
                return this.cheapestDelivery;
            }
        }

        findRoutes(pathC,path,isVisitedNode,currentTown,toTown,maxStop,currentStops,deliveryCost,currentCost,maxDeliveryCost,sameRoute){
            
            path = path + currentTown;
            
            deliveryCost = deliveryCost +  currentCost

            if(currentTown == toTown){
                path = path.trim()
                console.log(path)
                this.possibleRoutes++
                if (deliveryCost <= this.cheapestDelivery) {
                    this.cheapestDelivery = deliveryCost
                }

                if (!sameRoute)
                    return;

            }
            if(deliveryCost >= maxDeliveryCost){
                return
            }
            if(currentStops >= maxStop){
                return;
            }
            currentStops++;
    
            let towns = this.routesGraph[currentTown];
            for(let curr of towns ){
                let cT = Object.keys(curr)[0];
                let currentCost = curr[cT];
                if(isVisitedNode[currentTown+cT]){
                    isVisitedNode[currentTown+cT]++;
                }else{
                    isVisitedNode[currentTown+cT]=1
                }
                if(!(isVisitedNode[currentTown+cT] >1))
                    this.findRoutes(pathC,path,isVisitedNode,cT,toTown,maxStop,currentStops,deliveryCost,currentCost,maxDeliveryCost,sameRoute);
                
                isVisitedNode[currentTown+cT]--;
            }
        }

        findNumberPossibleRoutes(fromTown,toTown,maxStop,sameRoute,maxDeliveryCost){
            this.possibleRoutes=0;
            this.cheapestDelivery = Number.MAX_SAFE_INTEGER;
            fromTown = fromTown.toUpperCase();
            toTown = toTown.toUpperCase();
            this.pathCovered = []
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
                this.findRoutes('', path, isVisitedNode, currentTown, toTown, maxStop, currentStops, dC, 0, maxDeliveryCost, sameRoute);
                isVisitedNode[fromTown+currentTown]--;
            }
            return this.possibleRoutes;
        }
}




export{
    PossibleRoutes
}


