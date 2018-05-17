import {DeliveryCost} from './delivery/deliveryCost'
import {PossibleRoutes} from './delivery/possibleRoutes'
import {CheapDelivery} from './delivery/cheapestDelivery'

let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'

// let dC  = new DeliveryCost(inputGraph);
// console.log('findCostOfDelivery',dC.findCostOfDelivery('E-A-C-F'));


let pR = new PossibleRoutes(inputGraph);
let maxStops = 4;
//let maxStops =Number.MAX_SAFE_INTEGER
console.log('findNumberPossibleRoutes',pR.findNumberPossibleRoutes('E','B',maxStops,false));


// let cD = new CheapDelivery(inputGraph);
// console.log('getCheapestDeliveryRoute',cD.getCheapestDeliveryRoute('E','D'));