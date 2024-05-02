
import  Splide  from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function splide() {

    new Splide('#splide1',{
        type:"loop",
        drag: false,
        autoWidth: true,
        gap:-100,
        pagination: false,
        // focus:'center',
        arrows: false,
        autoScroll:{
            speed:4,
        },
    }).mount({ AutoScroll });
  
}
