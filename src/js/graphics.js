import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Fancybox } from "@fancyapps/ui";

export function graphics() {
    const anig = gsap.timeline()
    anig.from('#Graphics h2', { xPercent:100, autoAlpha: 0}, '<')
        
        
       
    
    // ul 요소들의 애니메이션을 동시에 처리하는 timeline
    const ulAni = gsap.timeline();
    ulAni.from('#Graphics ul.column', { xPercent:600, autoAlpha: 0}, '<');
    ulAni.from('#Graphics ul.column2', { xPercent:800, autoAlpha: 0}, '<');
    ulAni.from('#Graphics ul.column3', { xPercent:1000, autoAlpha: 0}, '<');

    

    anig.add(ulAni);
    
    ScrollTrigger.create({
        animation: anig,
        trigger: '#Graphics',
        start: 'top top',
        end: '+=5000',
        scrub: true,
        pin: true,
        anticipatePin: 1
    });
    


    // gsap.utils.toArray('.img_box').forEach(function (imgBox) {
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: imgBox,
    //             start: '50% 100%',
    //             toggleClass: { 'targets': imgBox, className: 'active' },
    //             scrub: 1
    //         }
    //     })
    // })
    // gsap.utils.toArray('.img_text').forEach(function(imgText){
    //     gsap.timeline({scrollTrigger:{
    //         trigger: imgText,
    //         start:'50% 90%',
    //         end:'100% 0%',
    //         toggleClass:{'targets':imgText,className:'active'},
    //         scrub:1
    //     }})
    // })
    Fancybox.bind("[data-fancybox]", {

    });


}


