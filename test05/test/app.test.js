var expect = require('chai').expect;
var app = require('../src/app.js');

// 测试套件
describe('app加法测试', function() {
  // 测试用列
  it('1 + 1', function() {
    expect(app.add(1, 1)).to.be.equal(2);
  })
})