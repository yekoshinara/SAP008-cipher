 const cipher = {encode, decode}

 function encode (offset, string) {
    if (typeof offset != 'number'|| typeof string != 'string' ) {
throw TypeError();
} else {
     let msgCodificada = "";
     for (let i = 0, j=string.lenght; i<j; i++ ) 
     {let numAscii = ((string.charCodeAt(i)  - 65 + offset) % 26 ) + 65;
      msgCodificada += String.fromCharCode(numAscii);

     }
     return msgCodificada
  }
 }
function decode (offset, string) {
    if (typeof offset != 'number'|| typeof string != 'string' ){
        throw TypeError();
        }
        else {
    let msgDecodificada = "";
    for (let i = 0, j=string.lenght; i<j; i++ ) {
     let numAscii = ((string.charCodeAt(i)  - 65 - offset) % 26 ) + 65;
     msgDecodificada += String.fromCharCode(numAscii);

    }
    return msgDecodificada
 }
}

export default cipher;