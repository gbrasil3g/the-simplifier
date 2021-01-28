import { isWebsiteUp } from '../../src/simplifier'

let func = async() => {
  let res = await isWebsiteUp('https://youtube.com')

  console.log(res)
} 

func()