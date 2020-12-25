// only skip 的使用
var expact = require('chai').expect;
var app = require('../app.js');
describe('only skip', function() {
  it.only('第一个', function() {
    expact(app.sumVal(1,1)).to.be.equal(2);
  })
  it.skip('第二个', function() {
    expact(app.sumVal(1,2)).to.be.equal(3);
  })
  it.only('第三个', function() {
    expact(app.sumVal(1,2)).to.be.equal(3);
  })
})