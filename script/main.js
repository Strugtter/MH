import {data} from "../data/date.js";
import { printEvents } from "../modules/printEvents.js";


export let fechasPasadas = [];
export let fechasFuturas = [];
let allEvents = data.eventos;

// Seleccion de fechas pasadas y futuras respecto a la fecha actula "2022-01-01". 
let fechasActual = Date.parse(data.fechaActual);
for (let i = 0; i < data.eventos.length;i++){
    let fechaEvento = Date.parse(data.eventos[i].date);
    if(fechaEvento < fechasActual){
        fechasPasadas.push(data.eventos[i]);
    } else {
        fechasFuturas.push(data.eventos[i]);
    } 
}

const containerHome = document.getElementById("home");
document.addEventListener('DOMContentLoaded', () => printEvents(containerHome, allEvents, data.eventos));

document.addEventListener('click', (event) => {
    const { target } = event;
    sessionStorage.setItem("idClick", JSON.stringify(target.id));
    console.log("hice clic");
    console.log(target);
    if(target.id){
      window.location.href = "../pages/details.html";
    }
})


























