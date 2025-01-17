//Declaración de variables
const listaAmigos = [];

//Agregar nombres a la lista de amigos
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
        if(nombreAmigo == ""){
            alert('Ingrese un nombre válido.')
        } else{
            listaAmigos.push(nombreAmigo);
            imprimirLista();
        }
}

//Mostrar la lista de amigos actualizada
function imprimirLista(){
    let elementoLista = document.getElementById('listaAmigos');
    let lista = "";
    for (nombreAmigo of listaAmigos){
        lista += `${nombreAmigo} ${(listaAmigos.length == 1) ? '' : "<br>"}`;
    }
    elementoLista.innerHTML = lista;
}

//Botón para sortear amigo
function sortearAmigo(){
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = listaAmigos[Math.floor(Math.random()*listaAmigos.length)+1].toString();
    }