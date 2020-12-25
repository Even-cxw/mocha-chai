var calc = require('../calc.js');
var expect = require('chai').expect;
//测试套件
describe('加法单元测试', function() {
  it('1+1=2', function() {
    expect(calc.subVal(1,2)).to.be.equal(2);
  })
})