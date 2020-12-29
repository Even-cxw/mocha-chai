var expect = chai.expect;
// import {sumVal} from './app.js'
console.log('test文件-sumVal', window.sumVal);
describe('浏览器测试模块', function() {
  it('测试一', function() {
    expect(sumVal(1,2)).to.be.equal(3);
  })
})