const adjust_hu = document.querySelector("#btn-hu");
const adjust_hd = document.querySelector("#btn-hd");
const adjust_mu = document.querySelector("#btn-mu");
const adjust_md = document.querySelector("#btn-md");

const digit_h1 = document.querySelector("#h1");
const digit_h2 = document.querySelector("#h2");
const digit_m1 = document.querySelector("#m1");
const digit_m2 = document.querySelector("#m2");

function Time_Add(amount){
    current_h = parseInt(digit_h1.textContent + digit_h2.textContent, 10);
    current_m = parseInt(digit_m1.textContent + digit_m2.textContent, 10);


    current_m += amount;
    if(current_m >= 60){
        current_h += 1;
        current_m -= 60;
    }

    if(current_h >= 24){
        current_h -= 24;
    }


    if(current_h < 10){
        new_h = "0" + current_h.toString();
    } else {
        new_h = current_h.toString();
    }
    if(current_m < 10){
        new_m = "0" + current_m.toString();
    } else {
        new_m = current_m.toString();
    }

    digit_h1.textContent = new_h[0];
    digit_h2.textContent = new_h[1];
    digit_m1.textContent = new_m[0];
    digit_m2.textContent = new_m[1];
}
function Time_Minus(amount){
    current_h = parseInt(digit_h1.textContent + digit_h2.textContent, 10);
    current_m = parseInt(digit_m1.textContent + digit_m2.textContent, 10);


    current_m -= amount;
    if(current_m < 0){
        current_h -= 1;
        current_m += 60;
    }
    if(current_h < 0){
        current_h += 24;
    }


    if(current_h < 10){
        new_h = "0" + current_h.toString();
    } else {
        new_h = current_h.toString();
    }
    if(current_m < 10){
        new_m = "0" + current_m.toString();
    } else {
        new_m = current_m.toString();
    }

    digit_h1.textContent = new_h[0];
    digit_h2.textContent = new_h[1];
    digit_m1.textContent = new_m[0];
    digit_m2.textContent = new_m[1];
}



adjust_hu.addEventListener("click", function(){
    Time_Add(60);
});
adjust_hd.addEventListener("click", function(){
    Time_Minus(60);
});
adjust_mu.addEventListener("click", function(){
    Time_Add(1);
});
adjust_md.addEventListener("click", function(){
    Time_Minus(1);
});