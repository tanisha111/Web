import { formHandle, formResetHandler } from "./formHandlers.js";
import { menuSetup } from './menu.js';
import '../sound/sound.mp3';

const dateCalcForm = document.getElementById("datecalc");
const timerForm = document.getElementById("timer");
dateCalcForm.addEventListener("submit", formHandle);
timerForm.addEventListener("submit", formHandle);
timerForm.addEventListener("reset", formResetHandler);
menuSetup(document.querySelector('.menu'));