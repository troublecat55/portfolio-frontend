// import {imgArray} from './portfolio-rotate.js';


// const img_Speed = 8;
// var counter = 0;
// // var timer = 300;

// function loaderRotate() {
//     if(counter > imgArray.length - 1) {
//         counter = 0;
//     }
//     document.getElementById('loader').src = imgArray[counter++].src;
    
//     // setTimeout(imgRotate, timer);
//     // window.requestAnimationFrame(imgRotate);
//     // use requestAnimationFrame instead of settimeout to get the smooth animation
// }
// //inspired by Web Dev Simplified "How To Code The Snake Game In Javascript"

// let lastRenderedTime = 0; 
// let stopped = true;
// let requestId = 0;

// function timer(currentTime) {
//     if (stopped == false) {
//         requestId = window.requestAnimationFrame(timer);
//         const secondsSinceLastRendered = (currentTime - lastRenderedTime) / 1000;//to milliseconds //0.00....
//         if (secondsSinceLastRendered < 1 / img_Speed) {
//             return;
//         }//if img_Speed = 2 then start caculate larger than 0.5 seconds 
//         lastRenderedTime = currentTime;//first update the lastRenderedTime
//         loaderRotate();
//     }
// }
// // window.onload = requestAnimationFrame(timer);
// // imgRotate();

// function startAnimation() {
//     stopped = false;
//     requestAnimationFrame(timer);
//     loaderRotate();
// }

// export function stopAnimation() {
//     if (requestId) {
//         window.cancelAnimationFrame(requestId);
//         stopped = true;
//     }
// }

// startAnimation();



// function loader() {
//     $( ".loading p" ).html("Loading...")
// }

// loader();

// $(window).on('load', function(){
//     removeLoader();
//     // removeLoader() //wait for page load PLUS two seconds.
// });

// function removeLoader(){
//     $( ".loading" ).fadeOut(1000, function() {
//       // fadeOut complete. Remove the loading div
//     $( ".loading" ).remove();
//        //makes page more lightweight 
//   });  
// }






