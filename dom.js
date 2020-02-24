var boton1 = document.getElementById("boton1");
var saxo = document.getElementsByClassName("saxo");

boton1.addEventListener("click", function(){
    alert ("has clicado en boton1");
    saxo.play();
   
})