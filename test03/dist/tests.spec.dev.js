"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var expect = chai.expect;
describe('浏览器测试模块', function () {
  it('测试一', function () {
    expect(_app["default"].sumVal(1, 2)).to.be.equal(3);
  });
});