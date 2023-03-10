import {data} from "../data/date.js";
import { printEvents } from "../modules/printEvents.js";

export let fechasPasadas = [];
export let fechasFuturas = [];
let fechasActual = Date.parse(data.fechaActual);

// Seleccion de fechas pasadas y futuras respecto a la fecha actula "2022-01-01". 

    for (let i = 0; i < data.eventos.length;i++){
        let fechaEvento = Date.parse(data.eventos[i].date);
        if(fechaEvento < fechasActual){
            fechasPasadas.push(data.eventos[i]);
        } else {
            fechasFuturas.push(data.eventos[i]);
        }
    }

const containerHome = document.getElementById("home");
document.addEventListener('DOMContentLoaded', () => printEvents(containerHome, data.eventos));


























