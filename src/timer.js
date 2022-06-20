
let timerId,
    sound = new Audio();
    sound.src = '../sound/sound.mp3';
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
