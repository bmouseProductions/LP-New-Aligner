import dra from '../../assets/3.png'

export default function SectionTornarCredenciado(){
    return (
        <section className=" flex flex-col lg:flex-row items-center justify-center  bg-img-dark">
            <div className='w-full max-w-[1450px]  xl:px-[95px] lg:flex xl:justify-around '>
                <div className='px-5 py-12 md:px-[5%] xl:px-0  lg:max-w-md '>
                    <h1 className="text-4xl font-bold leading-[2.9rem] text-gradient mb-5">
                    O que é esse tal de New Aligner Academy?
                    </h1>

                    <p>
                        O New Aligner Academy é nossa divisão de aprendizagem, liderada pelo professor Dr. Vicente Pacheco. Assista todas as aulas online para saber cada detalhe sobre o tratamento com alinhadores, e acesse de onde e quantas vezes quiser sempre que surgir uma dúvida. Um material completo com mais de 10 horas de conteúdo e expertise de mestres em ortodontia.
                    </p>
                    
                </div>

                <div className='w-full flex items-end justify-end '>
                    <img src={dra} alt="" className='w-full  max-w-md ' />
                </div>
            </div>
        </section>
    )
}