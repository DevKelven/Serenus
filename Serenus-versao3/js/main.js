var icon = document.getElementById("icon")
var mude = document.querySelector(".h-menu")
var mudef = document.querySelector(".h-footer")
var logo = document.querySelector("#logo")
var h2Contato = document.querySelector(".h2_contato")
var email = document.querySelector(".email_icon")
var phone = document.querySelector(".phone_icon")
var insta = document.querySelector(".insta")
var face = document.querySelector(".face")
var din = document.querySelector(".linkedin")
var star1 = document.querySelector(".bird")
var star2 = document.querySelector(".birds")
var login = document.querySelector(".b1")
var cadastro = document.querySelector(".b2")
var loginToIndex = document.querySelector("#logar")
var p1 = document.querySelector(".parte1")
var p2 = document.querySelector(".parte2")
var p1L = document.querySelector(".parte1-bottom-left")
var p1R = document.querySelector(".parte1-bottom-right")
let menu = document.querySelector(".mobile-menu")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    document.body.classList.toggle("color")
    if(document.body.classList.contains("dark-theme")){
        mude.style.borderColor = "white"
        mudef.style.borderColor = "white"
        icon.src = "icons/sun.png"
        logo.src = "imagens/logo_branca.png"
        email.src = "icons/emaily.png"
        phone.src = "icons/telephoney.png"
        insta.src = "icons/instay.png"
        face.src = "icons/facey.png"
        din.src = "icons/diny.png"
        star1.src = "imagens/estrela.png"
        star2.src = "imagens/estrela.png" 
        localStorage.setItem("dark-theme", "enabled");
    }else{
        icon.src = "icons/moon.png"
        mude.style.borderColor = "#280137"
        mudef.style.borderColor = "#280137"
        logo.src = "imagens/logo_colorida.png"
        email.src = "icons/email.png"
        phone.src = "icons/telephone.png"
        insta.src = "icons/insta.png"
        face.src = "icons/face.png"
        din.src = "icons/din.png"
        star1.src = "imagens/passaros.png"
        star2.src = "imagens/passaros.png"
        localStorage.setItem("dark-theme", "disabled");
        menu.style.borderColor = black
    }
}

// Verifica o estado do modo escuro ao carregar a página
const savedDarkMode = localStorage.getItem("dark-theme");
if (savedDarkMode === "enabled") {
    stylesheet.setAttribute("href", "styles-dark.css");
}

function enviar(){
    window.location.reload();
} 

login.onclick = function(){
    location.href = "login.html"
}

cadastro.onclick = function(){
    location.href = "cadastro.html"
}





// function verificarLargura() {
//     const circulo = document.querySelector('.circle');
//     const borda = document.querySelector('.border');
//     const p = document.querySelector('.paraMain');

//     if (window.innerWidth <= 850) {
//       circulo.classList.add('active');
//       borda.classList.add('active');
//       p.classList.add('active')
//     } else {
//       circulo.classList.remove('active');
//       borda.classList.remove('active');
//       p.classList.remove('active')
//     }
//   }

//   // Registra a função de verificação para ser executada no evento de redimensionamento
//   window.addEventListener('resize', verificarLargura);

//   // Chama a função de verificação quando a página é carregada
//   verificarLargura();