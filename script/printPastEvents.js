import { fechasPasadas } from "./main.js";
import { printEvents } from "../modules/printEvents.js";


const containerPastEvents = document.getElementById("ContainerPastEvents");
document.addEventListener('DOMContentLoaded', () => printEvents(containerPastEvents, fechasPasadas));


