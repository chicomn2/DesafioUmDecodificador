
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.addEventListener("click", function (event) {
    event.preventDefault();
    var textoRecebido = document.querySelector("#input-texto");
    var textoSaida = textoRecebido.value;

    textoSaida = textoSaida.replace(/e/g, "enter");
    textoSaida = textoSaida.replace(/i/g, "imes");
    textoSaida = textoSaida.replace(/a/g, "ai");
    textoSaida = textoSaida.replace(/o/g, "ober");
    textoSaida = textoSaida.replace(/u/g, "ufat");

    document.getElementById("msg").value = textoSaida;


});


var botaoDescriptografar = document.querySelector("#btn-descripto");
botaoDescriptografar.addEventListener("click", function (event) {
    event.preventDefault();
    var textoRecebido = document.querySelector("#input-texto");
    var textoSaida = textoRecebido.value;

    textoSaida = textoSaida.replace(/enter/g, "e");
    textoSaida = textoSaida.replace(/imes/g, "i");
    textoSaida = textoSaida.replace(/ai/g, "a");
    textoSaida = textoSaida.replace(/ober/g, "o");
    textoSaida = textoSaida.replace(/ufat/g, "u");

    document.getElementById("msg").value = textoSaida;


});

var botaoCopiar = document.querySelector("#btn-copy");
botaoCopiar.addEventListener("click", function (event) {
    var textoRecebido = document.querySelector("#msg");
    textoRecebido.select();
    document.execCommand('copy')
    alert("Mensagem copiada");



})