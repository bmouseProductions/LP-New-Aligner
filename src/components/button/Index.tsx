import { ReactElement } from "react"


interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <button className="w-full md:max-w-[22.8rem] py-5 rounded font-bold text-white text-[26px] bg-[#e70000] shadow-[0px_0px_20px_#e7004c] hover:bg-[#f17908] hover:shadow-[0px_0px_20px_#f17908] transition-all duration-200">
            
            <a href="#form" > 
                {children}
            </a>
            
        </button>
    )
}