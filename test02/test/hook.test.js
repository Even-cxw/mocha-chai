var expact = require('chai').expect;
var app = require('../app.js');
// 测试用例在被使用， 才会打印出日志
describe('hook钩子函数', function() {
  before(function() {
    // 在本测试套件的“所有”测试用例之前执行
    console.log('brfore的日志')
  })

  after(function() {
    // 在被测试套件的“所有”测试用例之后执行
    console.log('brfore的日志')
  })

  beforeEach(function() {
    // 在本测试套件的“每个”测试用例之后执行
    console.log('beforeEach的日志')
  })
  
  afterEach(function() {
    // 在本测试套件的“每个”测试用例之后执行
    console.log('afterEach的日志')
  })

  it('第一次', function() {
    expact(app.sumVal(1,2)).to.be.equal(3);
  })
  it('第二次', function() {
    expact(app.sumVal(1,1)).to.be.equal(2);
  })

})
 