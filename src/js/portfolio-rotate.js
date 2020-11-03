// /********** mouseover rotate my picture(PC)********/
const img_Speed = 6;//how many times one picture changes per second
export var imgArray = [];
const img_Items = 8;

for (let i = 0; i < img_Items; i++) {
    imgArray[i] = document.createElement('img');
    imgArray[i].src = `./images/portfolio${i}.png`;
}

var counter = 0;
// var timer = 300;

function imgRotate() {
    if(counter > imgArray.length - 1) {
        counter = 0;
    }
    document.getElementById('title-img').src = imgArray[counter++].src;
    // setTimeout(imgRotate, timer);
    // window.requestAnimationFrame(imgRotate);
    // use requestAnimationFrame instead of settimeout to get the smooth animation
}

//set timer and render the rotation
let lastRenderedTime = 0; 
let stopped = true;
let requestId = 0;

function timer(currentTime) {
    if (stopped == false) {
        requestId = window.requestAnimationFrame(timer);
        const secondsSinceLastRendered = (currentTime - lastRenderedTime) / 1000;//to milliseconds //0.00....
        if (secondsSinceLastRendered < 1 / img_Speed) {
            return;
        }//if img_Speed = 2 then start caculate larger than 0.5 seconds 
        lastRenderedTime = currentTime;//first update the lastRenderedTime
        imgRotate();
    }
}
// window.onload = requestAnimationFrame(timer);
// imgRotate();

function startAnimation() {
    stopped = false;
    requestAnimationFrame(timer);
    imgRotate();
}

function stopAnimation() {
    if (requestId) {
        window.cancelAnimationFrame(requestId);
        stopped = true;
    }
}

export const breakPointPc = window.matchMedia("(min-width: 801px)")
document.querySelector('#title-img').addEventListener('mouseover', e => {
    // console.log(e.target);
    if(breakPointPc.matches && e.target.tagName === 'IMG' ) {
        // console.log(e.target);
        startAnimation();
        console.log(requestId);
    } else {
        stopAnimation();
    }
    document.querySelector('#title-img').addEventListener('mouseout', e => {
        // console.log(e.target);
        stopAnimation();
    },false);
},false);


