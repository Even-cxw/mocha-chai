var expect = require('chai').expect;
var app = require('./app.js');
describe('浏览器测试模块', function() {
  it('测试一', function() {
    expect(app.sumVal(1,2)).to.be.equal(3);
  })
})