 import {data} from "../data/date.js";

let fechasPasadas = [];
let fechasFuturas = [];
let fechasActual = Date.parse(data.fechaActual);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Seleccion de fechas pasadas y futuras respecto a la fecha actula "2022-01-01". 

for (let i = 0; i < data.eventos.length;i++){
    let fechaEvento = Date.parse(data.eventos[i].date);
    let fechaAgregada = new Date ();
    fechaAgregada.setTime(fechaEvento);
    if(fechaEvento > fechasActual){
        fechasFuturas.push(fechaAgregada.toLocaleDateString('en-US', options));
    } else {
        fechasPasadas.push(fechaAgregada.toLocaleDateString('en-US', options));
    }
}












