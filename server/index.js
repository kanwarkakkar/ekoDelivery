import {DeliveryCost} from './delivery/deliveryCost'
import {PossibleRoutes} from './delivery/possibleRoutes'



let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'

let cD  = new DeliveryCost(inputGraph);
console.log('findCostOfDelivery',cD.findCostOfDelivery('E-A-C-F'));


let pR = new PossibleRoutes(inputGraph);
console.log('findNumberPossibleRoutes',pR.findNumberPossibleRoutes('E','E',10,false));
