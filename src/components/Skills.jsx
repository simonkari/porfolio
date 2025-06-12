// src/components/Skills.jsx
export default function Skills() {
  const frontend = [
    "HTML5",
    "CSS3 / Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "React Native",
  ];

  const uiux = [
    "Figma",
    "Wireframing",
    "Responsive Design",
    "Design Systems",
  ];

  return (
    <section id="skills" data-aos="fade-up" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-8 text-[#02DAF8]">
          Skills & Tools
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend Card */}
          <div className="bg-[#1a1a1a] border border-[#02DAF8]/20 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#02DAF8]">
              Frontend Development
            </h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {frontend.map((skill) => (
                <li
                  key={skill}
                  className="hover:text-[#02DAF8] transition duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* UI/UX Card */}
          <div className="bg-[#1a1a1a] border border-[#02DAF8]/20 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#02DAF8]">
              UI/UX Design
            </h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {uiux.map((skill) => (
                <li
                  key={skill}
                  className="hover:text-[#02DAF8] transition duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
