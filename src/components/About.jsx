// src/components/About.jsx

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-transparent">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:border-cyan-400/30 transition duration-500"
          >

            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Professional Summary
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              I am an aspiring Company Secretary passionate about Corporate
              Governance, Sustainability, ESG practices, Compliance and Ethical
              Corporate Leadership. I aim to contribute towards transparent,
              responsible and sustainable business ecosystems through strong
              governance frameworks and strategic compliance management.
            </p>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:border-cyan-400/30 transition duration-500"
          >

            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Education & Interests
            </h3>

            <div className="space-y-6 text-gray-300">

              <div>
                <h4 className="text-xl font-semibold text-white">
                  University of Calcutta
                </h4>

                <p>B.Com Graduate</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">
                  ICSI Professional Programme
                </h4>

                <p>Institute of Company Secretaries of India</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">
                  Areas of Interest
                </h4>

                <p>
                  Corporate Law, ESG, CSR, Governance Strategy,
                  Stakeholder Equity and Ethical Business Practices.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About