export default function Hero() {
  return (
    <section className="py-20" id="hero" data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Hi, I’m Simon
          </h1>
          <p className="text-lg mb-6 text-zinc-300">
            A passionate Frontend Developer and UI/UX Designer with a sharp eye
            for clean design and seamless user experiences. I specialize in
            building responsive, modern websites and mobile apps that don’t just
            look good — they perform.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#02DAF8] hover:bg-[#02c2e0] text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Let’s Work Together
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/images/simon.png"
            alt="Simon"
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-[#02DAF8]"
          />
        </div>
      </div>
    </section>
  );
}
