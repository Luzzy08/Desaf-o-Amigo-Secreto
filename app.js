const inputAmigo = document.getElementById ("amigo");
const listaAmigos= [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");

function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("Por favor, inserte un nombre");
        return;
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (!listaAmigos.length) {
        alert("Por favor, agregue amigos antes de sortear.");
        return;
    }
   const random = Math.floor(Math.random() * listaAmigos.length); 
   const amigoSecreto = listaAmigos [random];
   ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
