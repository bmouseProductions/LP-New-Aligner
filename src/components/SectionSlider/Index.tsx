
import SliderComponent from "../swiper/Index";



export default function SectionSlide(){
    const slideContent = [
        <iframe className="w-[250px] h-[450px] xl:w-[300px] xl:h-[550px] m-auto  rounded-xl" src="https://youtube.com/embed/sJlabUUzBoo" title="Vídeo depoimento de Paciente New Aligner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}/>,
        <iframe className="w-[250px] h-[450px] xl:w-[300px] xl:h-[550px] m-auto  rounded-xl" src="https://youtube.com/embed/CxqBunNfxL0" title="Vídeo depoimento de Paciente New Aligner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}/>,
        <iframe className="w-[250px] h-[450px] xl:w-[300px] xl:h-[550px] m-auto  rounded-xl" src="https://youtube.com/embed/azEXTT2LglA" title="Vídeo depoimento de Paciente New Aligner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}/>,
        <iframe className="w-[250px] h-[450px] xl:w-[300px] xl:h-[550px] m-auto  rounded-xl" src="https://youtube.com/embed/CRU98Hhi1Kg" title="Vídeo depoimento de Paciente New Aligner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}/>,
    ];
        
    const slideCount = slideContent.length;
    return (
        <section className="w-full pt-5 pb-10 md:pb-14 md:pt-7 xl:py-20 px-5 md:px-[0%] lg:px-[95px] box-border">
            <div className="flex flex-col items-center mb-7">
                <span className="text-xl md:text-2xl font-semibold">Veja a opinião de</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 text-center">Nossos Credenciados e seus Pacientes</h1>
            </div>
            <div className="w-full md:px-[50px]">
                <SliderComponent
                    slideContent= {slideContent}
                    slideCount= {slideCount}
                />
            </div>
            
        </section>
    )
}