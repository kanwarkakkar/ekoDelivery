import _ from 'lodash'
import {routesGraph} from './createGraph'

function findNumberPossibleRoutes(fromTown,toTown,maxStop,sameRoute){
    fromTown = fromTown.toUpperCase();
    toTown = toTown.toUpperCase();
    let routes = routesGraph[fromTown];
    let possibleRoutes =0;
    let path ='';
    function findRoutes(path,currentTown,toTown,maxStop,currentStops){
        path = path + currentTown;
        if(currentTown == toTown){
            possibleRoutes++;
            console.log(path);
            return;
        }
        if(currentStops >= maxStop){
            return;
        }
        currentStops++;
        let towns = routesGraph[currentTown];
        for(let curr of towns ){
            currentTown = Object.keys(curr)[0];
            findRoutes(path,currentTown,toTown,maxStop,currentStops);
        }
    }
    for(let curr of routes ){
        let currentTown = Object.keys(curr)[0];
        findRoutes(path,currentTown,toTown,maxStop,1);
    }
    return possibleRoutes;
}



// Max stop
// Route
// Twice route or not
export{
    findNumberPossibleRoutes
}
//Case 2

