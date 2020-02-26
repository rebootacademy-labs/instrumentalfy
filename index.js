const TEMPO = 20;

const SOUNDS = [
  { name: "Saxo", url: "saxo.mp3" },
  { name: "Clarinete", url: "clarinete.mp3" },
  { name: "Trompeta", url: "trompeta.mp3" },
  { name: "Piano", url: "piano.mp3" },
  { name: "Triangulo", url: "triangulo.mp3" },
  { name: "Violin", url: "violin.mp3" },
  { name: "Xilofono", url: "xilofono.mp3" },
  { name: "Bateria", url: "bateria.mp3", duration: 4},
  { name: "Guitarra", url: "guitarra.mp3", duration: 4},
  { name: "Agogo", url: "agogo.mp3", duration: 4}
];

function Instrument(name, url) {
  this.name = name;
  this.url = url;
  this.audio = new Audio(`./sounds/${url}`);
  this.play = function () {
    this.audio.play();
  }
}

var instruments = [];

function init() {
  SOUNDS.forEach((sound, idx) => {
    instruments.push(new Instrument(sound.name, sound.url));
    createHtmlInstrument(sound, idx);
  })
}

function createHtmlInstrument(instrument, idx) {
  var divInst = document.createElement('div');
  divInst.classList.add('instrument');
  divInst.id = `instrument-${idx}`;

  var divName = document.createElement('div');
  divName.innerText = instrument.name;
  divInst.appendChild(divName);
  
  if (instrument.name == "Guitarra" || instrument.name == "Bateria" || instrument.name == "Agogo") {
    for (let j = 0; j < 4; j++) {
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      divInst.appendChild(input);
      input.classList.add(`checkbox-${j}`);
      document.getElementById('soundBox').appendChild(divInst);
    }
  } else {
      for (let i = 0; i < TEMPO; i++) {
        var input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        divInst.appendChild(input);
        input.classList.add(`checkbox-${i}`);
        document.getElementById('soundBox').appendChild(divInst);
    }
  }
  
}

init()

var inputs = document.querySelectorAll('input');
for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', function (e) {
    var id = this.parentElement.id.split('-')[1];
    if (this.checked) {
      instruments[id].play();
    }
  })
}


var boton = document.getElementById("btn-reproducir")

function getSoundsChecked() {
  var resObject = [];

  for (var i = 0; i < TEMPO; i++) {
    var firstInput = document.getElementsByClassName(`checkbox-${i}`);
    resObject[i] = [];
    for (j = 0; j < firstInput.length; j++) {
      if(firstInput[j].checked){
        resObject[i].push(SOUNDS[j].url);
      }
    }
  }
  playMusic(resObject);
}


function playMusic(checkedMusic) {
  for (var i = 0; i < checkedMusic.length; i++) {
    setTimeout( function(urlArr) {
      for (var j = 0; j < urlArr.length; j++) {
        let audio = new Audio(`./sounds/${urlArr[j]}`);
        audio.play();
      }
    }, 1000 * i, checkedMusic[i]);
  }
}

boton.onclick = getSoundsChecked

var btnAcelerar = document.getElementById("btn-agilizar");
btnAcelerar.addEventListener("click", function() { 
  //("./sounds/saxo.mp3").playbackRate = 4;
});

var btnRalentizar = document.getElementById("btn-ralentizar");

  function ralentizar(u){
  resObject.playbackRate = 0.5;
  }
  btnRalentizar.onclick = ralentizar;