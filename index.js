const TEMPO = 18;

const SOUNDS = [
  { name: "Saxo", url: "saxo.mp3" },
  { name: "Clarinete", url: "clarinete.mp3" },
  { name: "Trompeta", url: "trompeta.mp3" },
  { name: "Piano", url: "piano.mp3" },
  { name: "Triangulo", url: "triangulo.mp3" },
  { name: "Timbal", url: "timbal.mp3" },
  { name: "Violin", url: "violin.mp3" },
  { name: "Tamborin", url: "tamborim.mp3" },
  { name: "Xilofono", url: "xilofono.mp3" },
  // { name: "Guitarra", url: "guitarra.mp3" }
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

  for (let i = 0; i < TEMPO; i++) {
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    divInst.appendChild(input);
    input.classList.add(`checkbox-${i}`)
  }
  document.getElementById('soundBox').appendChild(divInst);
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
  var resObject = {};

  for (var i = 0; i < TEMPO; i++) {
    var firstInput = document.getElementsByClassName(`checkbox-${i}`);
    for (j = 0; j < firstInput.length; j++) {
      if(firstInput[j].checked){
        if(!resObject[i]) {
          resObject[i] = []
        }
        resObject[i].push(SOUNDS[j].url);
      }
    }
  }
  playMusic(resObject);
}


function playMusic(checkedMusic) {
  var musics = [];
  console.log(checkedMusic);
  
  for (i in checkedMusic) {7
    for (var j = 0; j < checkedMusic[i].length; j++) {
      const element = checkedMusic[i][j];
      let audio = new Audio(`./sounds/${checkedMusic[i][j]}`);
      audio.play()
      console.log(element);
    }    
  }
  //return musics;
}

boton.onclick = getSoundsChecked

var btnAcelerar = document.getElementById("btn-agilizar");
btnAcelerar.addEventListener("click", function() { 
  music.playbackRate = 1.5;
 });

 var btnRalentizar = document.getElementById("btn-ralentizar");
 btnAcelerar.addEventListener("click", function() { 
   music.playbackRate = 0.5;
  });