
import  Splide  from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function splide() {

    new Splide('#splide',{
        type:"loop",
        drag: false,
        autoWidth: true,
        gap:30,
        pagination: false,
        // focus:'center',
        arrows: false,
        autoScroll:{
            speed:2,
        },
    }).mount({ AutoScroll });
  
}
