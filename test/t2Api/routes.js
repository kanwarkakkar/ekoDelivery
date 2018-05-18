import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../server/api/server'
let expect = chai.expect;
let should = chai.should()
chai.use(chaiHttp);

describe('ekoDelivery', () => {

    /*
    * Test the /POST route
    */
    describe('/POST deliveryCost', () => {
        it('it should return 8 as cost with only route input', (done) => {
            let deliveryCostInput = {
                route: "E-A-C-F"
            }
            chai.request(server)
                .post('/eko/deliveryCost')
                .send(deliveryCostInput)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.cost).to.be.equal(8)
                    done();
                });
        });

    });

    describe('/POST deliveryCost', () => {
        it('it should return 8 as cost with graph and route input', (done) => {
            let deliveryCostInput = {
                "inputGraph":"AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1",
                route: "E-A-C-F"
            }
            chai.request(server)
                .post('/eko/deliveryCost')
                .send(deliveryCostInput)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.cost).to.be.equal(8)
                    done();
                });
        });
    });

    describe('/POST possibleRoutes', () => {
        it('should return 4 as possible routes from E to D with max stops 4', (done) => {
            let input = {
                "inputGraph": "AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1",
                "fromTown": "E",
                "toTown": "D",
                "maxStops": 4
            }
            chai.request(server)
                .post('/eko/possibleRoutes')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.possibleRoutes).to.be.equal(4)
                    done();
                });
        });
    });

    describe('/POST possibleRoutes', () => {
        it('should return 9 as possible routes from E to D with no max stops limit', (done) => {
            let input = {
                "fromTown": "E",
                "toTown": "D"
            }
            chai.request(server)
                .post('/eko/possibleRoutes')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.possibleRoutes).to.be.equal(9)
                    done();
                });
        });
    });
   
    describe('/POST possibleRoutes', () => {
        it('should return 29 as possible routes from E to E - covering same route twice - with 20 as max delivery cost - with no max stops limit', (done) => {
            const possibleRoutesObject = {
                fromTown: 'E',
                toTown: 'E',
                sameRoute: true,
                maxDeliveryCost: 20,
            }
            chai.request(server)
                .post('/eko/possibleRoutes')
                .send(possibleRoutesObject)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.possibleRoutes).to.be.equal(29)
                    done();
                });
        });
    });

    describe('/POST cheapestDelivery', () => {
        it('should return 9 as cheapest delivery from E to D with no max stops limit', (done) => {
            let input = {
                "fromTown": "E",
                "toTown": "D"
            }
            chai.request(server)
                .post('/eko/eKonomicalDelivery')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.cheapestDelivery).to.be.equal(9)
                    done();
                });
        });
    });
});