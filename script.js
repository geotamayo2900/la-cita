const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const mensajeFinal = document.getElementById("mensajeFinal");

const titulo = document.querySelector("h1");

let intentos = 0;

botonNo.addEventListener("mouseover", function(){
    if (intentos >=3) {
        
        const anchoPantalla = window.innerWidth;
        const altoPantalla = window.innerHeight;

        const x = Math.random() * (anchoPantalla - botonNo.offsetWidth);
        const y = Math.random() * (altoPantalla - botonNo.offsetHeight);

        botonNo.style.position = "fixed";
        botonNo.style.left = x + "px";
        botonNo.style.top = y + "px";
    }
});

botonNo.addEventListener("click", function(){
    intentos++;
    if (intentos === 1) {
        titulo.textContent = "en serio no quieres?";
    }

    if (intentos === 2) {
        titulo.textContent = "Porfavor porfavor acepta";
    }

    if (intentos === 3){
        titulo.textContent = "pues ahora me aceptas";
    }
});

botonNo.addEventListener("touchstart", function(event){

    if (intentos >= 3) {

        event.preventDefault();

        const anchoPantalla = window.innerWidth;
        const altoPantalla = window.innerHeight;

        const x = Math.random() * (anchoPantalla - botonNo.offsetWidth);
        const y = Math.random() * (altoPantalla - botonNo.offsetHeight);

        botonNo.style.position = "fixed";
        botonNo.style.left = x + "px";
        botonNo.style.top = y + "px";
    }
});

botonSi.addEventListener("click", function(){
    titulo.textContent = "sabia que aceptarias";

    botonSi.style.display = "none";
    botonNo.style.display = "none";

    mensajeFinal.textContent = "Entonces tenemos una cita pendiente";

    for (let i = 0; i < 20; i++) {
        crearCorazon();
    }
});

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.textContent = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(corazon);

    setTimeout(function() {
        corazon.remove();
    }, 4000);
}
