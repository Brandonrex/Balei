import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" className="min-h-screen bg-[#F5F3EE]">
          Hero
        </section>

        <section id="servicios" className="min-h-screen bg-white">
          Servicios
        </section>

        <section id="proyectos" className="min-h-screen bg-[#F5F3EE]">
          Proyectos
        </section>

        <section id="nosotros" className="min-h-screen bg-white">
          Nosotros
        </section>

        <section id="contacto" className="min-h-screen bg-[#F5F3EE]">
          Contacto
        </section>
      </main>
    </>
  )
}

export default App