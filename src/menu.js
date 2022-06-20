import { getSiblings } from './utils.js';

function clickLink(e){
    e.preventDefault();
    let activeEl = document.querySelector(e.target.hash),
        siblings = getSiblings(activeEl);
        siblings.forEach(el=>{
            if (el !== activeEl){
                el.style.display = 'none';
            }
        });
    activeEl.style.display = 'block';
}

export function menuSetup (el) {
    let links = el.querySelectorAll("a");
    links.forEach(element => {
        element.addEventListener("click", clickLink);    
    });
}