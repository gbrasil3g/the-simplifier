interface params {
  arrayParam: string[] | number[] | boolean[] | any[]
}

let getRandomFromArray = (arrayParam: string[] | number[] | boolean[] | any[]) => {
  let result = arrayParam[Math.floor(Math.random() * arrayParam.length)]

  return result
}

export default getRandomFromArray