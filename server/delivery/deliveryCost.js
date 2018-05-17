import _ from 'lodash'
import {routesGraph} from './createGraph'

function findCostOfDelivery(deliveryRoute){

    let deliveryTowns = _.map(deliveryRoute.split('-'),_.trim);
    let costOfDelivery =0;
    let noSuchRoute = 'No Such Route';
    if(deliveryTowns.length <=1){
        return noSuchRoute;
    }

    for(let index = 0; index < deliveryTowns.length -1 ;index++){
        let town1 = deliveryTowns[index].toUpperCase();
        let town2 = deliveryTowns[index+1].toUpperCase();

        //Checking if route is there between two towns
        if( _.hasIn(routesGraph,town1)){
            let nestedRoute = _.find(routesGraph[town1],town2);
            if(nestedRoute){
                costOfDelivery = costOfDelivery + _.values(nestedRoute)[0];
            }else{
                return noSuchRoute;
            }
        }else{
            return noSuchRoute;
        }
        
    }
    return costOfDelivery;
}

//Case 1 
console.log(findCostOfDelivery('E-A-C-F'));