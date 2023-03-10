import { fechasFuturas } from "./main.js";
import { printEvents } from "../modules/printEvents.js";


const containerUpcomingEvents = document.getElementById("ContainerUpcomingEvents");
document.addEventListener('DOMContentLoaded', () => printEvents(containerUpcomingEvents, fechasFuturas));