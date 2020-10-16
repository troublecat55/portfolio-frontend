import './loading.js';
import './intro-animation.js';
import './portfolio-rotate.js';
import './footer.js';
import './preworks.js';
// import * as $ from 'jquery';


/********only-for-test ********/
$("document").ready(function() {
    $(".site")
        .click(function(e) {
             console.log(e.target);
            }); })

/*******detact logo path********/

// const logo = document.querySelectorAll("#logo path");

// for (let i = 0 ;i < logo.length ; i++) {
//     console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
// }

/*******title-btn hover event********/


$(".title-btn")
    .mouseenter(function(e) {
        // console.log(e.target);
        e.target.tagName === "BUTTON" ? 
            $(".sunburst > #title-bg").animate( { opacity: 1},200) :  
            $(".sunburst > #title-bg").animate({ opacity: 0},200);
        });
$(".title-btn")
    .mouseout(function(e) {
        e.target.tagName === "BUTTON" ? 
            $(".sunburst > #title-bg").animate({ opacity: 0},200) :
            $(".sunburst > #title-bg").animate( { opacity: 1},200);
        });

    // $(".title-img-area > #title-img")
    //     .mouseenter(function(e){
    //         e.target.tagName === "IMG" ?
    //             $(".sunburst > #title-bg").animate({ opacity: 1},200) :
    //             $(".sunburst > #title-bg").animate({ opacity: 0},200);
    //     });
    // $(".title-img-area > #title-img")
    // .mouseout(function(e){
    //     e.target.tagName === "IMG" ?
    //             $(".sunburst > #title-bg").animate({ opacity: 0},200) :
    //             $(".sunburst > #title-bg").animate({ opacity: 1},200);
    //     });



//     /*******hanburger manu click event********/


$(".menu-btn")
    .click(function(e) {
        if (e.target.className.split(" ")[0] === 'menu-btn'||
            e.target.className.split(" ")[0] === 'menu-btn-hamburger') 
            {
                $(".menu-btn").toggleClass("expanded");
                $(".menu-btn-hamburger").toggleClass("expanded");
                $(".nav").toggleClass("expanded");
            }
        console.log(e.target);
    });



 /********** click change my picture(mobile)********/

 /********* change img for mobile*********/
var toggle = false;
var titleImg = document.getElementById('title-img');
function changImg() {
    if(toggle === true) {
        titleImg.src = './images/portfolio7.png'
    } else {
        titleImg.src = './images/portfolio0.png'
    }
    toggle = !toggle;
}

var breakPointMb = window.matchMedia("(max-width: 801px)")

document.querySelector('#title-img').addEventListener('click', e => {
    // console.log(e.target);
    if(breakPointMb.matches) {
        changImg()
    }
},false);


//   $("document").ready(function() {
//         $("#title-img")
//             .click(function() {
//                 if ( $(this).data('active') ) {
//                     $(this).attr('src', './images/portfolio7.svg');
//                     $(this).data('active', false);
//                   } else {
//                     $(this).attr('src', './images/portfolio0.svg');
//                     $(this).data('active', true);
//                   }
//             })
//     });


















