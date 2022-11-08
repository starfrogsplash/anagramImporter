import AnagramManager from '../src/AnagramManager.js'

describe('anagramChecker', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('outputs correctly grouped anagrams on separate lines', () => {
    const anagramCheck = new AnagramManager()
    const inputLines = [
      'abc',
      'cba',
      'bac',
      'fun',
      'unf',
      'hello'
    ]

    inputLines.forEach((input) => {
      anagramCheck.groupAnagram(input)
    })

    anagramCheck.flushMemory()

    expect(consoleSpy).toHaveBeenCalledTimes(3)
    expect(consoleSpy).toHaveBeenCalledWith('abc,cba,bac')
    expect(consoleSpy).toHaveBeenCalledWith('fun,unf')
    expect(consoleSpy).toHaveBeenCalledWith('hello')
  })

  it('does not print anything for an empty file', () => {
    const anagramCheck = new AnagramManager()
    const inputLines = []

    inputLines.forEach((input) => {
      anagramCheck.groupAnagram(input)
    })

    anagramCheck.flushMemory()

    expect(consoleSpy).toHaveBeenCalledTimes(0)
  })

  it('correctly handles empty strings', () => {
    const anagramCheck = new AnagramManager()
    const inputLines = ['']

    inputLines.forEach((input) => {
      anagramCheck.groupAnagram(input)
    })

    anagramCheck.flushMemory()

    expect(consoleSpy).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalledWith('')
  })

 it('correctly handles empty string', () => {
    const anagramCheck = new AnagramManager()
    const inputLines = ['', 'abc', 'bac']

    inputLines.forEach((input) => {
      anagramCheck.groupAnagram(input)
    })

    anagramCheck.flushMemory()

    expect(consoleSpy).toHaveBeenCalledTimes(2)
    expect(consoleSpy).toHaveBeenCalledWith('')
    expect(consoleSpy).toHaveBeenCalledWith('abc,bac')
  })




  
})

