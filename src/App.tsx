import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"
import SectionBanner from "./components/SectionBanner/Index"
import SectionVideo from "./components/SectionVideo/Index"
import SectionOqueE from "./components/SectionOqueE/Index"
import SectionTornarCredenciado from "./components/SectionTextAndImage/Index"
import SectionDireito from "./components/SectionDireito/Index"
import SectionAcademy from "./components/SectionAcademy/Index"
import SectionTable from "./components/SectionTable/Index"
import SectionSlide from "./components/SectionSlider/Index"
import SectionForm from "./components/SectionForm/Index"
//import Whatsapp from "./components/buttonWhatsapp/Index"

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>
      <main className="w-full bg-[#04083a] text-white">
        <SectionBanner />
        <SectionVideo />
        <SectionOqueE />
        <SectionTornarCredenciado />
        <SectionDireito />
        <SectionAcademy />
        <SectionTable />
        <SectionSlide />
        <SectionForm />
        <BackTop />
      </main>

      <Footer />

    </>
  )
}

export default App
