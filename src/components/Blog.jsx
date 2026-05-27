import { motion } from 'framer-motion'

const blogs = [
  {
    title: "The Importance of Corporate Governance",
    desc: "How strong governance frameworks create transparency, accountability and sustainable business growth.",
    date: "May 2026",
  },

  {
    title: "ESG & Sustainability in Modern Business",
    desc: "Understanding the growing importance of Environmental, Social and Governance practices in corporations.",
    date: "April 2026",
  },

  {
    title: "Corporate Compliance & Ethical Leadership",
    desc: "Why ethical leadership and compliance systems are essential for long-term organizational success.",
    date: "March 2026",
  },
]

const Blog = () => {
  return (
    <section className="py-28 px-6 bg-transparent">

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
            Insights & Articles
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-500"
            >

              {/* Date */}
              <span className="text-cyan-400 text-sm font-semibold">
                {blog.date}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {blog.desc}
              </p>

              {/* Button */}
              <button className="mt-8 text-cyan-400 font-semibold hover:translate-x-2 transition duration-300">
                Read More →
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Blog