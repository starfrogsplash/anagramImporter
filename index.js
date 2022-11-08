import {readAndParse} from './src/main.js'

// program will always be run with 'node main.js <file_path>'
const args = process.argv.slice(2)
const filePath = args[0]

readAndParse(filePath);
