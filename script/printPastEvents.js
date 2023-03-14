import { data } from "../data/date.js";
import { fechasPasadas } from "./main.js";
import { printEvents } from "../modules/printEvents.js";

const containerPastEvents = document.getElementById("ContainerPastEvents");
document.addEventListener('DOMContentLoaded', () => printEvents(containerPastEvents, fechasPasadas, data.eventos));

document.addEventListener('click', (event) => {
    const { target } = event;
    sessionStorage.setItem("idClick", JSON.stringify(target.id));
    if(target.id){
        window.location.href = "../pages/details.html";
    }
})
