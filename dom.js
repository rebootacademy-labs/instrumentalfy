const instruments = [["Saxo", "./Sonidos/saxo.mp3"],
["Clarinete", "./Sonidos/clarinete.mp3"],
["Trompeta", "./Sonidos/trompeta.mp3"],
["Piano", "./Sonidos/piano.mp3"],
["Triangulo", "./Sonidos/triangulo.mp3"],
["Timbal", "./Sonidos/timbal.mp3"],
["Violin", "./Sonidos/violin.mp3"],
["Tamborin", "./Sonidos/tamborin.mp3"],
["Xilofono", "./Sonidos/xilofono.mp3"],
["Guitarra", "./Sonidos/guitarra.mp3"]];

const tempo = 18;

var urlSound = [];

var objInst = [];

function prepare() {
    for (var i = 0; i < instruments.length; i++) {
        objInst.push(new Instrument(instruments[i]));
        createHtml();

    }
}

function Instrument(name, url) {
    this.name = name;
    this.url = url;
    //this.checkbox = checkbox;
}

function createHtml() {
    var bloque = section.insertBefore('div', "boton");
    var nameInstrument = bloque.appendChild("label");
    var checkbox = bloque.appendChild("input").setAttribute("type", "checkbox");
}
