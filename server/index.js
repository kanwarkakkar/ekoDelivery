import {DeliveryCost} from './delivery/deliveryCost'
import {PossibleRoutes} from './delivery/possibleRoutes'
import {EKonomicalDelivery} from './delivery/ekonomicalDelivery'

const fromTown = 'E'
const endTown = 'D'
const maxStops = Number.MAX_SAFE_INTEGER

const sameRouteTwice = true
const maxDeliveryCost = Number.MAX_SAFE_INTEGER
let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
let pR = new PossibleRoutes(inputGraph);

console.log(pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice,maxDeliveryCost))

export {
    DeliveryCost,
    PossibleRoutes,
    EKonomicalDelivery 
}