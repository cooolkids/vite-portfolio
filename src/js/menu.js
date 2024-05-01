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
    // 스크롤에 따라 section에 지정한 색으로 변경
    gsap.utils.toArray('.item').forEach((item) => {
        const color = item.getAttribute('data-bgColor');
        console.log(color);

        gsap.to("body", { // 'data-bgColor'는 잘못된 선택자
            scrollTrigger: {
                trigger: item,
                start: "top 50%",
                end: "bottom 1%",
                onEnter: () => {
                    gsap.to("body", { backgroundColor: color, duration: 1.5 });
                },
                onEnterBack: () => {
                    gsap.to("body", { backgroundColor: color, duration: 1.5 });
                },
            },
        });
    });
//       링크 클릭 위치로 스크롤
//    네비게이션 링크 배열
// const links = gsap.utils.toArray('nav ul li a');

// links.forEach((link) => {
//     const href = link.getAttribute('href');
//     const elem = document.querySelector(href); // 링크의 대상 섹션 찾기

//     if (elem) { // 섹션이 유효한지 확인
//         // 특정 section이 화면 중앙에 위치하면 해당 Nav 링크 활성화
//         ScrollTrigger.create({
//             trigger: elem,
//             start: "top top", // 스크롤 트리거 시작 위치
//             end: "bottom center", // 스크롤 트리거 끝 위치
//             toggleClass: { targets: link, className: 'on' }, // 링크에 클래스 추가/제거
//         });
//     } else {
//         console.warn(`Element with href ${href} not found`); // 대상 섹션이 없을 경우 경고
//     }
// });

    $('nav ul li a').click(function(){
        $('nav ul li a').removeClass('on')
        $(this).addClass('on')
    })
}
