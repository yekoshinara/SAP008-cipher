import cipher from './cipher.js';

const cifrar = document.querySelector("#btnEncode")

cifrar.addEventListener("click", function (e) {
    e.preventDefault();

    let valorDesloc = parseInt(document.querySelector("#deslocamento").value);

    let msgInserida = document.querySelector("#textoInserido").value;
    msgInserida = msgInserida.toUpperCase();
    
    let msgCodificada = cipher.encode(valorDesloc, msgInserida);
    document.getElementById("textoResultado").value = "Sua mensagem codificada:" + msgCodificada;
    console.log(msgCodificada)
    
})

const decifrar = document.querySelector("#btnDecode")

decifrar.addEventListener("click", function (e) {
    e.preventDefault();

    let valorDesloc = parseInt(document.querySelector("#deslocamento").value);

    let msgInserida = document.querySelector("#textoInserido").value
    msgInserida = msgInserida.toUpperCase();
    
    let msgDecodificada = cipher.decode(valorDesloc, msgInserida);
    document.getElementById("textoResultado").innerHTML = 
    ("Sua mensagem decodificada:" + msgDecodificada);
    console.log(msgDecodificada)
})

