// Eko Delivery project 
import _ from 'lodash'
const inputRoutesStr = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
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

export{
    routesGraph
}