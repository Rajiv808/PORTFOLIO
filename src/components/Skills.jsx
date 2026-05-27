// src/components/Skills.jsx

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  BriefcaseBusiness,
  Scale,
  Leaf,
  FileText,
  Landmark,
} from 'lucide-react'

const skills = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Corporate Governance",
    desc: "Strong understanding of governance frameworks and ethical business practices.",
  },

  {
    icon: <Scale size={40} />,
    title: "Company Law",
    desc: "Knowledge of legal compliance and corporate law.",
  },

  {
    icon: <BriefcaseBusiness size={40} />,
    title: "Corporate Compliance",
    desc: "Focused on transparent compliance systems.",
  },

  {
    icon: <Leaf size={40} />,
    title: "ESG & Sustainability",
    desc: "Passionate about sustainable business ecosystems.",
  },

  {
    icon: <FileText size={40} />,
    title: "Legal Documentation",
    desc: "Drafting agreements and documentation.",
  },

  {
    icon: <Landmark size={40} />,
    title: "CSR & Ethics",
    desc: "Interest in CSR policies and ethical leadership.",
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-transparent">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Expertise & Skills
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-500"
            >

              <div className="text-cyan-400 mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white">
                {skill.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {skill.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills