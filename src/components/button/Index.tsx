import { ReactElement } from "react"


interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <button className="w-full md:max-w-[22.8rem] py-5 rounded font-bold text-black text-[26px] bg-[#fff] shadow-[0px_0px_20px_#0dd0ee] hover:bg-[#2358c8] hover:text-white hover:shadow-[0px_0px_20px_#0dd0ee] transition-all duration-200">
            
            <a href="#form" > 
                {children}
            </a>
            
        </button>
    )
}