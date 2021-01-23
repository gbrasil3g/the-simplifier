import { getRandomInt } from '../../src/simplifier'

let func = async() => {
  let res = getRandomInt(10, 100)

  console.log(res)
}

func()