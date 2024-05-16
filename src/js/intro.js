import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Parallax from 'parallax-js';



export function intro() {
  const ani1 = gsap.timeline();

  ani1.from('#header', { opacity: 0, onComplete: hideHeader})
      .from(".preloader-c.c-1", { scale: 0 })
      .from(".preloader-c.c-2", { scale: 0 })
      .from(".preloader-c.c-3", { scale: 0 })
      .from(".preloader-c.c-4", { scale: 0 })
      .to(".preloader-c.c-1", { scale: 100 })
      .to(".preloader-c.c-2", { scale: 100 })
      .to(".preloader-c.c-3", { scale: 100 })
      .to(".preloader-c.c-4", { scale: 100 })
      .to(".preloader-c-area", { opacity: 0, onComplete:showHeader,hideGsap });

  scrollTo({
    animation: ani1,
    duration: 3,
    scrub: true,
    pin: true,
    ease: 'none',
    anticipatePin: 1
  });
  

  gsap.utils.toArray('.intro_line').forEach(function(introline){
    gsap.timeline()
        .from(introline, { width:0, opacity: 0, duration: 1 })
        .to(introline, { width:'100%', opacity: 1, duration: 1});
});
gsap.utils.toArray('.intro_line2').forEach(function(introline2){
  gsap.timeline()
      .from(introline2, { width:0, opacity: 0, duration: 1 })
      .to(introline2, { width:'100%', opacity: 1, duration: 1});
});
gsap.utils.toArray('.intro-text').forEach(function(introtext){
  gsap.timeline()
      .from(introtext, {  opacity: 0, duration: 1 })
      .to(introtext, {  opacity: 1, duration: 1});
});

  ani1.eventCallback("onUpdate", increaseLoadingNumber);
  
  
  

}

function increaseLoadingNumber() {
  var loadingNumber = document.getElementById('loading-number');
  var number = parseInt(loadingNumber.innerText);
  if (number < 100) {
    number++;
    loadingNumber.innerText = number;
  }
}


  var scene = document.getElementById('js-scene');
  var parallax = new Parallax(scene);


function hideGsap(){
  var preloader =document.querySelector('.preloader-c-area')
  preloader.style.top='-';
}

function hideHeader() {
  // 헤더 요소 선택
  var header = document.querySelector('header');
  var main = document.querySelector('main');

  // 헤더 숨기기
  header.style.display = 'none';
  main.style.display='none'
}

function showHeader() {
  // 헤더 요소 선택
  var header = document.querySelector('header');
  var main = document.querySelector('main');

  // 헤더 보이기
  header.style.display = 'block';
  main.style.display='block';

}


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};