const reg_email = "/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/";
const reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
//密码验证
export const validate_password = reg_password;

//邮箱验证
export default function validate_email(value) {
  return reg_email.test(value);
}

//密码验证
export function validate_pas(value) {
  return reg_password.test(value);
}
