import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function intro() {
  const ani1=gsap.timeline()
  ani1.from(".preloader-c.c-1",{scale:0})
      .from(".preloader-c.c-2",{scale:0})
      .from(".preloader-c.c-3",{scale:0})
      .from(".preloader-c.c-4",{scale:0})
      .to(".preloader-c.c-1",{scale:100,opacity:1})
      .to(".preloader-c.c-2",{scale:100,opacity:1})
      .to(".preloader-c.c-3",{scale:100,opacity:1})
      .to(".preloader-c.c-4",{scale:100,opacity:1})
      .to(".preloader-c-area",{opacity:0})
      scrollTo({
        animation:ani1,
        duration:14,
        scrub:true,
        pin:true,
        ease:'none',
        anticipatePin:1
      })

  gsap.to(".icon", {
    xPercent: 600,
    duration: 20,
    ease: 'none',
    pin: true,
    repeat: -1
  })
}