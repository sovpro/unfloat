"use strict"

module.exports = unfloat

const pow10s = new Array (
  Math.ceil (Math.log10 (Number.MAX_VALUE))
).fill (0).map ((_, i) => Math.pow (10, i))

function unfloat (val, preserve) {
  if (val === null) return
  const intval = Math.trunc (Math.abs (val))
  if (isNaN (intval) || intval === Infinity) return
  if ((val - intval) === 0) return
  let num = 0
  let i = 0
  let intval_len = 0
  let remainder = 0
  do {
    num = val * pow10s[++i]
    remainder = num / 10
  } while ((remainder - Math.trunc (remainder)) !== 0)
  if (intval >= 1 && (!!preserve === false))
    num -= intval * pow10s[i]
  remainder = num / 10
  while ((remainder - Math.trunc (remainder)) === 0) {
    num = remainder
    remainder = num / 10
  }
  return num
}
