import service from "../../src/utils/request";

/**
 * 登录接口
 */

export function Login(data) {
  return service.request({
    url: "/login/",
    method: "POST",
    data,
  });
}

/**
 * 获取验证码
 */
export function GetCode(data) {
  return service.request({
    url: "/getSms/",
    method: "POST",
    data,
  });
}

/**
 * 注册接口
 */

export function Register(data) {
  return service.request({
    url: "/register/",
    method: "POST",
    data,
  });
}
