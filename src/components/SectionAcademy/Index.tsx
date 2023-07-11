import dra from '../../assets/3.png'
import Botao from '../button/Index'

export default function SectionTornarCredenciado(){
    return (
        <section className=" flex flex-col lg:flex-row items-center justify-center  bg-img-dark">
            <div className='w-full max-w-[1450px]  xl:px-[95px] lg:flex lg:flex-row-reverse xl:justify-around '>
                <div className='px-5 py-12 md:px-[5%] xl:px-0 lg:max-w-md flex flex-col items-center'>
                    <h1 className="min-h-[165px] sm:min-h-[0px] md:min-h-[85px]  text-4xl font-bold  text-gradient mb-5">
                    O que é esse tal de New Aligner Academy?
                    </h1>

                    <p className='mb-10'>
                        O New Aligner Academy é nossa divisão de aprendizagem, liderada pelo professor Dr. Vicente Pacheco. Assista todas as aulas online para saber cada detalhe sobre o tratamento com alinhadores, e acesse de onde e quantas vezes quiser sempre que surgir uma dúvida. Um material completo com mais de 10 horas de conteúdo e expertise de mestres em ortodontia.
                    </p>
                    
                    <Botao>
                        Quero me credenciar
                    </Botao>
                </div>

                <div className='w-full xl:w-1/3 flex justify-center items-center '>
                    <img src={dra} alt="" className='w-full  max-w-md ' />
                </div>
            </div>
        </section>
    )
}