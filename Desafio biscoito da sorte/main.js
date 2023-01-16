//Variáveis
const surprises = {
    0: "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    1: "A vingança nunca é plena, mata a alma e a envenena!",
    2: "Erga sua cabeça mete o pé e vai na fé, manda essa tristeza embora!",
    3: "Vamos amor, vamos curtir, bora pra beira do mar, vamos pra onde está fazendo mais calor e ninguém pode nos achar...",
    4: "Bora viver, você e eu agora, eu e você, vamos pra onde tudo pode acontecer, inclusive nada...",
    5: "Oh, honey, I'd walk through fire for you, just let me adore you, like it's the only thing I'll ever do...",
    6: "Que coisa louca, eu já sabia, enquanto eu me arrumava algo me dizia, você vai encontrar alguém que vai mudar a sua vida inteira da noite pro dia",
}

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const Btn = document.querySelector("#Btn")
const cookie = document.querySelector("#cookie")
let surprise = document.querySelector(".surprise")

let random

//events

cookie.addEventListener('click', ClickonCookie)
Btn.addEventListener('click', backtoHome)


function ClickonCookie(){
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
    randonNumber()
    randomMessage(random)
    surprise.classList.add('appear')

}


function backtoHome(){
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide") 
      
}

function randonNumber(){
    random = Math.random() * 7
    random = Math.trunc(random)     
    console.log(random)
}

function randomMessage(index){
    surprise.textContent = surprises[index]
}