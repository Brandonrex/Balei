import { useState } from "react"
import baleiLogo from "../assets/images/BALEI.png"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#F5F3EE]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="BALEI - Inicio"
        >
          <img
            src={baleiLogo}
            alt="Logo BALEI"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />

          <span className="text-2xl font-semibold tracking-tight text-[#1C211D] sm:text-3xl">
            BALEI
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4F544E] transition hover:text-[#1C211D]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden xl:inline-flex items-center gap-3 bg-[#1C211D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#B48455] hover:shadow-lg"
        >
          Solicitar cotización
          <span className="transition-transform duration-300 hover:translate-x-1">
            →
          </span>
        </a>

        {/* Mobile / tablet actions */}
        <div className="flex items-center xl:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#1C211D]/10 text-[#1C211D] transition hover:bg-[#1C211D] hover:text-white"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet dropdown */}
      {menuOpen && (
        <div className="border-t border-black/5 bg-[#F5F3EE] xl:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#4F544E] transition hover:text-[#1C211D]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[#1C211D] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#B48455]"
            >
              Solicitar cotización
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar