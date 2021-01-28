import { Map } from '../src/simplifier';

describe('Using the "native" function "Map"', () => {
  it('Should set a value in "testMap"', () => {
    const testMap = new Map();

    expect(testMap.set('testKey', 'testValue')).toStrictEqual(
      Promise.resolve()
    );
  });

  it('Should get a value in "testMap"', () => {
    const testMap = new Map()

    testMap.set('testKey', 'testValue')

    expect(testMap.get('testKey')).toBe('testValue')
  })

  it('Should return the first key & first value from "testMap"', () => {
    const testMap = new Map()

    testMap.set('testKey', 'testValue')

    expect(testMap.firstKey()).toBe('testKey')
    expect(testMap.firstValue()).toBe('testValue')
  })

  it('Should return all values from "testMap"', () => {
    const testMap = new Map()

    testMap.set('testKeyOne', 'testValueOne')
    testMap.set('testKeyTwo', 'testValueTwo')

    expect(testMap.values()).toBeDefined()
  })

  it('Should return a value from a json', () => {
    const testMap = new Map({ load: require('path').resolve(__dirname, './json/map.json') })

    expect(testMap.get('Message')).toBe('Hello')
  })

  it('Should write a value in a json', () => {
    const testMap = new Map()

    testMap.set('coolNumber', 5000)
    testMap.set('LibName', 'The Simplifier')

    expect(testMap.write(require('path').resolve(__dirname, './json/map.json'))).toStrictEqual(Promise.resolve())
  })

  it('Should return "key", "index" & "value" from each value in "testMap"', () => {
    const testMap = new Map()

    testMap.set('True value', true)
    testMap.set('False value', false)

    expect(
      testMap.forEach((key: string, value: boolean, index: number) => {
        console.log(`Keys: ${key} \n Values: ${value} \n Index: ${index}`)
      })
    )
  })
});
