import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-transparent">

      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Contact Card - w-fit ensures it wraps content tight */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full sm:w-fit bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 backdrop-blur-lg shadow-2xl"
        >

          <div className="space-y-6 md:space-y-8">

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-5">

              <div className="bg-cyan-400/10 p-3 md:p-4 rounded-xl shrink-0">
                <Mail className="text-cyan-400" size={24} md={28} />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Email
                </h3>
                {/* break-all prevents the email from spilling out on mobile */}
                <p className="text-gray-300 text-sm md:text-base break-all mt-1">
                  avijitsadhukhan200@gmail.com
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-5">

              <div className="bg-cyan-400/10 p-3 md:p-4 rounded-xl shrink-0">
                <Phone className="text-cyan-400" size={24} md={28} />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Phone
                </h3>
                <p className="text-gray-300 text-sm md:text-base whitespace-nowrap mt-1">
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