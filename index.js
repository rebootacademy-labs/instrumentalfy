const TEMPO = 20;

const SOUNDS = [{
    name: "Saxophone",
    url: "saxo.mp3"
  },
  {
    name: "Clarinet",
    url: "clarinete.mp3"
  },
  {
    name: "Trumpet",
    url: "trompeta.mp3"
  },
  {
    name: "Piano",
    url: "piano.mp3"
  },
  {
    name: "Triangle",
    url: "triangulo.mp3"
  },
  {
    name: "Violin",
    url: "violin.mp3"
  },
  {
    name: "Xylophone",
    url: "xilofono.mp3"
  },
  {
    name: "Drums",
    url: "bateria.mp3",
    duration: 4
  },
  {
    name: "Guitar",
    url: "guitarra.mp3",
    duration: 4
  },
  {
    name: "Agogo",
    url: "agogo.mp3",
    duration: 4
  }
];

function Instrument(name, url) {
  this.name = name;
  this.url = url;
  this.audio = new Audio(`./sounds/${url}`);
  this.play = function() {
    this.audio.play();
  }
}

var instruments = [];

function createHtmlInstrument(instrument, idx) {
  var divInst = document.createElement('div');
  divInst.classList.add('instrument');
  divInst.id = `instrument-${idx}`;

  var divName = document.createElement('div');
  divName.innerText = instrument.name;
  divInst.appendChild(divName);

  if (!instrument.duration) {
    for (let i = 0; i < TEMPO; i++) {
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      divInst.appendChild(input);
      input.classList.add(`checkbox-${i}`);
      input.classList.add(`shortTempo`);
      if(i%4===0) {input.classList.add('spaced')}
      document.getElementById('soundBox').appendChild(divInst);
    }
  } else {
    for (let j = 0; j < 5; j++) {
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('class', 'longTempo');
      divInst.appendChild(input);
      input.classList.add(`checkbox-${j}`);
      //if(j>0) {input.classList.add('gap')}
      document.getElementById('soundBox').appendChild(divInst);
    }
  }
}

SOUNDS.forEach((sound, idx) => {
  instruments.push(new Instrument(sound.name, sound.url));
  createHtmlInstrument(sound, idx);
})

var inputs = document.querySelectorAll('input');
for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', function(e) {
    var id = this.parentElement.id.split('-')[1];
    if (this.checked) {
      instruments[id].play();
    }
  })
}

document.getElementById("btn-start").onclick = function() {

  var metronome = new Audio("./sounds/metronomo.mp3");
  setInterval(() => {
    metronome.play();
  }, 1000);

  var currentBeat = 0;
  setInterval(() => {
    var shortBeats = document.querySelectorAll(`.checkbox-${currentBeat++}.shortTempo:checked`);

    shortBeats.forEach(function(shortBeat) {
      var id = shortBeat.parentElement.id.split('-')[1];
      instruments[id].play();
    })

    if (currentBeat == 19) {
      currentBeat = 0;
    }
  }, 1000);

  var currentBar = 0; // 4 beats = 1 bar
  setInterval(() => {
    var longBeats = document.querySelectorAll(`.checkbox-${currentBar++}.longTempo:checked`);

    longBeats.forEach(function(longBeat) {
      var id = longBeat.parentElement.id.split('-')[1];
      instruments[id].play();
    })

    if (currentBar == 4) {
      currentBar = 0;
    }
  }, 4000);
}

document.getElementById('btn-reset').addEventListener('click', function() {
  location.reload(true);
});

document.getElementById('btn-sample').onclick = function() {
  var violin1 = document.getElementsByClassName('checkbox-0')[5];
  violin1.checked = true;
  var violin2 = document.getElementsByClassName('checkbox-2')[5];
  violin2.checked = true;
  var violin3 = document.getElementsByClassName('checkbox-4')[5];
  violin3.checked = true;
  var violin4 = document.getElementsByClassName('checkbox-6')[5];
  violin4.checked = true;
  var violin6 = document.getElementsByClassName('checkbox-8')[5];
  violin6.checked = true;
  var violin7 = document.getElementsByClassName('checkbox-10')[5];
  violin7.checked = true;
  var violin8 = document.getElementsByClassName('checkbox-12')[5];
  violin8.checked = true;
  var violin9 = document.getElementsByClassName('checkbox-14')[5];
  violin9.checked = true;
  var violin10 = document.getElementsByClassName('checkbox-16')[5];
  violin10.checked = true;
  var violin11 = document.getElementsByClassName('checkbox-18')[5];
  violin11.checked = true;

  var agogo1 = document.getElementsByClassName('checkbox-0')[9];
  agogo1.checked = true;
  var agogo2 = document.getElementsByClassName('checkbox-2')[9];
  agogo2.checked = true;

  var xylophone1 = document.getElementsByClassName('checkbox-1')[6];
  xylophone1.checked = true;
  var xylophone2 = document.getElementsByClassName('checkbox-5')[6];
  xylophone2.checked = true;
  var xylophone3 = document.getElementsByClassName('checkbox-9')[6];
  xylophone3.checked = true;
  var xylophone4 = document.getElementsByClassName('checkbox-13')[6];
  xylophone4.checked = true;
  var xylophone5 = document.getElementsByClassName('checkbox-17')[6];
  xylophone5.checked = true;
  var xylophone6 = document.getElementsByClassName('checkbox-19')[6];
  xylophone6.checked = true;

  var piano1 = document.getElementsByClassName('checkbox-3')[3];
  piano1.checked = true;
  var piano2 = document.getElementsByClassName('checkbox-7')[3];
  piano2.checked = true;
  var piano3 = document.getElementsByClassName('checkbox-11')[3];
  piano3.checked = true;
  var piano4 = document.getElementsByClassName('checkbox-15')[3];
  piano4.checked = true;

  var triangle1 = document.getElementsByClassName('checkbox-4')[4];
  triangle1.checked = true;
  var triangle2 = document.getElementsByClassName('checkbox-9')[4];
  triangle2.checked = true;
  var triangle3 = document.getElementsByClassName('checkbox-13')[4];
  triangle3.checked = true;
  var triangle4 = document.getElementsByClassName('checkbox-17')[4];
  triangle4.checked = true;
}
