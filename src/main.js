import fs from 'fs';
import readline from 'readline'
import AnagramManager from './AnagramManager.js'

const am = new AnagramManager()

const readAndParse = (filePath) => {
  const readStream = fs.createReadStream(filePath)
  let rl = readline.createInterface({ input: readStream })

  rl.on('line', (line) => {
    am.groupAnagram(line)
  });

  rl.on('error', (error) => console.error(error.message))
  rl.on('close', () => { am.flushMemory() })
}


export {
  readAndParse
}
