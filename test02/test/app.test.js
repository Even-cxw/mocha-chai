// only skip 的使用
var expact = require('chai').expect;
var app = require('../app.js');
describe('only skip测试', function() {
  // it.only  it.skip
  it('第一个', function() {
    expact(app.sumVal(1,1)).to.be.equal(2);
  })
  it('第二个', function() {
    expact(app.sumVal(1,2)).to.be.equal(3);
  })
  it('第三个', function() {
    expact(app.sumVal(1,2)).to.be.equal(3);
  })
})