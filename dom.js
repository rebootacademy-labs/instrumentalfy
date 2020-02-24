var boton1 = document.getElementById("boton1");
var saxo = document.getElementsByClassName("saxo");

var botones = document.querySelectorAll("button");
var saxo = new Audio();
saxo.src = "./Sonidos/saxo.mp3";
botones[0].addEventListener("click", function(){
    saxo.play();
});
var clarinete = new Audio();
clarinete.src = "./Sonidos/clarinete.mp3";
botones[1].addEventListener("click", function(){
    clarinete.play();
});
var fagot = new Audio();
fagot.src = "./Sonidos/fagot-2-.mp3";
botones[2].addEventListener("click", function(){
    fagot.play();
});
var huevo_loop = new Audio();
huevo_loop.src = "./Sonidos/huevo_loop_123_3.mp3";
botones[3].addEventListener("click", function(){
    huevo_loop.play();
});
var piano = new Audio();
piano.src = "./Sonidos/piano.mp3";
botones[4].addEventListener("click", function(){
    piano.play();
});
var violin = new Audio();
violin.src = "./Sonidos/violín.mp3";
botones[5].addEventListener("click", function(){
    violin.play();
});
var trompeta = new Audio();
trompeta.src = "./Sonidos/trompeta1.mp3";
botones[6].addEventListener("click", function(){
    trompeta.play();
});
var timbal_loop = new Audio();
timbal_loop.src = "./Sonidos/timbal_loop_123_3.mp3";
botones[7].addEventListener("click", function(){
    timbal_loop.play();
});
var triangulo = new Audio();
triangulo.src = "./Sonidos/triángulo.mp3";
botones[8].addEventListener("click", function(){
    triangulo.play();
});
var tamborin1 = new Audio();
tamborin1.src = "./Sonidos/tamborim_loop_123_2.mp3";
botones[9].addEventListener("click", function(){
    tamborin1.play();
});