import { Code, Figma, Chrome, Github } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0d0d0d] text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-normal tracking-tight mb-12 text-[#02DAF8] text-center">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Frontend Development */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#02DAF8]/10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-[#02DAF8]" />
              <h3 className="text-lg font-semibold">Frontend Development</h3>
            </div>
            <ul className="text-zinc-300 font-normal space-y-2 list-disc list-inside">
              <li>HTML, CSS, JavaScript</li>
              <li>React & React Native</li>
              <li>Tailwind CSS & Bootstrap</li>
              <li>Firebase & Supabase</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* UI/UX Design */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#02DAF8]/10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Figma className="text-[#02DAF8]" />
              <h3 className="text-lg font-semibold">UI/UX Design</h3>
            </div>
            <ul className="text-zinc-300 font-normal space-y-2 list-disc list-inside">
              <li>Figma (Prototyping & Wireframing)</li>
              <li>Adobe XD</li>
              <li>User Research & Personas</li>
              <li>Information Architecture</li>
              <li>Mobile-First & Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
