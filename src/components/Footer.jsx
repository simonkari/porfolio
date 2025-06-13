import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d0d0d] py-10 px-6 relative font-normal">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        {/* Logo with hover animation */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-8 transition-transform duration-300 hover:scale-110 cursor-pointer"
          onClick={scrollToTop}
        />

        {/* Social Icons */}
        <div className="flex space-x-6 mt-2">
          <a
            href="https://github.com/simonkari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#02DAF8] transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/simon-kariithi-122543234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#02DAF8] transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:kariithisimon1715@gmail.com"
            className="text-gray-400 hover:text-[#02DAF8] transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center font-normal">
          &copy; {new Date().getFullYear()} Simon. Built with 💙 using React & Tailwind CSS.
        </p>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute right-6 bottom-6 bg-[#02DAF8] p-2 rounded-full shadow-lg hover:bg-[#02b7d4] transition"
      >
        <ArrowUp size={18} className="text-white" />
      </button>
    </footer>
  );
}
