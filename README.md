# Unfloat

Unfloat a floating value to an integer number.

[![Build status for Node.js 4.x and newer](https://github.com/sovpro/unfloat/workflows/Node.js%204.x%20and%20newer%20/badge.svg?branch=master)](https://github.com/sovpro/unfloat/commits/master)

```js
let unfloated_val = unfloat (1.123456789)
// unfloated_val will be: 123456789
```

## Preserve integer digits

```js
let unfloated_val = unfloat (1.123456789, true)
// unfloated_val will be: 1123456789
```
