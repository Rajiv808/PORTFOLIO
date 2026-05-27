import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-transparent">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact Me
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg shadow-2xl"
        >

          <div className="space-y-8">

            {/* Email */}
            <div className="flex items-center gap-5">

              <div className="bg-cyan-400/10 p-4 rounded-xl">
                <Mail className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Email
                </h3>

                <p className="text-gray-300">
                avijitsadhukhan200@gmail.com
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">

              <div className="bg-cyan-400/10 p-4 rounded-xl">
                <Phone className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Phone
                </h3>

                <p className="text-gray-300">
                +91 8697857760

                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact