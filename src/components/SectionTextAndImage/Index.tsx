import aligner from '/New-Aligner.png'
import Botao from '../button/Index'

export default function SectionAcademy(){
    return (
        <section className=" flex flex-col lg:flex-row items-center justify-center box-border bg-img-dark" >
            <div className='w-full max-w-[1450px] xl:p-[95px] xl:flex xl:justify-around '>
                
                <div className='xl:max-w-[600px] px-5 py-12 md:px-[5%] xl:px-0 xl:py-0 '>
                    <span className='text-2xl'>Entendi! E agora,</span>
                    <h1 className=" min-h-[165px] sm:min-h-[0px] md:min-h-[85px] xl:min-h-[45px] mb-5 text-4xl font-bold  text-gradient ">
                        Como faço para me tornar um credenciado New Aligner?
                    </h1>

                    <div className='flex flex-col gap-3'>
                        <div>
                        <h2 className='text-xl font-semibold'>
                                1º Passo: Envie seus dados.
                            </h2>
                            <p className='text-base'>
                                Envie uma mensagem para a New Aligner no formulário de contato;
                            </p> 
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold'>
                                2º Passo: Pagamento
                            </h2>
                            <p className='text-base'>
                                Após se inteirar de 100% dos detalhes e enviar seus dados, realize o pagamento em nossa plataforma;
                            </p>
                        </div>
                        
                        <div className='mb-7'>
                            <h2 className='text-xl font-semibold'>
                                Agora você é um New Aligner Expert!
                            </h2>
                            <p className='text-base'>
                                Agora você faz parte do grupo de profissionais que decidiram revolucionar suas rotinas clínicas com a Ortodontia Digital. O acesso às aulas aulas online já estará liberado para você.
                            </p>
                        </div>
                        <Botao>
                            Quero me credenciar
                        </Botao>
                    </div>
                    
                </div>

                <div className='flex justify-center items-center  mx-auto mb-10 ' data-aos="zoom-out" data-aos-duration="1500">
                    <img src={aligner} alt="" className='w-full max-w-xl ' />
                </div>
            </div>
        </section>
    )
}