import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { MapPin, ArrowRight } from "lucide-react";
import officeImg from "@assets/generated_images/modern_london_office_building_exterior.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope and complexity. A focused MVP usually takes 6–12 weeks, while larger platforms can run 3–6 months. After discovery we share a clear roadmap with milestones so you always know what’s next.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We work with fixed-scope proposals for well-defined projects, or time-and-materials for evolving products. Every engagement starts with a free strategy call so we can recommend the model that fits your goals and budget.",
  },
  {
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We partner with early-stage startups building their first product as well as established companies modernizing legacy systems. Our process scales to your stage while keeping engineering quality consistent.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our stack includes React, Next.js, TypeScript, React Native, Node.js, Python, PostgreSQL, AWS, and modern AI tooling. We choose technologies based on your product needs — not trends.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out via hello@orvex.com or book a call. We’ll schedule a short discovery session, align on objectives, then send a proposal with scope, timeline, and investment. No commitment required until you’re ready.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. We offer maintenance, monitoring, and continuous improvement retainers so your product stays secure, performant, and ready to grow after go-live.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-28 sm:pt-32 pb-12 sm:pb-20 container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-heading mb-8 sm:mb-12 leading-tight">
              Contact <br /> <span className="text-[#0f172999]">Us</span>
            </h1>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <h3 className="text-2xl font-bold font-heading mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  New Business{" "}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground text-lg mb-2">
                  Start your next project with us.
                </p>
                <a
                  href="mailto:hello@orvex.com"
                  className="text-xl font-mono hover:text-primary transition-colors"
                >
                  hello@orvex.com
                </a>
              </div>

              <div className="group cursor-pointer">
                <h3 className="text-2xl font-bold font-heading mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  General Inquiries{" "}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground text-lg mb-2">
                  Questions about our services or company.
                </p>
                <a
                  href="mailto:info@orvex.com"
                  className="text-xl font-mono hover:text-primary transition-colors"
                >
                  info@orvex.com
                </a>
              </div>

              <div className="group cursor-pointer">
                <h3 className="text-2xl font-bold font-heading mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  Join the Team{" "}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground text-lg mb-2">
                  We're always looking for talent.
                </p>
                <a
                  href="mailto:careers@orvex.com"
                  className="text-xl font-mono hover:text-primary transition-colors"
                >
                  careers@orvex.com
                </a>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-8">
                Our Locations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-xl font-bold mb-2">Casablanca</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Boulevard Massira Al Khadra
                    <br />
                    Casablanca, 20250
                    <br />
                    Morocco
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
              <img
                src={officeImg}
                alt="Casablanca Office"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-mono uppercase tracking-widest text-sm">Casablanca, Morocco</span>
                </div>
                <p className="text-lg font-light opacity-90">
                  Our headquarters in Casablanca.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-secondary/20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-primary font-mono uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 sm:mb-6">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl">
              Quick answers about how we work, timelines, and getting started with Orvex.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/60"
                >
                  <AccordionTrigger className="text-base sm:text-lg font-heading font-semibold hover:text-primary hover:no-underline py-5 sm:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 sm:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
