"use strict";
const unfloat = require ('./../')
const assert = require ('assert')

let error_count = 0

function assertWithInfo (actual, expected, message) {
  process.stdout.write (message)
  try {
    assert.strictEqual (actual, expected, message)
    console.log (' ... OK')
  }
  catch (error) {
    console.log (' ... FAIL')
    console.error (error)
    error_count += 1
  }
}

process.once ('exit', function (code) {
  process.exit (Math.min (1, error_count))
})

assertWithInfo (
    unfloat (123.456)
  , 456
  , 'The result of unfloating 123.456 should be 456'
)

assertWithInfo (
    unfloat (-Infinity)
  , undefined
  , 'The result of unfloating Infinity should be undefined'
)

assertWithInfo (
    unfloat (0)
  , undefined
  , 'The result of unfloating 0 should be undefined'
)

assertWithInfo (
    unfloat (0.0001)
  , 1
  , 'The result of unfloating 0.0001 should be 1'
)

assertWithInfo (
    unfloat ('Hi!')
  , undefined
  , 'The result of unfloating a non-number should be undefined'
)

assertWithInfo (
    unfloat (null)
  , undefined
  , 'The result of unfloating null should be undefined'
)

