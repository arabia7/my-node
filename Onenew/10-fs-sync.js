const {readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./Onenew/first.txt', 'utf8')
const second    = readFileSync('./Onenew/second.txt', 'utf8')

writeFileSync('./Onenew/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})