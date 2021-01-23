<h1 align="left">The Simplifier</h1>

<h3>A simple package to simplify your tasks as a programmer</h3><br><br>

# Instalation

### Using NPM

```sh
npm install the-simplifier --save
```

### Using YARN

```sh
yarn add the-simplifier
```

<hr>

# How to use

## CONVERTERS

### convertColors
```js
// Converting RGB codes to HEX

import { convertColors } from 'the-simplifier'

let convert = async() => {
  let result = await convertColors('RGBToHex', {
    rgbCode: [255, 255, 255]
  })

  console.log(result)
}

convert() // Expected: #FFFFFF
```
```js
// Converting HEX codes to RGB

import { convertColors } from 'the-simplifier'

let convert = async() => {
  let result = await convertColors('HexToRGB', {
    hexCode: '#FFFFFF'
  })

  console.log(result)
}

convert() // Expected: [255, 255, 255]
```

### convertTime

```js
// Converting 5000 seconds to minutes

import { convertTime } from 'the-simplifier'

let convert = async() => {
  let result = await convertTime(5000, {
    from: 'seconds',
    to: 'minutes'
  })

  console.log(result)
}

convert() // Expected: 83.33333333333333
```

## FORMATTERS

### NumberFormatter

```js
import { NumberFormatter } from 'the-simplifier'

const format = async() => {
  const result = NumberFormatter(5000, '.')

  console.log(result)
}

format() // Expected: 5.000
```

## OCR

### readImage

```js
import { readImage } from 'the-simplifier'

let imageURL = 'https://store-images.s-microsoft.com/image/apps.54739.14266069062940839.0386a7c7-7a53-4e48-b184-3c1b8af04617.60917b6c-f77d-4aef-baf4-b8aa891c5889?mode=scale&q=90&h=720&w=1280'

let ocrExample = async() => {
  const result = await readImage(imageURL)

  console.log(result)
}

ocrExample() // Expected: PURE TEXT
```

## VALIDATORS

### isValidHexColor

```js
import { isValidHexColor } from 'the-simplifier'

let hex = async() => {
  let color = '#GAWIDGAIWIWDHIAGWBDAW'

  if(!isValidHexColor(color)) {
    return console.log('Invalid') // invalid hex code
  } else {
    return console.log('Valid') // valid hex code
  }
}

hex() // Expected: Invalid
```

## OTHERS

### getRandomInt

```js
import { getRandomInt } from 'the-simplifier'

let random = async() => {
  let result = getRandomInt(10, 100)

  console.log(result)
}

random() // Expected: A number between 10 and 100
```

### generateChars

```js
import { generateChars } from 'the-simplifier'

let random = async() => {
  let result = generateChars(10)

  console.log(result)
}

random() // Expected: 10 random chars
```

### getRandomFromArray

```js
import { getRandomFromArray } from 'the-simplifier'

let random = async() => {
  let array = [1, 'two', true]

  let result = getRandomFromArray(array)

  console.log(result)
}

random() // Expected: A random item from array
```