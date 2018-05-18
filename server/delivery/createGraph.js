// Eko Delivery project 
import _ from 'lodash'


// Creating graph of input routes
function createGraph(inputRoutesStr){
    let routesGraph = {}
    const inputRoutes = _.map(inputRoutesStr.split(','),_.trim);
    _.forEach(inputRoutes,(route)=>{
        let fromTown = route.charAt(0).toUpperCase();
        let toTown = route.charAt(1).toUpperCase();
        let cost = parseInt(route.substr(2));
        if (cost !== 0) {
            if (_.has(routesGraph, fromTown)) {
                routesGraph[fromTown].push({ [toTown]: cost });
            } else {
                routesGraph[fromTown] = [{ [toTown]: cost }];
            }
        }
    
    });
    return routesGraph
}


export{
    createGraph
}