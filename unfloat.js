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
  } while (num % 10) ; 
  if (intval > 0) {
    intval_len = Math.ceil (Math.log10 (intval))
  }
  while (intval_len) {
    let w = Math.pow (10, intval_len + i - 1) *
            getDigit (intval_len + i, num)
    num -= w
    intval_len--
  }
  return num / 10
}
