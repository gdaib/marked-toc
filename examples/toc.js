const mdtoc = require('../index.js')
const fs = require('fs')
const { resolve } = require('path')

const content = fs.readFileSync(resolve(__dirname, './readme.md')).toString()


console.log(mdtoc.insert(content));
