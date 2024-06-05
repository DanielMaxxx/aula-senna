function redirecionar() {

if (document.getElementById('estudante').checked){
    window.location.href ="pagina_estudante.html";
} else if (document.getElementById ('biblio').checked){
    window.location.href = "pagina_biblioteca.html";
} else {
    alert ("Por Favor, selecione uma opção");
}

}