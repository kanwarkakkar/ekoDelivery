const expect = require('chai').expect
import { PossibleRoutes } from '../../server/delivery/possibleRoutes'

describe('Case 2 : Calculate number of possible delivery route from one Town to another Town', () => {
    it('should return 4 as possible routes from E to D with max stops 4', () => {


        const possibleRoutesObject = {
            fromTown: 'E',
            toTown: 'D',
            maxStops: 4,
            sameRoute: false,
        }
        const expectedRoutes = 4
        const inputGraph= 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(possibleRoutesObject)


        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 5 as possible routes from E to E with unlimited stops', () => {


        const possibleRoutesObject = {
            fromTown: 'E',
            toTown: 'E',
            maxStops: Number.MAX_SAFE_INTEGER,
            sameRoute: false,

        }
        const expectedRoutes= 5
        const inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(possibleRoutesObject)

        expect(expectedRoutes).to.be.equal(actualRoutes);
    });
    it('should return 0 as possible routes from A to nothing with infinite stops', () => {

        const possibleRoutesObject = {
            fromTown: 'E',
            toTown: '',
            maxStops: Number.MAX_SAFE_INTEGER,
            sameRoute: false
        }
        const  expectedRoutes =0
        const inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(possibleRoutesObject)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 1 as possible routes from A to F with max stops 4', () => {


        const possibleRoutesObject = {
            fromTown: 'A',
            toTown: 'F',
            maxStops: 4,
            sameRoute: false
        }

        const expectedRoutes = 1;
        const inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(possibleRoutesObject)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 0 as possible routes from F to X with max stops 4', () => {


        const possibleRoutesObject = {
            fromTown: 'F',
            toTown: 'X',
            maxStops: 4,
            sameRoute: false
        }

        const  expectedRoutes = 0
        const inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(possibleRoutesObject)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 0 as possible routes from X to F with max stops 4', () => {

        const possibleRoutesObject = {
            fromTown: 'F',
            toTown: 'X',
            maxStops: 4,
            sameRoute: false
        }

        const expectedRoutes = 0
        const inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(possibleRoutesObject)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

    it('should return 29 as possible routes from E to E with max delivery cost 20', () => {

        const possibleRoutesObject = {
            fromTown: 'E',
            toTown: 'E',
            maxStops: Number.MAX_SAFE_INTEGER,
            sameRoute: true,
            maxDeliveryCost: 20,
        }
        const  expectedRoutes = 29
        const inputGraph = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1'
        const pR = new PossibleRoutes(inputGraph);

        const actualRoutes = pR.findNumberPossibleRoutes(possibleRoutesObject)
        expect(expectedRoutes).to.be.equal(actualRoutes);
    });

});

