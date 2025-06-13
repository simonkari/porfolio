export default function Projects() {
  const projects = [
    {
      title: "Nike E-Commerce Website",
      description:
        "An e-commerce site designed for Nike shoe collections. Built with React, Tailwind CSS, and Firebase.",
      image: "/images/project1.jpg",
      link: "#",
    },
    {
      title: "Mobile Expense Tracker App",
      description:
        "A cross-platform expense tracking app built with React Native and Firebase. Clean UI and dark mode support.",
      image: "/images/project2.webp",
      link: "#",
    },
    {
      title: "UX Design for Travel App",
      description:
        "Created wireframes and prototypes for a travel booking app using Figma. Focused on clean UX flows.",
      image: "/images/project3.webp",
      link: "#",
    },
  ];

  return (
    <section id="projects" data-aos="fade-up" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-normal tracking-tight mb-8 text-[#02DAF8]">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#02DAF8]/20 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover object-center rounded-t-xl transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg text-[#02DAF8] mb-2 font-normal">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm mb-4 font-normal">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-[#02DAF8] hover:underline font-normal"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
