const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split(/(.{10})/).filter(O=>O)
    let res = []
    const result = [];
    arr.forEach((item,index) => {
      let arr2 = item.split(/(.{2})/).filter(O=>O)
       if (item =="**********") res.push(' ')
       else {
         let arr3 = arr2.map((item, index) => {
           if (item=== '10') return '.'
           if (item==='11') return '-'
         }) 
         res.push(arr3.join(''))
       }   
     })
       const findValues = (obj, expectedKey) => {
         const entries = Object.entries(obj);
           for (const [key, value] of entries) {
             if (key === expectedKey) {
             result.push(value);
           }
         }
       };
     
       res.map(item => {
         if (item === ' ') result.push (' ')
         else findValues(MORSE_TABLE, item)})
 
    //    console.log(res)
    //    console.log(result.join(''))
    return result.join('')
  
 }

module.exports = {
    decode
}