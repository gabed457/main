const chai = require('chai');
chai.should();
describe('Reverse String', () => {
    it('Calling reverse() should return a reversed string', (done) => {
        const reverse = require('./reverseAString').reverse;
        let str = 'abc', desired = 'cba';
        desired.should.eql(reverse(str));
        done();
    });
    it('Calling reverse() should return a reversed empty string', (done) => {
        const reverse = require('./reverseAString').reverse;
        let str = '', desired = '';
        desired.should.eql(reverse(str));
        done();
    });
    it('Calling reverse() should return a reversed empty string', (done) => {
        const reverse = require('./reverseAString').reverse;
        let str = 'a', desired = 'a';
        desired.should.eql(reverse(str));
        done();
    });
});
