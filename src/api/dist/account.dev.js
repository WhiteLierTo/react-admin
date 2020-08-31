"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = Login;
exports.GetCode = GetCode;

var _request = _interopRequireDefault(require("../../src/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 登录接口
 */
function Login(data) {
  return _request["default"].request({
    url: "/login/",
    method: "POST",
    data: data
  });
}
/**
 * 获取验证码
 */


function GetCode(data) {
  return _request["default"].request({
    url: "/getSms/",
    method: "POST",
    data: data
  });
}