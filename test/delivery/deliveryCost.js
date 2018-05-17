 let expect = require('chai').expect
import {findCostOfDelivery} from '../../server/delivery/deliveryCost'

describe('findCostOfDelivery in a specific route', () => {
    it('should return cost of delivery for route E-A-C-F', function () {

        // 1. ARRANGE
        let route = ('E-A-C-F')
        let expectedCost = 8;
        // 2. ACT
        let actualCost = findCostOfDelivery(route);

        // 3. ASSERT
        expect(actualCost).to.be.equal(expectedCost);
    });

    it('should return cost of delivery for route A-D', function () {

        // 1. ARRANGE
        let route = ('A-D')
        let expectedCost = 10;
        // 2. ACT
        let actualCost = findCostOfDelivery(route);

        // 3. ASSERT
        expect(actualCost).to.be.equal(expectedCost);
    });

    it('should return cost of delivery for  route A-B-E', ()=> {

        // 1. ARRANGE
        let route = ('A-B-E')
        let expectedCost = 4;
        // 2. ACT
        let actualCost = findCostOfDelivery(route);

        // 3. ASSERT
        expect(actualCost).to.be.equal(expectedCost);
    });
    it('should return no such route for A-D-F',  () =>{

        // 1. ARRANGE
        let route = ('A-D-F')
        let expectedCost = 'No Such Route';
        // 2. ACT
        let actualCost = findCostOfDelivery(route);

        // 3. ASSERT
        expect(actualCost).to.be.equal(expectedCost);
    });
    it('should return no such route for A',  ()=> {

        // 1. ARRANGE
        let route = ('A')
        let expectedCost = 'No Such Route';
        // 2. ACT
        let actualCost = findCostOfDelivery(route);

        // 3. ASSERT
        expect(actualCost).to.be.equal(expectedCost);
    });
    it('should return no such route for empty route', ()=> {

        // 1. ARRANGE
        let route = ('')
        let expectedCost = 'No Such Route';
        // 2. ACT
        let actualCost = findCostOfDelivery(route);

        // 3. ASSERT
        expect(actualCost).to.be.equal(expectedCost);
    });
});

