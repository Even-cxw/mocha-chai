var expect = require('chai').expect;
var asyn = require('../asyn.js');
/**
 * @desc node-fetch的优点
 * 1. 并不返回JSON数据， 返回的是方法集合，可以自己转换成想要的格式
 *  - res.json() 转JSON
 *  - res.text() 转文本
 *  - res.blob() 转blob对象
 */
var fetch = require('node-fetch');

// 异步测试默认超时时间为2秒
describe('异步测试风格一', function() {
  it('测试一', function(done) {
    // expect(asyn.sumVal(1,2)).to.be.equal(3);
    var f = setTimeout(function() {
      console.log('执行了异步函数')
      done()
    }, 1000)
    expect(f).to.be.ok;
  })
})

// 在不使用done的时候，不可以写上去；不然会报错
// 设置超时时间 this.timeout(10000);
describe('异步测试风格二',function() {
  // this.timeout(10000);
  it.only('测试二',async function() {
    var json = await fetch('https://api.github.com')
    .then(function(res) {
      return res.json()
    })
    expect(json).to.be.an('object');
  })
})