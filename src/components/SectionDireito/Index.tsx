import Acordion from "../accordion/Index";

export default function SectionDireito(){

    const divAcordion1 = [
        {
            id:"accordion1" ,
            title:"Material para ponto de venda" ,
            text:"Material PDV (ponto de venda) para a recepção da sua clínica ou consultório: display porta flyers, flyers informativos e apresentação de vendas. Disponível no Kit Marketing.",
            style:"w-[100%] md:w-[450px] rounded" //syles gerais
        },

        {
            id:"accordion2" ,
            title:"Acesso à New Aligner Academy" ,
            text:"10h+ de conteúdo online para acessar a hora que quiser. Você também conta com lives semanais repleto de dicas clínicas importantes. Disponível no Kit Marketing.",
            style:"w-[100%] md:w-[450px] rounded" //syles gerais
        },

        {
            id:"accordion3" ,
            title:"Apresentação de vendas digital" ,
            text:"Um arquivo para te ajudar a fechar mais vendas no consultório, mostrando para os pacientes informações de forma clara sobre o tratamento com New Aligner. Disponível no Kit Marketing.",
            style:"w-[100%] md:w-[450px] rounded" //syles gerais
        },
    ]

    const divAcordion2 = [
        {
            id:"accordion5" ,
            title:"Macromodelo New Aligner" ,
            text:"Objeto importante para fechar a venda. Mostre além da teoria como é, fisicamente, o New Aligner para seu paciente. Disponível apenas no Kit Start.",
            style:"w-[100%] md:w-[450px] rounded" //syles gerais
        },

        {
            id:"accordion7" ,
            title:"Materiais para Marketing Digital" ,
            text:"Conte com a gente para atrair mais pacientes com artes e vídeos para suas redes sociais. Oferecemos também um banco de imagens próprio. Disponível no Kit Marketing.",
            style:"w-[100%] md:w-[450px] rounded" //syles gerais
        },
    ]

    return (
        <section className="max-w-[1400px] 2xl:max-w-[1450px] py-10 md:py-14 xl:py-20 px-5 md:px-[5%] m-auto text-[18px]">
            <div>
                <h1 className="text-4xl font-bold leading-[2.9rem] text-gradient mb-4">
                    O que tenho direto depois de me tornar um New Aligner Expert?
                </h1>
                <p >
                    Ao realizar a compra do seu primeiro caso, você ganha o <strong>Kit Marketing</strong>, que tem tudo que você precisa para iniciar sua jornada. É possível também fazer o upgrade para o <strong>Kit Start</strong>. Confira o que estará disponível para você:
                </p>
            </div>
        
            <div className="w-full mt-5 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-2 lg:gap-5 ">
                <div className="flex flex-col gap-2 lg:gap-3">
                    {divAcordion1.map( (accordion, index) =>
                        <Acordion key={index} id={accordion.id} title={accordion.title} text={accordion.text} style={accordion.style} />
                    )}
                </div>

                <div className="flex flex-col gap-2 lg:gap-3">
                    {divAcordion2.map( (accordion, index) =>
                        <Acordion key={index} id={accordion.id} title={accordion.title} text={accordion.text} style={accordion.style} />
                    )}
                </div>
            </div>
        </section>
    )
}