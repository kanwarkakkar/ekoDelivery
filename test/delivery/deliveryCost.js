 let expect = require('chai').expect
import {DeliveryCost} from '../../server/delivery/deliveryCost'

describe('Case 1 : findCostOfDelivery in a specific route', () => {
    it('should return cost of delivery for route E-A-C-F', function () {

     
        let route = ('E-A-C-F')
        let expectedCost = 8;
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let cD  = new DeliveryCost(inputGraph);
        let actualCost = cD.findCostOfDelivery(route);
        expect(actualCost).to.be.equal(expectedCost);
    });

    it('should return cost of delivery for route A-D', function () {

        
        let route = ('A-D')
        let expectedCost = 10;
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let cD  = new DeliveryCost(inputGraph);
        let actualCost = cD.findCostOfDelivery(route);
        expect(actualCost).to.be.equal(expectedCost);
    });

    it('should return cost of delivery for  route A-B-E', ()=> {

        // 1. ARRANGE
        let route = ('A-B-E')
        let expectedCost = 4;
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let cD  = new DeliveryCost(inputGraph);
        let actualCost = cD.findCostOfDelivery(route);
        expect(actualCost).to.be.equal(expectedCost);
    });
    it('should return no such route for A-D-F',  () =>{

        
        let route = ('A-D-F')
        let expectedCost = 'No Such Route';
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let cD  = new DeliveryCost(inputGraph);
        let actualCost = cD.findCostOfDelivery(route);

        expect(actualCost).to.be.equal(expectedCost);
    });
    it('should return no such route for A',  ()=> {

        
        let route = ('A')
        let expectedCost = 'No Such Route';
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let cD  = new DeliveryCost(inputGraph);
        let actualCost = cD.findCostOfDelivery(route);
        expect(actualCost).to.be.equal(expectedCost);
    });
    it('should return no such route for empty route', ()=> {

        
        let route = ('')
        let expectedCost = 'No Such Route';
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let cD  = new DeliveryCost(inputGraph);
        let actualCost = cD.findCostOfDelivery(route);
        expect(actualCost).to.be.equal(expectedCost);
    });
});

