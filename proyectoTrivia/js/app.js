const videojuegos = [
    {
        pregunta: "¿En que año salio el primer Call of Duty",
        descripcion: "Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo belico. p",
        opciones : ["1950","1780","2004","2022"],
        correcta: 2
    },
    {
        pregunta:"¿Quien es el campeon mundial de Fortnite?",
        descripcion: "Fornite es el videojuego del año ",
        opciones: ["Adam Smith","Bugha","Faker","Zoky"],
        correcta: 1
    },
    {
        pregunta: "¿Cuales son los juegos de campaña mas jugados en este año?",
        descripcion:"El modo campaña o campaña a secas, es el modo de juego principal cuyas ",
        opciones: ["Call of duty,Halo,God of war","Fornite,Rsident Evil,Valorant","Dota 2","LoL"],
        correcta: 0
    },
    {
        pregunta: "¿Cual es el juego movil más conocido?",
        descripcion: "Un videojugo para móviles es un videojuego que es desarroll",
        opciones: ["Dota 2","Angry Birds","Free Fire", "Roblox"],
        correcta: 2
    },

]

//VARIABLES

const titulo = document.querySelector("#subContenedor__titulo");
const pregunta = document.querySelector("#subContenedor__pregunta");
const descripcion = document.querySelector("#subContenedor__descripcion");
const cajaOpciones= document.querySelector("#subContenedor__opciones");
const repuesta = document.querySelector("#subContenedor__elemento");

//INICIAR APLICACION
window.onload = iniciarAplicacion();


//Funciones

Function iniciarAplicacion(){
    let indice = 3;
    pregunta.textContent= videojuegos[indice].pregunta;
    descripcion.textContent = videojuegos[indice].pregunta;
    descripcion.textContent = videojuegos[indice].descripcion;
}
 function cargarOpciones(){
    let indice = 0;
    for (let i = 0; i <videojuegos[indice].log)
 }
