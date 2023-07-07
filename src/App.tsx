import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"
import SectionBanner from "./components/SectionBanner/Index"
import SectionVideo from "./components/SectionVideo/Index"
import SectionOqueE from "./components/SectionOqueE/Index"
import SectionTornarCredenciado from "./components/SectionCredenciado/Index"
import SectionDireito from "./components/SectionDireito/Index"
import SectionAcademy from "./components/SectionAcademy/Index"



function App() {
  return (
    <>
      <main className="w-full bg-[#04083a] text-white">
        <SectionBanner />
        <SectionVideo />
        <SectionOqueE />
        <SectionTornarCredenciado />
        <SectionDireito />
        <SectionAcademy />
        <BackTop />
      </main>

      <Footer />

    </>
  )
}

export default App
