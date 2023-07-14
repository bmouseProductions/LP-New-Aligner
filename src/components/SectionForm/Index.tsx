import { Formulario } from "../formulario/Index";


export default function SectionForm(){
    return (
        <section className="" >
            <div className="bg-img-patriot" data-aos="fade-left" data-aos-duration="1500">
                <div className="w-full h-full py-10 md:py-14 xl:py-20 px-5  md:px-[5%] lg:px-[95px] md:min-h-[300px] lg:min-h-[400px] flex items-center justify-around bg-[#0000007c] ">
                    <div className="max-w-[1400px] w-full h-full flex items-center justify-end">
                       <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-right ">Com muito orgulho, <br /> somos uma empresa <br /> 100% nacional!</h1> 
                    </div>
                    
                </div>
            </div>
            <div className="py-10 md:py-14 xl:py-20 px-5 md:px-[5%] lg:px-[95px] bg-img-dark" data-aos="fade-right" data-aos-duration="1500">
                <div className="max-w-[1400px] flex flex-col lg:flex-row items-center lg:justify-between lg:gap-10 m-auto ">
                    <div className="w-full lg:w-auto">
                        <h1 className="text-4xl xl:text-6xl font-bold  text-gradient mb-5">O que está faltando para se tornar um credenciado?</h1>
                        <p className="mb-5 text-2xl font-semibold">
                            Preencha o formulário ao lado que um de nossos consultores entrará em contato para maiores informações o mais breve possível.
                        </p>
                    </div>
                    <div className="w-full lg:1/2 flex flex-col items-center lg:items-end" id='form'>
                        <Formulario />
                        <blockquote className="mt-5 md:max-w-[600px] lg:max-w-[400px] xl:max-w-[600px] ">
                            Fique tranquilo, a New Aligner tem compromisso com os seus dados e garantimos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}