// only skip 的使用
// var expact = require('chai').expect;
import {expact} from 'chai';
import {add} from '../src/app.js';
describe('only skip测试', function() {
  // it.only  it.skip
  it('第一个', function() {
    expact(add(1,1)).to.be.equal(2);
  })
  it('第二个', function() {
    expact(add(1,2)).to.be.equal(3);
  })
  it('第三个', function() {
    expact(add(1,2)).to.be.equal(3);
  })
})