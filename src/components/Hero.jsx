// src/components/Hero.jsx

import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import profile from "../assets/profile.jpeg"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-transparent">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT SIDE */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-white"
          >
            AVIJIT
          </motion.h1>

          {/* Typing Animation */}
          <div className="mt-6">

            <TypeAnimation
              sequence={[
                'Corporate Governance',
                2000,
                'Company Law',
                2000,
                'Corporate Compliance',
                2000,
                'Sustainability',
                2000,
                'ESG & CSR',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400 text-2xl md:text-4xl font-semibold"
            />

          </div>

          {/* Description */}
          <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
            Aspiring Company Secretary passionate about Governance,
            Sustainability, ESG practices, Compliance, Ethical Business
            Leadership and Corporate Law.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap">

            <a
              href="/avijit_resume.pdf"
              download
              className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 hover:-translate-y-1 transition duration-300 shadow-lg shadow-cyan-500/30"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-cyan-400 text-white hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative group">

            {/* Glow Background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            {/* Glass Card */}
            <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 p-3 rounded-[40px] shadow-2xl">

              <img
                src={profile}
                alt="profile"
                className="
                  w-[300px]
                  md:w-[420px]
                  h-[400px]
                  md:h-[520px]
                  object-cover
                  rounded-[32px]
                  hover:scale-[1.02]
                  transition
                  duration-500
                "
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero