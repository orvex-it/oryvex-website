import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import {
  AutomationScreen,
  CloudScreen,
  ManagementScreen,
  MobileAppScreen,
  WebSystemScreen,
  WebsiteScreen,
} from "@/components/work-screens";

const projects = [
  {
    tag: "Mobile app",
    title: "Route board for field teams",
    summary: "A driver app that keeps the day’s stops, signatures, and exceptions on one screen. Dispatch updates land on the phone without a second system.",
    stack: ["React Native", "Spring Boot", "PostgreSQL"],
    points: ["Live stop list and proof of delivery", "Offline queue when the network drops", "Push updates from the dispatch desk"],
    screen: <MobileAppScreen />,
  },
  {
    tag: "Web system",
    title: "Client billing workspace",
    summary: "An internal web app where finance follows invoices from draft to payment. Clients, amounts, and status stay in one ledger instead of a shared spreadsheet.",
    stack: ["React", "TypeScript", "Spring Boot"],
    points: ["Role-based access for finance and sales", "Status that matches the payment provider", "Export for the monthly close"],
    screen: <WebSystemScreen />,
  },
  {
    tag: "Management system",
    title: "Warehouse stock desk",
    summary: "A back-office for parts and finished goods. Buyers see what is on hand, what is reserved, and which SKUs need a reorder before the line stops.",
    stack: ["Next.js", "Java", "PostgreSQL"],
    points: ["Stock by warehouse and location", "Low-stock alerts on the same screen", "Receiving tied to open purchase orders"],
    screen: <ManagementScreen />,
  },
  {
    tag: "Website",
    title: "Studio site with a short catalogue",
    summary: "A public site for a furniture workshop: a clear offer, a few pieces, and a path to a quote. Built to stay fast and easy to edit.",
    stack: ["Next.js", "Tailwind CSS"],
    points: ["Editorial layout, not a template grid", "Catalogue pages that load as static content", "Contact form wired to the studio inbox"],
    screen: <WebsiteScreen />,
  },
  {
    tag: "Cloud",
    title: "Production cluster, one region",
    summary: "The runtime behind the product: a Kubernetes cluster in Europe, health on the services that take traffic, and a view operators can read at 9 a.m.",
    stack: ["Kubernetes", "AWS", "Terraform"],
    points: ["Services, replicas, and health in one console", "Infrastructure described in Terraform", "Deploys through the existing CI pipeline"],
    screen: <CloudScreen />,
  },
  {
    tag: "Automation · n8n + AI",
    title: "Invoice intake without retyping",
    summary: "A workflow that reads a supplier email, pulls the fields with a model, then writes the bill into the ERP. Large amounts wait for a person in Slack.",
    stack: ["n8n", "LLM", "ERP API"],
    points: ["Trigger on a labeled inbox", "Extraction of vendor, total, and due date", "Branch for review when the amount is high"],
    screen: <AutomationScreen />,
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(199 78% 40% / 0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-mono uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 block">Selected Work</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-heading mb-4 sm:mb-6 leading-tight">
              <span className="text-[#0f172999] dark:text-white/45">Products we</span> <br /> <span className="text-foreground">ship and run.</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              Mobile apps, web systems, back-office tools, public sites, cloud platforms, and n8n workflows with AI in the loop.
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

      <div className="container mx-auto px-4 pb-8 sm:px-6">
        {projects.map((project, index) => (
          <motion.section
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="grid items-center gap-8 border-t border-border py-16 sm:gap-12 sm:py-24 lg:grid-cols-2"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary sm:text-sm">{project.tag}</p>
              <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">{project.title}</h2>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{project.summary}</p>
              <ul className="mb-6 space-y-2 text-sm text-foreground/90 sm:text-base">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : undefined}>{project.screen}</div>
          </motion.section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
