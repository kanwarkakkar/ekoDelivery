const expect = require('chai').expect
import { EKonomicalDelivery } from '../../server/delivery/ekonomicalDelivery'

describe('Case 3 : Cheapest Delivery Cost from one Town to another Town', () => {
    it('should return 9 as cheapeat delivery cost from E to D',  () => {

        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const fromTown = 'E'
        const endTown = 'D'
        const expectedCost = 9;
        let cD = new EKonomicalDelivery(inputGraph);

        const actualCost = cD.getCheapestDeliveryRoute(fromTown, endTown)


        expect(expectedCost).to.be.equal(actualCost);
    });

    it('should return 6 as cheapeat delivery cost from E to D',  () => {

        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const fromTown = 'E'
        const endTown = 'E'
        const expectedCost = 6;
        let cD = new EKonomicalDelivery(inputGraph);

        const actualCost = cD.getCheapestDeliveryRoute(fromTown, endTown)


        expect(expectedCost).to.be.equal(actualCost);
    });
    
    it('should return 0 as cheapeat delivery cost from E to X',  () => {

        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const fromTown = 'E'
        const endTown = 'X'
        const expectedCost = new Error('Too Much Recursion');
        let cD = new EKonomicalDelivery(inputGraph);

        const actualCost = cD.getCheapestDeliveryRoute(fromTown, endTown)


        expect.fail
    });
});

