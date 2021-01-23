let generateChars = (quantity: number) => {
  let result = ''
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charsQuantity = chars.length

  for(let i = 0; i < quantity; i++) {
    if(result.length === 3 || result.length === 7) result += ' '

    result += chars.charAt(Math.floor(Math.random() * charsQuantity))
  }

  return result
}

export default generateChars