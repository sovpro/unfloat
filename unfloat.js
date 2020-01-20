"use strict"
const getDigit = require ('@sovpro/get-digit')

module.exports = unfloat

function unfloat (val) {
  if (val === null) return
  const intval = Math.trunc (Math.abs (val))
  if (isNaN (intval) || intval === Infinity) return
  if ((val - intval) === 0) return
  let num = 0
  let i = 0
  let intval_len = 0
  do {
    num = val * Math.pow (10, ++i)
  } while (num % 10 > 0)
  if (intval >= 1) {
    intval_len = Math.ceil (Math.log10 (num))
    while (Math.ceil (Math.log10 (num)) > i) {
      num -= Math.pow (10, intval_len)
           * getDigit (1 + intval_len--, num)
    }
  }
  while (getDigit (1, num) === 0) {
    num /= 10
  }
  return num
}
