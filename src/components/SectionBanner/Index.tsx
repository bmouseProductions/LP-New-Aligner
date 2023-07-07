import banner from '../../assets/banner.webp'
import logo from '../../assets/logo.svg'
import Botao from '../button/Index'

export default function SectionBanner() {
    return(
        <section className="w-full min-h-[90vh] 2xl:min-h-full pt-[40px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[#326ef5] md:from-30% to-[#04083a] md:to-70%">
            <div className='flex flex-col lg:flex-row-reverse md:justify-center md:items-center'>
                <img src={banner} alt="banner divulgação new aligner" className='w-auto  md:max-w-full lg:max-w-[550px] xl:max-h-[700px] '/>
                <div className='w-full mt-5 md:mt-10 px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center'>
                    <div className='w-full flex flex-col'>
                        <img src={logo} alt="" />
                        <span className='w-full text-[20px] font-normal text-center  text-white border-[2px] rounded-xl'>Seja um parceiro Zoomies!</span>
                    </div>
                    <h2 className='mt-4 font-semibold text-white text-center md:text-start mb-10 md:text-[30px]'>Obtenha um lucro bruto de até 70% revendendo produtos Zoomies!</h2>
                    <Botao>
                        Quero me credenciar
                    </Botao>
                </div>
            </div>
        </section>
    )
}