import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar, Footer } from "@/components/layout";
import { Code, Smartphone, Database, Brain, BarChart3, Cog, CheckCircle2, ArrowRight } from "lucide-react";
import webImg from "@assets/generated_images/orvex_webdev.jpg";
import mobileImg from "@assets/generated_images/orvex_mobile.jpg";
import aiImg from "@assets/generated_images/orvex_ai.jpg";
import dataImg from "@assets/generated_images/orvex_database.jpg";
import automationImg from "@assets/generated_images/orvex_automation.jpg";
import bigDataImg from "@assets/generated_images/orvex_bigdata.jpg";

export default function Services() {
  const detailedServices = [
    {
      title: "Web Development",
      icon: <Code className="w-12 h-12 text-foreground/60" />,
      description: "We build robust, scalable, and high-performance web applications using the latest technologies. From single-page applications to complex enterprise portals.",
      features: ["Advanced Frameworks", "Progressive Web Apps", "E-commerce Solutions", "Custom Platforms"],
      image: webImg
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-12 h-12 text-foreground/60" />,
      description: "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices.",
      features: ["Advanced Frameworks", "iOS & Android", "App Store Optimization", "Mobile UI/UX"],
      image: mobileImg
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-12 h-12 text-foreground/60" />,
      description: "Integrate intelligent algorithms to automate processes, predict trends, and personalize user experiences.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots","Agent Development"],
      image: aiImg
    },
    {
      title: "Database Services",
      icon: <Database className="w-12 h-12 text-foreground/60" />,
      description: "Design, implementation, and management of secure and scalable database architectures.",
      features: ["SQL & NoSQL", "Data Migration", "Database Optimization", "Cloud Storage"],
      image: dataImg
    },
    {
      title: "Automation",
      icon: <Cog className="w-12 h-12 text-foreground/60" />,
      description: "Streamline your business operations by automating repetitive tasks and workflows.",
      features: ["Workflow Automation", "RPA", "Integration Services", "Scripting"],
      image: automationImg
    },
    {
      title: "Big Data Analysis",
      icon: <BarChart3 className="w-12 h-12 text-foreground/60" />,
      description: "Unlock the potential of your data with advanced analytics and visualization tools.",
      features: ["Data Mining", "Real-time Analytics", "Business Intelligence", "Data Visualization"],
      image: bigDataImg
    },

  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section — full monitor height */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(199 78% 40% / 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-mono uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 block">Our Services</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-heading mb-4 sm:mb-6 leading-tight">
              <span className="text-[#0f172999]">End-to-End</span> <br /> <span className="text-foreground">Technology Solutions</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              From concept to deployment, we deliver comprehensive solutions tailored to your unique business challenges.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary/30 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-primary/60"
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="pb-12 sm:pb-20 px-4 sm:px-6 container mx-auto">
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 lg:gap-16 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 w-full">
                <div className="w-fit mb-6 sm:mb-8">
                  {service.icon}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 sm:mb-6 group-hover:text-primary transition-colors">{service.title}</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-10 leading-relaxed max-w-lg">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-foreground/60 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-sm font-heading hover:shadow-lg transition-all duration-300 group inline-flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-8">
                    <div className="text-white">
                      <p className="font-mono uppercase tracking-widest text-xs mb-2">Learn More</p>
                      <p className="text-lg sm:text-xl font-bold font-heading">{service.title}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Implementation Timeline Section - Road Design */}
      {/*}  <section className="py-32 bg-secondary/30 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-mono uppercase tracking-widest text-sm mb-4 block">Development Lifecycle</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Implementation Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Your journey from concept to launch</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
         
          <div className="relative">
       
            <div className="absolute left-0 right-0 top-20 h-32 md:h-40 bg-gradient-to-b from-border/30 to-border/10 rounded-full opacity-30" />

            <svg className="w-full h-48 md:h-64 absolute top-0 left-0" preserveAspectRatio="none" viewBox="0 0 1000 200">
             
              <defs>
                <pattern id="dashed" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="10" x2="10" y2="10" stroke="#167DB5" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                </pattern>
              </defs>

              <path d="M 50 100 Q 250 30, 500 100 T 950 100" stroke="#167DB5" strokeWidth="40" fill="none" opacity="0.2" />

              <path d="M 50 100 Q 250 30, 500 100 T 950 100" stroke="url(#dashed)" strokeWidth="2" fill="none" />
            </svg>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 pt-8">
              {[
                {
                  phase: "1",
                  timeline: "Weeks 1-2",
                  title: "Planning & Discovery",
                  points: ["Requirements gathering", "Architecture design", "Technology selection", "Team allocation"]
                },
                {
                  phase: "2",
                  timeline: "Weeks 3-5",
                  title: "Design & Prototyping",
                  points: ["UI/UX design", "Wireframes & flows", "Design system", "Client approval"]
                },
                {
                  phase: "3",
                  timeline: "Weeks 6-12",
                  title: "Development Sprint",
                  points: ["Backend development", "Frontend development", "API integration", "Database setup"]
                },
                {
                  phase: "4",
                  timeline: "Weeks 13-14",
                  title: "Testing & Launch",
                  points: ["QA testing", "Performance tuning", "Security audit", "Production deployment"]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center relative z-20 shadow-lg hover:shadow-2xl transition-shadow border-4 border-background bg-[#0f172999] text-[#ffffff]">
                      <span className="text-4xl font-bold font-heading text-[#ffffff]">{phase.phase}</span>
                    </div>
                  </div>

                  <div className="w-full p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all bg-background text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-primary">{phase.timeline}</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading mb-4 hover:text-primary transition-colors">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.points.map((point, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>*/}
      <Footer />
    </div>
  );
}
