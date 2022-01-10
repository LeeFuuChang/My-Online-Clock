const audio_electronic = document.querySelector("#audio-electronic");

const body = document.querySelector("body");
const set_btn = document.querySelector("#btnset");

const alarm_h1 = document.querySelector("#h1");
const alarm_h2 = document.querySelector("#h2");
const alarm_m1 = document.querySelector("#m1");
const alarm_m2 = document.querySelector("#m2");
var alarmInterval = undefined;
var time_h = undefined;
var time_m = undefined;

var is_set = false;
var ringing = false;



alarmFunction = function(){
    var time = new Date();
    var current_h = time.getHours();
    var current_m = time.getMinutes();

    if(current_h==time_h && current_m==time_m && !ringing){
        audio_electronic.play();
        ringing = true;
    }
    console.log(
`
currentTime >> ${current_h}:${current_m}
alarmTime   >> ${(alarm_h1.textContent + alarm_h2.textContent)}:${(alarm_m1.textContent + alarm_m2.textContent)}
ringing     >> ${ringing}
`
    );
}



night_BG_init = function(){
    let star_amount = window.outerWidth/3;
    let night_background = document.querySelector(".night-background");
    for(let i=0; i<star_amount; i++){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.outerWidth);
        let y = Math.floor(Math.random() * window.outerHeight);
        let s = Math.random() * 2;
        let d = Math.random() * 10;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + s + "px";
        star.style.height = 1 + s + "px";

        star.style.animationDuration = 10 + d + "s";
        star.style.animationDelay = d + "s";

        night_background.appendChild(star);
    }
}
day_BG_init = function(){
    let night_background = document.querySelector(".night-background");
    night_background.querySelectorAll("i").forEach(i => {
        i.parentNode.removeChild(i);
    })
}




set = function(){
    if(body.classList.contains("day") && !body.classList.contains("night")){
        body.classList.remove("day");
        body.classList.add("night");
        night_BG_init();
    }

    is_set = true;
    ringing = false;
    time_h = parseInt((alarm_h1.textContent + alarm_h2.textContent), 10);
    time_m = parseInt((alarm_m1.textContent + alarm_m2.textContent), 10);
    alarmInterval = setInterval(alarmFunction, 1000);
    set_btn.children[0].children[0].textContent = "Unset";
    set_btn.onclick = unset;
};
unset = function(){
    if(!body.classList.contains("day") && body.classList.contains("night")){
        body.classList.add("day");
        body.classList.remove("night");
        day_BG_init();
    }

    if(ringing){
        audio_electronic.pause();
        ringing = false;
    }
    if(is_set){
        clearInterval(alarmInterval);
        is_set = false;
    }
    set_btn.children[0].children[0].textContent = "Set";
    set_btn.onclick = set;
}
set_btn.onclick = set;
