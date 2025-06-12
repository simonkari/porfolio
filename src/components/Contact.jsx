// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-8 text-[#02DAF8] text-center">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out via email or social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-[#02DAF8] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#02b0c3] transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
