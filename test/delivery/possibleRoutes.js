const expect = require('chai').expect
import { PossibleRoutes } from '../../server/delivery/possibleRoutes'

describe('Case 2 : findNumberPossibleRoutes from one Town to another Town', () => {
    it('should return 4 as possible routes from E to D with max stops 4',  () => {


        const fromTown = 'E'
        const endTown = 'D'
        const maxStops = 4
        const expectedRoutes = 4;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)


        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 5 as possible routes from E to E with infinite stops',  () => {


        const fromTown = 'E'
        const endTown = 'E'
        const maxStops = Number.MAX_SAFE_INTEGER
        const expectedRoutes = 5;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)

        expect(expectedRoutes).to.be.equal(actualRoutes);
    });
    it('should return 0 as possible routes from A to nothing with infinite stops',  () => {


        const fromTown = 'E'
        const endTown = ''
        const maxStops = Number.MAX_SAFE_INTEGER
        const expectedRoutes = 0;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)
        
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });
    
    it('should return 1 as possible routes from A to F with max stops 4',  () => {


        const fromTown = 'A'
        const endTown = 'F'
        const maxStops = 4
        const expectedRoutes = 1;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 0 as possible routes from F to X with max stops 4',  () => {


        const fromTown = 'F'
        const endTown = 'X'
        const maxStops = 4
        const expectedRoutes = 0;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 0 as possible routes from X to F with max stops 4',  () => {


        const fromTown = 'F'
        const endTown = 'X'
        const maxStops = 4
        const expectedRoutes = 0;
        const sameRouteTwice = false
        let inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        let pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(fromTown, endTown, maxStops, sameRouteTwice)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

});

