import {PossibleRoutes } from "../../server/delivery/possibleRoutes";

class EKonomicalDelivery extends PossibleRoutes{

    // Calling construtor of Possible Routes for creating graph
    constructor(inputRoutes){
        super(inputRoutes);
    }

    // Finding cheapest delivery in the route
    getCheapestDeliveryRoute(fromTown,toTown,maxStops){

        return super.getDeliveryRoute({fromTown,toTown,maxStops});
    }

}
export{
    EKonomicalDelivery
}