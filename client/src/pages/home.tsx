import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Database, Brain, CheckCircle2, ShoppingCart, Umbrella, Briefcase, BookOpen, Wrench, Users, Heart, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/layout";
import officeImg from "@assets/generated_images/bright_modern_creative_agency_office_with_team.png";
import webImg from "@assets/generated_images/modern_web_development_on_laptop_screen.png";
import mobileImg from "@assets/generated_images/hand_holding_phone_with_fitness_app.png";
import aiImg from "@assets/generated_images/ai_automation_visualization.png";
import dataImg from "@assets/generated_images/data_infrastructure_server_room.png";
import heroIllustration from "@assets/generated_images/orvex_dev_illustration.jpg";

export default function Home() {
  const services = [
    {
      title: "Web & Platforms",
      desc: "Enterprise-grade React applications, progressive web apps, and immersive digital experiences.",
      tags: ["Next.js", "React", "TypeScript"],
      image: webImg,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Mobile Engineering",
      desc: "High-quality mobile applications for iOS and Android, designed for speed, reliability, and a polished native feel.",
      tags: ["React Native", "iOS", "Android"],
      image: mobileImg,
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "AI & Automation",
      desc: "AI-powered systems and automated workflows that remove repetitive work, connect operations, and support faster decisions.",
      tags: ["OpenAI", "Python", "TensorFlow"],
      image: aiImg,
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Data Infrastructure",
      desc: "Scalable cloud architecture and big data pipelines designed for real-time analytics.",
      tags: ["AWS", "PostgreSQL", "Redis"],
      image: dataImg,
      icon: <Database className="w-6 h-6" />
    }
  ];

  const heroPillars = [
    { value: "Craft", label: "product-first engineering" },
    { value: "Scale", label: "cloud-ready architecture" },
    { value: "Evolve", label: "AI-enhanced systems" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section — full viewport height */}
      <section className="relative min-h-[100dvh] lg:h-screen pt-20 bg-background overflow-hidden flex items-stretch">
        <div className="container px-4 sm:px-6 mx-auto relative z-10 w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full items-center py-4 lg:py-6">
            {/* Left column — content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center max-w-xl shrink-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-heading leading-[1.05] tracking-tight text-foreground mb-3 sm:mb-5">
                Let's Work Together to Build Digital Excellence
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-8 leading-relaxed max-w-md">
                We blend human creativity with machine intelligence to craft thoughtful, maintainable software — from web platforms to AI-powered products.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="relative text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 font-heading rounded-sm bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  >
                    Let's Talk
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 font-heading rounded-sm border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    Start Project
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {heroPillars.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-foreground">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right column — illustration fills viewport height */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center lg:justify-end h-[42vh] sm:h-[48vh] lg:h-full min-h-0"
            >
              {/* Soft blue glow + concentric rings */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
                aria-hidden
              >
                <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,hsla(199,78%,40%,0.18)_0%,hsla(210,80%,60%,0.08)_40%,transparent_70%)]" />
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
                    style={{
                      width: `${55 + i * 18}%`,
                      height: `${55 + i * 18}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 h-full w-full flex items-center justify-center lg:justify-end">
                <motion.img
                  src={heroIllustration}
                  alt="Illustration développeur Orvex — laptop, code et cloud"
                  className="h-full w-auto max-w-full object-contain drop-shadow-xl relative z-10"
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Decorative spark accent */}
              <motion.div
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-primary/40"
                animate={{ rotate: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 lg:py-32 bg-secondary/15">
        <div className="container px-4 sm:px-6 mx-auto">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-12">Engineering for your next step.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-background border border-border/30 rounded-xl overflow-hidden"
              >
                <img src={service.image} alt={`${service.title} concept`} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <div className="text-primary mb-4" aria-hidden="true">{service.icon}</div>
                  <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {service.tags.map((tag) => <li key={tag} className="px-2 py-1 bg-secondary rounded-full">{tag}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square relative z-10"
              >
                <img src={officeImg} alt="Digital engineering collaboration concept" className="w-full h-full object-cover rounded-sm shadow-2xl" />
                {/* Decorative frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 -z-10" />
              </motion.div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6 sm:mb-8">
                Precision Engineering.<br />
                <span className="text-muted-foreground">Human Touch.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                We believe that great software is born from the intersection of rigorous engineering standards and empathetic design thinking. Our process is transparent, iterative, and focused on one thing: results.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Discovery", text: "We dive deep into your business logic." },
                  { title: "Architecture", text: "Scalable systems built for growth." },
                  { title: "Development", text: "Clean, tested, and documented code." },
                  { title: "Evolution", text: "Continuous improvement and support." }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">{step.title}</h4>
                      <p className="text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Tech Stack Section - Scrolling Names */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-24 lg:py-32 bg-secondary/30 overflow-hidden">
        <div className="container px-4 sm:px-6 mx-auto mb-10 sm:mb-20">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">Our Arsenal</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">Technologies We Work With</h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -3000] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 px-4"
          >
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "PostgreSQL",
              "AWS",
              "Python",
              "Java",
              "Docker",
              "Redis",
              "N8N",
              "Framer Motion",
              "Tailwind CSS",
              "GraphQL",
              "React Native",
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "PostgreSQL",
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "PostgreSQL",
              "AWS",
              "Python",
              "Java",
              "Docker",
              "Redis",
              "N8N",
              "Framer Motion",
              "Tailwind CSS",
              "GraphQL",
              "React Native",
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.1, color: "#167DB5" }}
              >
                <div className="px-6 py-3 rounded-full border border-border/50 hover:border-primary/80 transition-all whitespace-nowrap text-sm font-medium text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 transition-colors duration-300">
                  {tech}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Sectors Section - Expertise Style Layout */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-24 lg:py-32 bg-background relative">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block">Industries We Serve</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6">Sectors & Specialties</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Different industries come with different workflows, constraints, and users. We adapt product design, architecture, automation, and data flows to the reality of each domain.
              </p>
              <Link href="/contact">
                <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                {[
                  {
                    icon: ShoppingCart,
                    title: "E-commerce",
                    desc: "Conversion-focused storefronts, catalog and checkout experiences, back-office tools, and scalable commerce integrations."
                  },
                  {
                    icon: Umbrella,
                    title: "Insurance",
                    desc: "Digital portals, document workflows, claims experiences, automation, and data-driven operational tools."
                  },
                  {
                    icon: Briefcase,
                    title: "Finance",
                    desc: "Secure digital platforms, dashboards, integrations, data pipelines, and automation for modern financial workflows."
                  },
                  {
                    icon: BookOpen,
                    title: "E-learning",
                    desc: "Learning platforms, content management, assessments, progress tracking, and collaborative educational experiences."
                  },
                  {
                    icon: Wrench,
                    title: "Industrial Operations",
                    desc: "Monitoring dashboards, asset workflows, alerts, maintenance tooling, and data-driven operational visibility."
                  },
                  {
                    icon: Users,
                    title: "Human Resources",
                    desc: "Employee portals, onboarding experiences, internal workflows, document management, and HR automation."
                  },
                  {
                    icon: Heart,
                    title: "Healthcare",
                    desc: "User-centered digital workflows, secure information experiences, operational dashboards, and intelligent automation."
                  },
                  {
                    icon: GraduationCap,
                    title: "Science & Education",
                    desc: "Research tools, data platforms, collaborative environments, and digital products designed around knowledge sharing."
                  }
                ].map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="mb-4">
                        <IconComponent className="w-8 h-8 text-foreground/60" />
                      </div>
                      <h3 className="text-lg font-bold font-heading mb-3 group-hover:text-primary transition-colors">{sector.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{sector.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* How We Build */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-24 lg:py-32 bg-secondary/15">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="mb-12 sm:mb-24">
            <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block">How We Build</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading mb-6">Strong products start with strong decisions.</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">We combine product thinking, disciplined engineering, and purposeful automation to turn complex ideas into clear, maintainable digital systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Clarity Before Code", description: "We align on users, objectives, constraints, and architecture before complexity enters the codebase." },
              { title: "Engineering That Lasts", description: "Maintainable architecture, clean code, documentation, testing, and scalability are part of the product — not an afterthought." },
              { title: "AI With a Purpose", description: "We use AI and automation where they improve workflows, decision-making, or user experience — never just for the buzzword." },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-background rounded-xl border border-border/30 hover:border-primary/40 hover:shadow-lg transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 text-primary mb-6" aria-hidden="true" />
                <h3 className="text-xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* CTA Section - Improved Design */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-24 lg:py-32 bg-secondary/40 text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)' }} />

        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-foreground/50 block mb-4">Next Steps</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-[1.1] text-foreground">
                Have an <br />idea?
              </h2>
              <p className="text-xl text-foreground/70 mb-12 max-w-2xl leading-relaxed">
                Let's turn your idea into a clear product direction. We explore the problem, challenge assumptions, and build around meaningful business goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-6 rounded-none border-2 border-transparent hover:border-foreground/20 transition-all duration-300 shadow-2xl">
                    Book a Free Strategy Call
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-2 border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5 text-lg px-10 py-6 rounded-none">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
