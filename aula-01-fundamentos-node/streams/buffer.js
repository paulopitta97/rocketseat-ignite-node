// dados em binário na memória do PC
// o Buffer em si fica como hexadecimal
const buf = Buffer.from("ok")

console.log(buf)

// node streams\buffer.js 
// <Buffer 6f 6b>

console.log(buf.toJSON())

// node streams\buffer.js 
// <Buffer 6f 6b>
// { type: 'Buffer', data: [ 111, 107 ] }