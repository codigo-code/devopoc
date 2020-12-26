import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
// Configure chai
chai.use(chaiHttp);
chai.should();

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('App',()=>{
    describe('GET/persons',()=>{
        it('get list family pig',(done)=>{
            chai.request(app)
            .get('/persons')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                let objPerson = JSON.parse(res.text);
                assert.equal('peppp',objPerson[0].nombre);
                assert.equal('george',objPerson[1].nombre);
                done();
            })
        })
    });
})