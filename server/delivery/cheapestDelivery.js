import {PossibleRoutes } from "../../server/delivery/possibleRoutes";

class CheapDelivery extends PossibleRoutes{

    constructor(inputRoutes){
        super(inputRoutes);
    }

    getCheapestDeliveryRoute(fromTown,toTown){
        return super.getDeliveryRoute(fromTown,toTown,Number.MAX_SAFE_INTEGER,true);
    }

}
export{
    CheapDelivery
}