import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function intro() {

  gsap.to(".icon", {
    xPercent: 600,
    duration: 4,
    ease: 'none',
    pin: true,
    repeat:-1
  })
   
}
