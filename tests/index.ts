import { isValidHexColor} from '../src/simplifier'

const hex = async() => {
  const color = '#GAWIDGAIWIWDHIAGWBDAW'

  if(!isValidHexColor(color)) {
    return console.log('Invalid')
  } else {
    return console.log('Valid')
  }
}

hex()