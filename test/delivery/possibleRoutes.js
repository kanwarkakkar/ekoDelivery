const expect = require('chai').expect
import { PossibleRoutes } from '../../server/delivery/possibleRoutes'

describe('Case 2 : findNumberPossibleRoutes from one Town to another Town', () => {
    it('should return number of possible routes from E to D', function () {


        const fromTown = 'E'
        const endTown = 'D'
        const maxStops = 4
        const expectedRoutes = 4;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)


        expect(actualRoutes).to.be.equal(expectedRoutes);
    });

    it('should return number of possible routes from E to E', function () {


        const fromTown = 'E'
        const endTown = 'E'
        const maxStops = Number.MAX_SAFE_INTEGER
        const expectedRoutes = 5;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)

        expect(actualRoutes).to.be.equal(expectedRoutes);
    });
    it('should return number of possible routes from E to nothing', function () {


        const fromTown = 'E'
        const endTown = 'E'
        const maxStops = Number.MAX_SAFE_INTEGER
        const expectedRoutes = 5;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, '', maxStops, sameRouteTwice)

        expect(actualRoutes).to.be.equal(expectedRoutes);
    });


});

