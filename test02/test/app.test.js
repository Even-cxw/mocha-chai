var expact = require('chai').expect;
var app = require('../app.js');
describe('测试加法', function() {
  it('1+1=2', function() {
    expact(app.sumVal(1,1)).to.be.equal(2);
  })
})