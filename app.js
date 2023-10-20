const eminem = document.querySelector(".eminem");
const nacho = document.querySelector(".boton1");
const homero = document.querySelector(".boton2");
const tigresa = document.querySelector(".tigresa");
const casarodante = document.querySelector(".casarodante");
const dorito = document.querySelector(".dorito");
const bum = document.querySelector(".bum");
const afeitadora = document.querySelector(".afeitadora");

let track = document.createElement('audio');

eminem.addEventListener('click', () => {
	track.src = "audios/violin.mp3";
	track.load();
	track.play();

	document.querySelector(".vladi").classList.toggle("vladi-active");
	setTimeout(yano2, 3500);
});

nacho.addEventListener('click', () => {
   window.location.href = "/gato/gato.html";
});

homero.addEventListener('click', () => {
   window.location.href = "/perro/perro.html";
});

tigresa.addEventListener('click', () => {
	track.src = "audios/pum.mp3";
	track.load();
	track.play();

	casarodante.classList.toggle("casarodanteactiva");
	tigresa.classList.toggle("tigresa360");
	dorito.classList.toggle("dorito360");
	bum.classList.toggle("bum-active");
	afeitadora.classList.toggle("afeitadora360");
	setTimeout(yano, 3000);
});

const yano = () => {
	tigresa.classList.toggle("tigresa360");
	dorito.classList.toggle("dorito360");
	bum.classList.toggle("bum-active");
	afeitadora.classList.toggle("afeitadora360");
}

const yano2 = () => {
	document.querySelector(".vladi").classList.toggle("vladi-active");
}