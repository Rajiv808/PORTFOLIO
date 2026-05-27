// src/components/Navbar.jsx

import { Menu } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          AVIJIT SADHUKHAN
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-white">

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400"
          onClick={() => setOpen(!open)}
        >
          <Menu size={30} />
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden bg-[#0b1120] border-t border-white/10 px-6 py-6">

          <ul className="space-y-6 text-white">

            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#education" onClick={() => setOpen(false)}>
                Education
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar