import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";

import teamImage from "@assets/generated_images/bright_modern_creative_agency_office_with_team.png";
import { 
  Code, 
  Cloud, 
  BarChart, 
  Database, 
  Palette, 
  Brain, 
  Shield, 
  Lock 
} from "lucide-react";


export default function Company() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-heading mb-6 sm:mb-8 leading-tight"
          >
            We are <span className="text-[#0f172999] dark:text-white/45">Oryvex.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
          >
            A collective of curious minds, technical wizards, and design purists. We don't just work in tech; we live it.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-sm mb-16 sm:mb-24"
        >
          <img
            src={teamImage}
            alt="Oryvex digital engineering team concept"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="font-mono text-sm uppercase tracking-widest">ORYVEX • DIGITAL ENGINEERING</p>
          </div>
        </motion.div>
      </section>
{/* Manifesto / Story */}
<section className="py-24 bg-secondary/30">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4">
        <h2 className="text-4xl font-bold font-heading mb-6 sticky top-32">What Drives Us</h2>
      </div>
      <div className="lg:col-span-8 space-y-12 text-lg leading-relaxed text-muted-foreground text-justify">
        <p>
          <strong className="text-foreground text-2xl block mb-4">Built to turn ambitious ideas into dependable digital products.</strong>
          Oryvex is built around a simple belief: technology should feel intentional, understandable, and made to last. We combine software engineering, cloud, data, automation, and AI to transform ambitious ideas into production-ready digital systems.
        </p>
        <p>
          <strong className="text-foreground block mb-2">From the first question to production — one coherent process.</strong>
          We approach every product through the same lens: understand the problem, simplify the complexity, design the right architecture, build with precision, and create a foundation that can evolve as the business grows.
        </p>
        <p>
          Whether the goal is to launch a new product, modernize an existing platform, automate operations, or introduce AI into a workflow, our focus remains the same: clarity, maintainability, and meaningful business value.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Core Domains */}
   <section className="py-32">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="font-mono uppercase tracking-widest text-sm text-primary mb-4">OUR EXPERTISE</p>
      <h2 className="text-5xl md:text-6xl font-bold font-heading mb-2">Our Core Domains</h2>
      <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
        We bring software, cloud, data, automation, AI, and security together to build coherent end-to-end systems.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Software Engineering */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Code className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">Software Engineering</h3>
          <p className="text-muted-foreground">
            Full-stack development, scalable architectures, and clean code that powers digital excellence.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* DevOps */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Cloud className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">DevOps & Cloud</h3>
          <p className="text-muted-foreground">
            CI/CD pipelines, infrastructure as code, and cloud-native solutions for seamless deployment.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Data Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <BarChart className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">Data Analytics</h3>
          <p className="text-muted-foreground">
            Business intelligence, dashboards, and actionable insights from complex data landscapes.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Data Science & Engineering */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Database className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">Data Science & Engineering</h3>
          <p className="text-muted-foreground">
            Machine learning models, data pipelines, and predictive analytics for data-driven decisions.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Design */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Palette className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">UI/UX Design</h3>
          <p className="text-muted-foreground">
            Beautiful interfaces, intuitive experiences, and user-centered design that delights.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* AI Automation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">AI & Automation</h3>
          <p className="text-muted-foreground">
            Intelligent agents, RPA, and AI-powered solutions that transform business processes.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Cybersecurity */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">Cybersecurity</h3>
          <p className="text-muted-foreground">
            Penetration testing, security audits, and robust protection against evolving threats.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Penetration Testing */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-3">Penetration Testing</h3>
          <p className="text-muted-foreground">
            Ethical hacking, vulnerability assessment, and security hardening for your infrastructure.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>
  </div>
</section>
      {/* Vision Section */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        {/* Wavy decoration */}
        <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#lines)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-mono uppercase tracking-widest text-sm text-primary mb-8">OUR VISION</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-4xl md:text-5xl font-bold font-heading leading-tight text-center">
              We develop user-centric software with cutting-edge technology. We believe good software can change the world.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Culture / Values - Process Style */}
      <section className="py-24 bg-secondary/30 -mx-4 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Culture & Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Obsessive Quality", description: "Good enough is not in our vocabulary. We polish until it shines. Every pixel, every line of code reflects our commitment to excellence." },
              { title: "Radical Collaboration", description: "No silos. Designers code, developers design, and clients are partners. The best ideas emerge from diverse perspectives." },
              { title: "Global Perspective", description: "We design with accessibility, localization, and diverse usage contexts in mind from day one." },
              { title: "Outcome Over Output", description: "We measure success by business impact, not just lines of code shipped. Your success is our success." },
              { title: "Human First", description: "Technology serves people. We build ethical, user-centric products that make a positive impact." },
              { title: "Continuous Growth", description: "We are students of our craft, constantly learning and evolving. Every project teaches us something new." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <h3 className="text-xl font-bold font-heading mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Delivery Principles */}
      <section className="py-20 border-t border-border bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { label: "Delivery", value: "End-to-End" },
              { label: "Mindset", value: "Product-First" },
              { label: "Engineering", value: "Scalable" },
              { label: "Collaboration", value: "Transparent" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl break-words font-bold font-heading text-primary mb-2">{stat.value}</div>
                <div className="text-white/60 font-medium tracking-wide uppercase text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
