import { NumberFormatter } from '../../src/simplifier'

let func = async() => {
  let res = await NumberFormatter(10000, {
    formatter: ','
  })

  console.log(res)
}

func()