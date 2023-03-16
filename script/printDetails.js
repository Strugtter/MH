import {data} from "../data/date.js";
import { printDetails } from "../modules/printDetails.js";

let idClickStr = JSON.parse(sessionStorage.getItem('idClick'));
let idClick = parseInt(idClickStr);


const containerDetails = document.getElementById("details");
document.addEventListener('DOMContentLoaded', () => printDetails(containerDetails, [data.eventos[idClick]]));