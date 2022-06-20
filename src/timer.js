let timerId,
    sound = new Audio(); //использую нативный плеер. Не удалось найти скрипт под es модули для Howler, в отличии от luxon.
    sound.src = './sound/z_uki-dlya-_ideo-z_uk-gonga.mp3';
    sound.loop = false;

export function setTimer(time, el){
    timerId = setInterval(function() {
        time--;
        el.value = time;
        if (time == 0){
            clearInterval(timerId);
            sound.play();
        }
    }, 1000);
}
export function stopTimer(){
    clearInterval(timerId);
} 
