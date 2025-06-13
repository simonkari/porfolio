import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20" id="hero" data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#02DAF8] uppercase tracking-wider text-sm font-normal">
            Frontend Developer & UI/UX Designer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-normal">
            Hi, I’m Simon
          </h1>
          <p className="text-lg mb-6 text-zinc-300 font-normal">
            I build responsive websites and mobile apps with clean design and smooth experiences.
            Let's bring your idea to life with modern, performant code and UX that delights.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-[#02DAF8] hover:bg-[#02c2e0] text-black px-6 py-3 rounded-lg font-normal transition"
          >
            Let’s Work Together <ArrowRight className="ml-2" size={16} />
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <img
            src="/images/simon.png"
            alt="Simon"
            className="w-full h-auto object-cover rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
