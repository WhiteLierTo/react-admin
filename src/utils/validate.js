const reg_email = "/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/";

export function validate_email(value) {
  return reg_email.test(value);
}
