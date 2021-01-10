import Simplifier from '../src/Simplifier';

const simplifier = new Simplifier();

simplifier.isHex('#ff00000').then(res => {
  if(res === true) {
    return console.log('Valid')
  } else {
    return console.log('Invalid')
  }
})