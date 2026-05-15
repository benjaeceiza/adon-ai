


import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Plans from "./components/plans/Plans";
import Process from "./components/process/Process";
import SectionDivider from "./components/section-divider/SectionDivider";
import Services from "./components/services/Services";
import WhatsAppButton from "./components/wts-button/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <SectionDivider words={['COMUNICAR', 'PLANIFICAR', 'CRECER']} />
      <Services />

      <SectionDivider words={['ANALIZAR', 'DISEÑAR', 'EJECUTAR']} />
      <Plans />

      <SectionDivider words={['DIAGNOSTICAR', 'IMPLEMENTAR', 'OPTIMIZAR']} />
      <Process />

      <SectionDivider words={['CONOCER', 'TRABAJAR', 'CRECER']} />
      <About/>
  
      <SectionDivider words={['CREAR', 'CONECTAR', 'IMPULSAR']} />
      <Contact />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;