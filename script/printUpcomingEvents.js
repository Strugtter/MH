import {data} from "../data/date.js";
import { fechasFuturas } from "./main.js";
import { printEvents } from "../modules/printEvents.js";


const containerUpcomingEvents = document.getElementById("ContainerUpcomingEvents");
document.addEventListener('DOMContentLoaded', () => printEvents(containerUpcomingEvents, fechasFuturas, data.eventos));

document.addEventListener('click', (event) => {
    const { target } = event;
    sessionStorage.setItem("idClick", JSON.stringify(target.id));
    if(target.id){
        window.location.href = "../pages/details.html";
    }
})
