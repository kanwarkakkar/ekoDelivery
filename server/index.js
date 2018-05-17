import {findCostOfDelivery} from './delivery/deliveryCost'
import {findNumberPossibleRoutes} from './delivery/possibleRoutes'
//Case 1 
console.log('findCostOfDelivery',findCostOfDelivery('E-A-C-F'));
//Case 2
console.log('findNumberPossibleRoutes',findNumberPossibleRoutes('E','E',10,false));
