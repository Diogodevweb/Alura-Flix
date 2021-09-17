function adicionarFilme() {
    let filmeFavorito = document.getElementById("filme").value
    if(filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.log("Endereço de filme invalido")
    }
    document.getElementById("filme").value = " "
}
  
function listarFilmesNaTela(filme){
    let elementoFilmeFavorito = "<img src=" + filme + ">";
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}