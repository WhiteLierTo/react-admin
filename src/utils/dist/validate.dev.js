"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate_email = validate_email;
var reg_email = "/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/";

function validate_email(value) {
  return reg_email.test(value);
}