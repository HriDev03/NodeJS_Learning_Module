
// Q1) Create a Buffer from a string.
//Buffer: A temporary memory where raw binary data is handled


const str="Namaste";
// Buffer.from(str,encoding)-->will change our data from str to encoded data here, hexadecimal
const buffer=Buffer.from(str, 'utf-8');

console.log(buffer);// will get data in the form of buffer
console.log(buffer.toString()); //will convert back to string
