

export default function SectionVideo() {
    return (
        <section className="w-full mt-5 py-10 md:py-14 xl:py-20 px-5 md:px-[5%] flex flex-col lg:flex-row lg:gap-4 xl:gap-16 items-center" data-aos="fade-up" data-aos-duration="1500">
            <div className="w-full lg:w-1/2 flex justify-center 2xl:justify-end box-border" >
                <div className="lg:max-w-[600px] ">
                    <h1 className="min-h-[165px] sm:min-h-[0px] md:min-h-[85px] xl:min-h-[90px] text-4xl font-bold text-gradient mb-4">
                        Ser um credenciado é ser New Aligner Expert!
                    </h1>

                    <div className="flex flex-col gap-2 text-[18px] ">
                        <p>
                            Tudo necessário para abrir as portas do seu consultório para a Ortodontia Digital está aqui, no credenciamento para se tornar um New Aligner Expert!
                        </p>
                        <p>
                            Ser um doutor New Aligner Expert não é apenas um título, significa ser parte de um importante movimento de democratização do acesso à Ortodontia Digital, a tranquilidade de estar amparado por profissionais capacitados e um Planning Center próprio, ao oferecer o tratamento com alinhadores para seus pacientes.
                        </p>
                        <p>
                            Nós da New Aligner não queremos apenas vender um produto, queremos firmar uma parceria.
                        </p>
                        <p>
                            Descendo a página vamos mostrar vantagens, diferenciais, procedimentos e muito mais do nosso produto, e o porque você pode se sentir seguro em iniciar sua jornada conosco.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="w-full lg:w-1/2 flex  flex-col items-center 2xl:items-start mt-8">
                <h1 className="max-w-[570px] text-3xl font-bold mb-8 text-center">
                        Ortodontia Digital não é futuro, é PRESENTE.
                </h1>
                <div className="w-full lg:min-h-350px] flex justify-center items-center video " data-aos="flip-right" data-aos-duration="1500" data-aos-delay="100">
                    
                    <iframe className="w-full lg:w-[100%] h-[190px] md:h-[350px] lg:h-[235px] xl:h-[300px] " src="https://www.youtube.com/embed/CusX3r5Lgl0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
        </section>
    )
}