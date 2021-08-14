let ButtonNext = document.getElementById('ButtonNext'),
    SliderPos = document.getElementById('SliderPos'),
    ButtonPrev = document.getElementById('ButtonPrev');

let x = 0;
SliderPos.style.left = x + 'px'

function myTimer() {
    x = x - 3;
    SliderPos.style.left = x + 'px';
    if (x < 10){
        ButtonPrev.style.display = "block";
    }
}
ButtonNext.onmousedown = function () {
    setTimeFunk = setInterval(myTimer, 7);
}

ButtonNext.onmouseup = function () {
    clearInterval(setTimeFunk);
}
ButtonNext.onmouseout = function () {
    clearInterval(setTimeFunk);
}

function PrevBut() {
    x = x + 3;
    SliderPos.style.left = x + 'px';
    if (x > 0){
        ButtonPrev.style.display = "none";
    }
}

ButtonPrev.onmousedown = function () {
    setPrevInter = setInterval(PrevBut, 7);
}
ButtonPrev.onmouseup = function () {
    clearInterval(setPrevInter);
}

ButtonPrev.onmouseout = function () {
    clearInterval(setPrevInter);
}






// let someFunk = function (){
//     let AnimationStart = setInterval(start,4,0.25);
//     function start(y){
//         if (x <= 0){
//             x = x - y;
//             SliderPos.style.left = x + 'px';
//             console.log(x)
//             if (x < -1500){
//                 clearInterval(AnimationStart)
//                 let AnimationCont = setInterval(start,4,-0.25);
//             }
//         }
//
//     }
//
// }
// someFunk();