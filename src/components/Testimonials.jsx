export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Mwangi",
      role: "CEO, CreativeHub",
      feedback:
        "Working with Simon was an absolute pleasure. His design intuition and attention to detail are unmatched.",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Brian Otieno",
      role: "Founder, TechBridge",
      feedback:
        "Simon brought our mobile app idea to life! His communication and execution were top-notch.",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "Linda Wambui",
      role: "Product Manager, SwiftApps",
      feedback:
        "He’s a true professional — organized, creative, and always delivers beyond expectations.",
      image: "/images/testimonial3.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      data-aos="fade-up"
      className="py-20 px-6 bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-normal tracking-tight mb-8 text-[#02DAF8]">
          Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#02DAF8]/20 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#02DAF8]/30"
                />
                <div>
                  <h3 className="text-[#02DAF8] text-lg font-normal">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-normal">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm font-normal">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
