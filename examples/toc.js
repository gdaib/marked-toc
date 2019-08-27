const mdtoc = require('../index.js')
const fs = require('fs')
const { resolve } = require('path')

const start = "<!-- toc -->\n";
const stop = "\n<!-- toc stop -->";
const clean = /<!-- toc -->[\s\S]+<!-- toc stop -->/;

const toc = content => {
  // Remove the existing TOC
  content = content.replace(clean, start);

  // Generate the new TOC
  var table = start + mdtoc(content) + stop;

  content = content.replace(start, table);

  return content;
};


const content = fs.readFileSync(resolve(__dirname, './readme.md')).toString()

console.log(mdtoc(content));
