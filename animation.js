let artigos = document.querySelector(".artigos");
let lista = document.querySelector(".lista");
let menu = document.querySelector(".menu");
artigos.onmouseover = function() {
    menu.classList.toggle("active")
    
}
lista.onmouseleave = function() {
    menu.classList.remove("active")
    
}

