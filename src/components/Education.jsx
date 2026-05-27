// src/components/Education.jsx

import { motion } from 'framer-motion'

const educationData = [
  {
    year: "2026",
    title: "ICSI Professional Programme",
    subtitle: "Corporate Governance & Compliance",
  },

  {
    year: "2025",
    title: "B.Com Graduate",
    subtitle: "University of Calcutta",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-28 px-6 bg-transparent">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education Timeline
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        <div className="relative border-l border-cyan-400/30 ml-6">

          {educationData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >

              <div className="absolute -left-[52px] top-2 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></div>

              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8">

                <span className="text-cyan-400 font-semibold text-sm">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-3 text-lg">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Education