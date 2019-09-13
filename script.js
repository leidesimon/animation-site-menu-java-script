let menuHamburguer = document.querySelector(".menu-hamburguer");
let navbar = document.querySelector("nav");

let button = document.querySelector("button");
let input = document.querySelector("input");
let h2 = document.querySelector("h2");

/*function mostrarMenu(){
    /*nav.style.display = "block"*/

        /*if(nav.classList.contains("visivel")){
            nav.classList.remove("visivel");
}else{
    nav.classList.add("visivel");
}
}*/

function mostrarMenu(){
    navbar.classList.toggle("visivel")
    menuHamburguer.classList.toggle("ativo");
}

function pegarNome(){
    let nome = input.value;
    h2.innerHTML = `Seja bem vindo ${nome}`
    InputDeviceInfo.value = "";
}

menuHamburguer.onclick = mostrarMenu;
button.onclick = pegarNome;