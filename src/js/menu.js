import gsap from "gsap";

import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // 추가
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // 플러그인 등록



export function menu() {
    const headerToggle=document.getElementById('headerToggle')
    const headerNav=document.querySelector('.header_nav')
    
    if(headerToggle){
        headerToggle.addEventListener("click",()=>{
            headerNav.classList.toggle("show");
            headerToggle.getAttribute("aria-expanded") === 'true'
            ? headerToggle.setAttribute("aria-expanded","false")
            : headerToggle.setAttribute("aria-expanded","true")
        });
    }
  

    
}
