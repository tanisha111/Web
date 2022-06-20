import { diffDates, diffToHtml } from "./datecalc.js"; 
import { formatError } from "./utils.js";
import { setTimer, stopTimer } from "./timer.js"

export function formHandle(event) {
    event.preventDefault();
    let resContainer = event.target.querySelector('.result'),
        result = '';
    resContainer.innerHTML = "";

    switch(event.target.id) {
        case 'datecalc': 
            let { firstDate, secondDate } = event.target.elements;
            firstDate = firstDate.value, 
            secondDate = secondDate.value;
            if (firstDate && secondDate) {
                let diff = diffDates(firstDate, secondDate); 
                result = diffToHtml(diff); 
            } else {
                result = formatError("Для расчета промежутка необходимо заполнить оба поля!");
            }
          break;
        case 'timer':  
            let { seconds } = event.target.elements;
            seconds = seconds.value;
            if (seconds){
                setTimer(seconds, event.target.seconds);
            } else {
                result = formatError("Для запуска таймера, его нужно установить!");
            }   
          break;
    }

    resContainer.innerHTML = result;
}

export function formResetHandler(event){
    event.preventDefault();
    stopTimer();
}