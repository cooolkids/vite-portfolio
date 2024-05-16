import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function about() {
    const ania = gsap.timeline()
    
    ania.from('#About .item_img',{x:innerWidth*1})
        .from('#About .t1', { x: innerWidth * 1 })
        .from('#About .t2', { x: innerWidth * 1 })
        .from('#About .t3', { x: innerWidth * 1 })
        .to('#About .t1', {
            opacity: 0
        })
        .to('#About .t2', {
            opacity: 0
        })
        .to('#About .t3', {
            opacity: 0
        })
        .to('#About .item_img',{
            scale:0
        })

    ScrollTrigger.create({
        animation: ania,
        trigger: '#About',
        start: 'top top',
        end: '+=4000',
        scrub: true,
        pin: true,
        anticipatePin: 1
    })



    const ania2 = gsap.timeline()
    ania2.from('#About2 .t4', { autoAlpha: 0, duration: 1, y: 50,onComplete:showHeader }, '+=1')
        .from('#About2 .t5', { autoAlpha: 0, duration: 1, y: 50 }, '+=1')
        .from('#About2 .t6', { autoAlpha: 0, duration: 1, y: 50 }, '+=1')


    ScrollTrigger.create({
        animation: ania2,
        trigger: '#About2',
        start: 'top top',
        end: '+=3000',
        scrub: true,
        pin: true,
        anticipatePin: 1,
    })




    gsap.registerPlugin(ScrollTrigger)
    const horSection = gsap.utils.toArray('.about-item')
    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#AboutMe",
            start: 'top top',
            end: '+=4000',
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    })


}
function showHeader() {
    // 헤더 요소 선택
    var header = document.querySelector('header');
    // 헤더 숨기기
    header.style.display = 'block';
  }
  