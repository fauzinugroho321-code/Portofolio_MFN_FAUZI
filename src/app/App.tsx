import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, Linkedin, Mail, ExternalLink, Download, ChevronRight, 
  FileText, Code2, Layers, Cpu, Server, Database, Globe, 
  Shield, Sparkles, Bot, Terminal, GitBranch, Triangle, 
  Figma, Table2, Palette, Send, Package 
} from "lucide-react";
import { Cursor } from "./components/Cursor";

const PRIMARY_ACCENT = "#FF6A00";
const SECONDARY_ACCENT = "#FFC700";

const Kicker = ({ number, text }: { number: string; text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-8 font-mono text-sm tracking-wider uppercase text-[#9A9A9A]"
  >
    <span className="text-[#FF6A00]">{number}</span>
    <div className="h-px w-12 bg-[#2A2A2A]" />
    <span>{text}</span>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.9)"]
  );

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen font-sans selection:bg-[#FF6A00] selection:text-white">
      <Cursor />
      
      {/* Navigation */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-[#2A2A2A]/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">
            MF<span className="text-[#FF6A00]">N.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#about" className="hover:text-[#FF6A00] transition-colors">01. About</a>
            <a href="#tech" className="hover:text-[#FF6A00] transition-colors">02. Tech Stack</a>
            <a href="#tools" className="hover:text-[#FF6A00] transition-colors">03. Tools</a>
            <a href="#experience" className="hover:text-[#FF6A00] transition-colors">04. Experience</a>
            <a href="#projects" className="hover:text-[#FF6A00] transition-colors">05. Projects</a>
            <a href="#contact" className="hover:text-[#FF6A00] transition-colors">06. Contact</a>
          </div>
          <button className="md:hidden">
            <Layers className="w-6 h-6 text-[#F5F5F5]" />
          </button>
        </div>
      </motion.nav>

      <main className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center relative pt-20">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            {/* Simple particle/geometric background effect */}
            <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#FF6A00] rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#FFC700] rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[#FF6A00] mb-6 tracking-widest uppercase text-sm"
            >
              Hi, my name is
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.1]"
            >
              Muhammad Fauzi <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FFC700]">Nugroho.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#9A9A9A] mb-8 font-light max-w-2xl"
            >
              Fullstack Developer · Next.js · TypeScript · Tailwind CSS · Prisma ORM
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#9A9A9A] mb-12 max-w-xl text-lg leading-relaxed"
            >
              I build delightful, complex, and interactive web experiences. 
              A serious engineer who doesn't take himself too seriously.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FFC700] text-[#0A0A0A] font-bold uppercase tracking-wider text-sm overflow-hidden flex items-center gap-2 rounded-sm transition-transform hover:scale-105">
                <span className="relative z-10">View Projects</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="/ATS-Muhammad-Fauzi-Nugroho-P.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[#2A2A2A] hover:border-[#FF6A00] text-[#F5F5F5] font-bold uppercase tracking-wider text-sm flex items-center gap-2 rounded-sm transition-all hover:bg-[#FF6A00]/10">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <Kicker number="01" text="About Me" />
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-[#9A9A9A] text-lg leading-relaxed"
            >
              <p>
                Hello! I'm Fauzi, a Fullstack Developer who thrives on turning complex problems into elegant, user-friendly solutions. My journey in software engineering started with a curiosity for how things work on the web, which evolved into a passion for building robust, scalable applications.
              </p>
              <p>
                I specialize in the modern web stack particularly <span className="text-[#F5F5F5]">Next.js</span>, <span className="text-[#F5F5F5]">TypeScript</span>, and <span className="text-[#F5F5F5]">Prisma ORM</span>. Whether it's architecting a scalable backend or obsessing over frontend micro-interactions, I bring a detail-oriented mindset to every layer of the stack.
              </p>
              <p className="border-l-2 border-[#FF6A00] pl-4 italic text-[#F5F5F5]">
                When I'm not coding, I'm usually exploring experimental web technologies or optimizing my mechanical keyboard layout.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6A00] to-[#FFC700] rounded-xl blur-xl opacity-30" />
              <div className="relative aspect-[3/4] rounded-xl bg-[#151515] border border-[#2A2A2A] overflow-hidden flex items-center justify-center">
                {/* Real Avatar */}
                <img src="/profile.jpg" alt="Muhammad Fauzi Nugroho" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-32">
          <Kicker number="02" text="Tech Stack" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js', icon: <Globe />, type: 'Frontend / Fullstack' },
              { name: 'TypeScript', icon: <Code2 />, type: 'Language' },
              { name: 'Tailwind CSS', icon: <Layers />, type: 'Styling' },
              { name: 'Framer Motion', icon: <Sparkles />, type: 'Animation' },
              { name: 'Prisma ORM', icon: <Database />, type: 'Database ORM' },
              { name: 'PostgreSQL', icon: <Server />, type: 'Database' },
              { name: 'Supabase', icon: <Database />, type: 'Backend as a Service' },
              { name: 'NextAuth.js / Auth.js', icon: <Shield />, type: 'Authentication' },
              { name: 'Vercel AI SDK', icon: <Bot />, type: 'AI Integration' },
              { name: 'React', icon: <Globe />, type: 'Frontend Library' },
              { name: 'Node.js / Express', icon: <Cpu />, type: 'Backend' },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#151515] border border-[#2A2A2A] hover:border-[#FF6A00]/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 group transition-colors"
              >
                <div className="text-[#4A4A4A] group-hover:text-[#FF6A00] transition-colors">
                  {tech.icon}
                </div>
                <div className="text-center">
                  <div className="font-display font-medium text-[#F5F5F5]">{tech.name}</div>
                  <div className="font-mono text-xs text-[#9A9A9A] mt-1">{tech.type}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Development Tools */}
        <section id="tools" className="py-32">
          <Kicker number="03" text="Development Tools" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'VS Code', icon: <Terminal />, type: 'Code Editor' },
              { name: 'Git & GitHub', icon: <GitBranch />, type: 'Version Control / CI/CD' },
              { name: 'Vercel', icon: <Triangle />, type: 'Cloud Deployment' },
              { name: 'Figma', icon: <Figma />, type: 'UI/UX & Prototyping' },
              { name: 'Prisma Studio', icon: <Table2 />, type: 'Database GUI' },
              { name: 'Canva', icon: <Palette />, type: 'Visual Design' },
              { name: 'Postman', icon: <Send />, type: 'API Testing' },
              { name: 'NPM', icon: <Package />, type: 'Package Manager' },
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#151515] border border-[#2A2A2A] hover:border-[#FF6A00]/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 group transition-colors"
              >
                <div className="text-[#4A4A4A] group-hover:text-[#FF6A00] transition-colors">
                  {tool.icon}
                </div>
                <div className="text-center">
                  <div className="font-display font-medium text-[#F5F5F5]">{tool.name}</div>
                  <div className="font-mono text-xs text-[#9A9A9A] mt-1">{tool.type}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-32">
          <Kicker number="04" text="Featured Experience" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151515] p-8 md:p-12 rounded-2xl border border-[#2A2A2A] relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center group hover:border-[#FF6A00]/30 transition-colors duration-500"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Teks & Deskripsi */}
            <div className="lg:w-1/2 z-10 flex flex-col justify-center">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                   {/* Pastikan file logo DIY dinamai image.png di folder public */}
                  <img src="/DPRD.jpg" alt="Logo DIY" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F5F5]">Web Administrator Intern</h3>
                  <h4 className="text-[#FF6A00] font-medium text-lg mt-1">Sekretariat DPRD DIY</h4>
                </div>
              </div>
              
              <div className="font-mono text-sm text-[#9A9A9A] mb-6 flex items-center gap-3">
                <span>Jan 2025 - Mar 2025</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC700]"></span>
                <span className="text-[#FFC700]">Grade: 90 (Sangat Baik)</span>
              </div>
              
              <p className="text-[#9A9A9A] leading-relaxed mb-8 text-lg">
                Completed an intensive internship program at Bagian UMUM. Managed and maintained the official DPRD DIY website, ensuring uptime and content accuracy. Monitored website security, coordinated with internal staff for legislative updates, and conducted regular content audits to improve site performance.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="font-mono text-xs px-3 py-1 bg-[#1A1A1A] text-[#F5F5F5] rounded-full border border-[#2A2A2A]">Web Administration</span>
                <span className="font-mono text-xs px-3 py-1 bg-[#1A1A1A] text-[#F5F5F5] rounded-full border border-[#2A2A2A]">Content Audit</span>
                <span className="font-mono text-xs px-3 py-1 bg-[#1A1A1A] text-[#F5F5F5] rounded-full border border-[#2A2A2A]">Security Monitoring</span>
              </div>
            </div>

            {/* Gambar Sertifikat */}
            <div className="lg:w-1/2 z-10 w-full">
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-xl overflow-hidden border border-[#2A2A2A] shadow-2xl perspective-1000 cursor-pointer"
              >
                {/* Pastikan file sertifikat dinamai image_1.png di folder public */}
                <img src="/sertifikat.jpg" alt="Sertifikat Magang DPRD DIY" className="w-full h-auto object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-32">
          <Kicker number="05" text="Projects" />
          
          <div className="space-y-32">
            {[
              {
                title: "PasalPintar.id",
                desc: "An AI-powered legal assistant platform utilizing Advanced RAG architecture to help users search, explore, and understand Indonesian regulations with high factual accuracy.",
                tags: ["Next.js", "TypeScript", "Advanced RAG", "Legal-Tech"],
                github: "https://github.com/fauzinugroho321-code/PasalPintar.id",
                demo: "https://pasal-pintar-id.vercel.app/",
                image: "/pasalpintar.jpg"
              },
              {
                title: "Nadi",
                desc: "A comprehensive HRIS for managing employee data, attendance, leave requests, task management, and payroll slips — with role-based access separating Employee, HR, and Management views.",
                tags: ["Next.js", "TypeScript", "Prisma ORM", "NextAuth.js"],
                github: "https://github.com/fauzinugroho321-code/Nadi",
                demo: "https://nadi-three.vercel.app/",
                image: "/nadi.jpg"
              },
              {
                title: "Sivitas",
                desc: "A community management information system for neighborhoods that digitizes resident data collection, official document administration, information distribution, and complaint reporting.",
                tags: ["Next.js", "Tailwind CSS", "Prisma ORM", "Supabase", "PostgreSQL"],
                github: "https://github.com/fauzinugroho321-code/sivitas",
                demo: "https://sivitas-next.vercel.app/",
                image: "/sivitas.jpg"
              },
              {
                title: "Dispetaru DIY",
                desc: "Spearheaded the UI redesign of the Dispetaru DIY public portal, developing a real-time, reload-free search feature and delivering a seamless Single Page Application (SPA) experience.",
                tags: ["Frontend", "React", "SPA", "UI/UX Redesign"],
                github: "https://github.com/fauzinugroho321-code/Dispetaru-DIY",
                demo: "#",
                image: "/dispetarudiy.jpg"
              }
            ].map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Project Image */}
                <motion.div 
                  whileHover={{ rotateY: i % 2 !== 0 ? -5 : 5, rotateX: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full lg:w-3/5 aspect-video bg-[#151515] rounded-xl border border-[#2A2A2A] relative overflow-hidden group perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    ) : (
                      <Layers className="w-24 h-24 text-[#2A2A2A] group-hover:text-[#4A4A4A] transition-colors" />
                    )}
                  </div>
                </motion.div>
                
                {/* Project Info */}
                <div className={`w-full lg:w-2/5 flex flex-col ${i % 2 !== 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                  <h3 className="font-display text-3xl font-bold mb-6 hover:text-[#FF6A00] transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-[#151515] p-6 rounded-xl border border-[#2A2A2A] mb-6 relative z-10 text-[#9A9A9A] leading-relaxed shadow-xl">
                    {project.desc}
                  </div>
                  <div className={`flex flex-wrap gap-3 mb-8 ${i % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs px-3 py-1 bg-[#1A1A1A] text-[#FFC700] rounded-full border border-[#2A2A2A]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] hover:text-[#FF6A00] transition-colors p-2">
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] hover:text-[#FF6A00] transition-colors p-2">
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-40 text-center max-w-2xl mx-auto">
          <Kicker number="06" text="Let's Connect" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-bold mb-8"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#9A9A9A] text-lg leading-relaxed mb-12"
          >
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's build something great together.
          </motion.p>
          
          <motion.a 
            href="mailto:fauzinugroho321@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-10 py-5 border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-bold uppercase tracking-widest rounded-sm transition-colors"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2A] py-8 text-center bg-[#0A0A0A]">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/fauzinugroho321-code" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#FF6A00] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/mfauzinugroho/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#FF6A00] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="font-mono text-xs text-[#9A9A9A]">
          Designed & Built by Muhammad Fauzi Nugroho &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}