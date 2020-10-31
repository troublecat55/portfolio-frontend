/************** GSAP and else***************/

// import ScrollMagic from 'scrollmagic'
// import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
// import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic'
// import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import {breakPointPc} from './portfolio-rotate.js';
console.log(breakPointPc)
// const breakPointPc = window.matchMedia("(min-width: 801px)")

gsap.from('#sub-logo ',{opacity:0, delay:1.5, duration:1.5, ease:'Power4.easeInOut'})
// gsap.from('.lang-btn ',{opacity:0, delay:1, duration:1, ease:'Power4.easeInOut'})
// gsap.fromTo('.menu-btn ',{opacity:0},{opacity:1, delay:1, duration:1, ease:'Power4.easeInOut'})
gsap.from('.intro ',{opacity:0, delay:1.5, duration:1.5, ease:'Power4.easeInOut'})
gsap.from('.colophon ',{opacity:0, delay:1.5, duration:1.5, ease:'Power4.easeInOut'})



if(!breakPointPc.matches) {
    //if bp matches title-bg opacity0 in home.scss
    gsap.from('#title-bg ',{opacity:0, duration:1.5, ease:'Power4.easeInOut'})
    gsap.to('#title-bg ',{opacity:0, delay:1, duration:1.5, ease:'Power3.easeInOut'})
    gsap.from('#title-img ',{ opacity:0, duration:0.5, ease:'Power4.easeInOut'})
}


if(breakPointPc.matches) {
    gsap.from('#title-img ',{ opacity:0,delay:1.5,y:100, duration:0.5, ease:'Power4.easeInOut'})
    gsap.from('.sidetext-ability ',{ opacity:0, delay:1.5,y:100, duration:0.5, ease:'Power2.easeInOut'})
    gsap.from('.currentLearning-content  ',{ opacity:0, delay:1.5,y:100, duration:0.5, ease:'Power4.easeInOut'})
    gsap.from('.current-ability',{ opacity:0, delay:1.5,y:100, duration:0.5, ease:'Power4.easeInOut'})
    gsap.from('.ad-marker-area  ',{ opacity:0, delay:1.5,y:100, duration:0.5, ease:'Power4.easeInOut'})
    // gsap.from('.title-btn ',{ opacity:0,delay:1,y:100, duration:0.5, ease:'Power4.easeInOut'})
}


