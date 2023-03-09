 import {data} from "../data/date.js";
 

let fechasPasadas = [];
let fechasFuturas = [];
let fechasActual = Date.parse(data.fechaActual);

// Seleccion de fechas pasadas y futuras respecto a la fecha actula "2022-01-01". 

for (let i = 0; i < data.eventos.length;i++){
    let fechaEvento = Date.parse(data.eventos[i].date);
    if(fechaEvento > fechasActual){
        fechasFuturas.push(data.eventos[i]);
    } else {
        fechasPasadas.push(data.eventos[i]);
    }
}

console.log(fechasFuturas);
// 

//const containerProperties = document.getElementById("ContainerEvents");












