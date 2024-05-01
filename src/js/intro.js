import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function intro() {

  let itemWid = 0;
  let dir = -1;
  let speed = 1;
  let loc = 1;
  let liWidth = 0;

  $('#Home ul li:not(.etc)').each(function () {
    let w = $(this).innerWidth();
    liWidth += w;
  });


  function flowBanner(params) {
    loc += speed * dir;
    console.log(loc);

    if (loc <= -liWidth) {
      loc = 0;
    } else if (loc >= 0) {
      loc = -liWidth;
    }

    $('#Home ul').css({ 'left': loc });
  }
  setInterval(flowBanner, 10);

  $('#Home ul li').mouseenter(function () {
    speed = 0
  })

  $('#Home ul li').mouseleave(function () {
    speed = 1
  })
   
  gsap.to(".icon",{

    x:2000,
    duration:4,
    ease:'none',
    pin:true,
    loop:true
  })
   
}
