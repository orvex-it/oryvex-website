import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { CheckCircle2, Zap, Users, Code, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, market challenges, and technical requirements. Understanding your vision is our foundation.",
      icon: Users,
      details: ["Market Research", "Stakeholder Interviews", "Competitive Analysis", "Requirements Definition"]
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our design team creates intuitive, beautiful interfaces while architects plan scalable technical solutions.",
      icon: Code,
      details: ["Wireframing & Prototypes", "System Architecture", "Technology Stack Selection", "Project Timeline"]
    },
    {
      number: "03",
      title: "Development Sprint",
      description: "We build with precision, following agile methodologies. Regular updates and transparency throughout the process.",
      icon: Zap,
      details: ["Agile Development", "Daily Standups", "Code Reviews", "Continuous Testing"]
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Rigorous QA testing, performance optimization, and security audits ensure production-ready quality.",
      icon: CheckCircle2,
      details: ["QA Testing", "Performance Tuning", "Security Audit", "User Testing"]
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support, monitoring, and optimization for long-term success.",
      icon: Rocket,
      details: ["Deployment", "Monitoring & Alerting", "Performance Analytics", "Technical Support"]
    }
  ];

  const values = [
    { title: "Collaboration", description: "We work as an extension of your team, not separate contractors." },
    { title: "Transparency", description: "Regular updates, clear communication, no surprises." },
    { title: "Excellence", description: "Every detail matters. We don't compromise on quality." },
    { title: "Innovation", description: "We stay ahead of trends and bring fresh ideas to the table." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 50%, hsla(199, 78%, 40%, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 50%, hsla(199, 78%, 40%, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 50%, hsla(199, 78%, 40%, 0.08) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10 container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-mono uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 block">How We Work</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-heading mb-6 sm:mb-8 leading-[0.95]">
              Process that <br/> <span className="text-[#0f172999]">delivers results.</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A structured methodology combining strategic thinking, technical excellence, and continuous collaboration. Every stage is designed to reduce uncertainty and keep the product moving forward.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 md:grid-cols-5 gap-3 sm:gap-6"
            >
              {[
                { num: "5", label: "Phases" },
                { num: "✓", label: "Clear Scope" },
                { num: "↻", label: "Fast Feedback" },
                { num: "QA", label: "Quality Gates" },
                { num: "→", label: "Handover" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{item.num}</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="pb-12 sm:pb-20 container mx-auto px-4 sm:px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-12 sm:mb-24"
        >
        </motion.div>

        {/* Process Steps - Simple Vertical Timeline */}
        <div className="relative mb-16 sm:mb-32">
          {/* Vertical Line - Center */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-foreground/10" />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/10" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group relative"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden pl-24">
                    {/* Circle with Number */}
                    <div className="absolute left-0 top-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary/5 border-2 border-foreground/15 group-hover:border-primary/50 flex items-center justify-center transition-all">
                          <span className="text-lg font-bold font-heading text-foreground/60 group-hover:text-primary transition-colors">
                            {step.number}
                          </span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors border border-primary/20">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-primary/60 flex-shrink-0 text-xs">✓</span>
                            <span className="text-xs text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - 3 Column Grid */}
                  <div className="hidden md:grid grid-cols-[1fr_0px_1fr] gap-0 items-center">
                    {isEven ? (
                      <>
                        {/* Left: Circle and Number - Right aligned with spacing */}
                        <div className="flex justify-end pr-16">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-primary/5 border-2 border-foreground/15 group-hover:border-primary/50 flex items-center justify-center transition-all">
                              <span className="text-xl font-bold font-heading text-foreground/60 group-hover:text-primary transition-colors">
                                {step.number}
                              </span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors border border-primary/20">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                        </div>

                        {/* Center: Line */}
                        <div />

                        {/* Right: Content - Left aligned in right half */}
                        <div className="text-left pl-16">
                          <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed text-base">
                            {step.description}
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {step.details.map((detail, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-primary/60 flex-shrink-0 text-xs">✓</span>
                                <span className="text-xs text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left: Content - Left aligned in left half */}
                        <div className="text-left pr-16">
                          <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed text-base">
                            {step.description}
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {step.details.map((detail, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-primary/60 flex-shrink-0 text-xs">✓</span>
                                <span className="text-xs text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Center: Line */}
                        <div />

                        {/* Right: Circle and Number - Left aligned with spacing */}
                        <div className="flex justify-start pl-16">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-primary/5 border-2 border-foreground/15 group-hover:border-primary/50 flex items-center justify-center transition-all">
                              <span className="text-xl font-bold font-heading text-foreground/60 group-hover:text-primary transition-colors">
                                {step.number}
                              </span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors border border-primary/20">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <section className="py-24 bg-secondary/30 -mx-4 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground">Principles that guide every project and interaction</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
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
      </div>
      <Footer />
    </div>
  );
}
