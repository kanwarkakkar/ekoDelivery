import {PossibleRoutes } from "../../server/delivery/possibleRoutes";

class EKonomicalDelivery extends PossibleRoutes{

    constructor(inputRoutes){
        super(inputRoutes);
    }

    getCheapestDeliveryRoute(fromTown,toTown,maxStops){
        return super.getDeliveryRoute(fromTown,toTown,maxStops,true);
    }

}
export{
    EKonomicalDelivery
}