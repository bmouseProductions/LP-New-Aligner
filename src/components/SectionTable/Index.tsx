import TableDesktop from "../tableDesktop/Index";
import TableMobile from "../tableMobile/Index";


export default function SectionTable(){
    return (
        <section className="py-10 md:py-14 xl:py-20 px-5 md:px-[5%] lg:px-[95px]">
            <div className="hidden md:block">
                <TableDesktop />
            </div>

            <div className="md:hidden">
                <TableMobile />
            </div>
            
        </section>
    )
}