import { getRandomFromArray } from '../../src/simplifier'

let func = async() => {
  let arr = ['maça', true, 14]

  let res = getRandomFromArray(['maça', true, 14])

  console.log(res)
}

func()