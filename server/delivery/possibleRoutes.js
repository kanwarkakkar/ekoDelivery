import _ from 'lodash'
import {createGraph} from './createGraph'

class PossibleRoutes{
        
        constructor(inputRoutes){
            this.routesGraph='';
            this.routesGraph = createGraph(inputRoutes)
            this.possibleRoutes=0;
        }

        findRoutes(path,currentTown,toTown,maxStop,currentStops){
            path = path + currentTown;
            if(currentTown == toTown){
                this.possibleRoutes++;
                return;
            }
            if(currentStops >= maxStop){
                return;
            }
            currentStops++;
            let towns = this.routesGraph[currentTown];
            for(let curr of towns ){
                currentTown = Object.keys(curr)[0];
                this.findRoutes(path,currentTown,toTown,maxStop,currentStops);
            }
        }

        findNumberPossibleRoutes(fromTown,toTown,maxStop,sameRoute){
            this.possibleRoutes=0;
            fromTown = fromTown.toUpperCase();
            toTown = toTown.toUpperCase();
            let routes = this.routesGraph[fromTown];
            let path ='';
            for(let curr of routes ){
                let currentTown = Object.keys(curr)[0];
                this.findRoutes(path,currentTown,toTown,maxStop,1);
            }
            return this.possibleRoutes;
        }
}




export{
    PossibleRoutes
}


