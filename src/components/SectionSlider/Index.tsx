
import Slider from "../swiper/Index";

import tessmann from '../../assets/tiago-tessmann.png'


export default function SectionSlide(){
    const slideContent = [
        'Texto do Slide 1', 
        'Texto do Slide 2', 
        'Texto do Slide 3', 
        <img key={1} src={tessmann} alt="imagem tiago tessmann" className="w-auto h-[300px]"/>
    ];
        
    const slideCount = slideContent.length;
    return (
        <section>
            <Slider
                slideContent= {slideContent}
                slideCount= {slideCount}
            />
        </section>
    )
}