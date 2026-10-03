import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { CheckCircle, Cloud, Database, Zap, Brain, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Illustrative assets for solution concepts.
import auctionImg from "@assets/generated_images/real_estate_property_marketplace_platform.png";
import dashboardImg from "@assets/generated_images/enterprise_admin_dashboard_analytics.png";
import deliveryImg from "@assets/generated_images/swift_delivery_mobile_app_mockup.png";
import automationImg from "@assets/generated_images/n8n_workflow_automation_dashboard.png";
import cloudImg from "@assets/generated_images/data_infrastructure_server_room.png";
import dataImg from "@assets/generated_images/data_analytics_dashboard_on_monitor.png";
import aiChatImg from "@assets/generated_images/ai_automation_visualization.png";

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section – Full viewport height (100vh) */}
<section className="relative min-h-screen h-screen flex items-center overflow-hidden pt-20">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
  <motion.div
    className="absolute inset-0 opacity-10"
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      backgroundImage: "linear-gradient(45deg, hsl(199 78% 40%) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />
  <div className="relative z-10 container px-4 sm:px-6 mx-auto flex flex-col items-center text-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="max-w-4xl"
    >
      <span className="text-primary font-mono uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 block">
        Solution Concepts
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-heading mb-6 sm:mb-8 leading-[0.95]">
        Solutions that <br /> <span className="text-[#0f172999]">drive transformation.</span>
      </h1>
      <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mx-auto">
        Explore illustrative solution concepts and architecture approaches for web, mobile, AI, data, and cloud. These examples are not client case studies.
      </p>
    </motion.div>
  </div>
</section>
      <div className="pb-12 sm:pb-20 container mx-auto px-4 sm:px-6">
        {/* 1. SOFTWARE ENGINEERING */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="border-b border-primary/20 pb-6 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading flex items-center gap-3 flex-wrap">
              <Server className="w-10 h-10 text-primary" /> Software Engineering
            </h2>
          </div>

          {/* Web Development */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-6 sm:mb-8"> Web Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="group bg-secondary/20 rounded-lg overflow-hidden">
                <div className="aspect-video bg-secondary/40 overflow-hidden">
                  <img src={auctionImg} alt="Marketplace interface concept" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-mono text-primary mb-2">Concept • Real-time bidding</p>
                  <h4 className="text-xl font-bold mb-2">Online Auction Platform</h4>
                  <p className="text-muted-foreground text-sm">Real-time bidding architecture with live updates, automated auction closures, payment workflows, role-based administration, and fraud-prevention mechanisms.</p>
                </div>
              </div>
              <div className="group bg-secondary/20 rounded-lg overflow-hidden">
                <div className="aspect-video bg-secondary/40 overflow-hidden">
                  <img src={dashboardImg} alt="Supervision dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-mono text-primary mb-2">Concept • Enterprise analytics</p>
                  <h4 className="text-xl font-bold mb-2">Unified Supervision Dashboard</h4>
                  <p className="text-muted-foreground text-sm">Real‑time KPIs, multi‑source data aggregation, custom alerting, and predictive maintenance for industrial IoT systems.</p>
                </div>
              </div>
              <div className="group bg-secondary/20 rounded-lg overflow-hidden">
                <div className="aspect-video bg-secondary/40 overflow-hidden flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">[ Illustration ]</span>
                </div>
                <div className="p-6">
                  <p className="text-sm font-mono text-primary mb-2">Concept • SaaS platform</p>
                  <h4 className="text-xl font-bold mb-2">B2B Procurement Portal</h4>
                  <p className="text-muted-foreground text-sm">End‑to‑end solution for enterprise procurement, with supplier management, contract lifecycle, and spend analytics.</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
              Other possible web solutions: custom CRMs, e‑learning portals, B2B marketplaces, etc.
            </p>
          </div>

          {/* Mobile Development */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-6 sm:mb-8"> Mobile Development</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="group bg-secondary/20 rounded-lg overflow-hidden">
                <div className="aspect-video bg-secondary/40 overflow-hidden">
                  <img src={deliveryImg} alt="Food delivery app concept" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-mono text-primary mb-2">Concept • Mobile logistics</p>
                  <h4 className="text-xl font-bold mb-2">Food Delivery App Concept</h4>
                  <p className="text-muted-foreground text-sm">Real-time order tracking, route optimization, restaurant operations, customer experiences, and notification workflows designed around a scalable mobile architecture.</p>
                </div>
              </div>
              <div className="group bg-secondary/20 rounded-lg overflow-hidden">
                <div className="aspect-video bg-secondary/40 overflow-hidden flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">[ Illustration ]</span>
                </div>
                <div className="p-6">
                  <p className="text-sm font-mono text-primary mb-2">Concept • Health & Fitness</p>
                  <h4 className="text-xl font-bold mb-2">Wellness Tracker App</h4>
                  <p className="text-muted-foreground text-sm">Personalized activity tracking, nutrition logging, coaching experiences, device integrations, and community features.</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
              Other possible mobile apps: fintech, e‑commerce, booking, IoT companion, etc.
            </p>
          </div>

          {/* Infrastructure Analysis */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4 sm:mb-6"> Infrastructure Analysis & Advisory</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/20 p-8 rounded-lg">
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  We help clients make informed architectural decisions by deeply analyzing their existing or planned infrastructure:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span><strong className="text-foreground">Capacity & load analysis:</strong> Estimation of concurrent users supported, bottlenecks, and scaling needs.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span><strong className="text-foreground">Cost optimization:</strong> Recommendations on cloud instance selection, reserved vs on‑demand, and serverless refactoring to reduce AWS/Azure/GCP bills.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span><strong className="text-foreground">Target architecture:</strong> Proposal of adapted solutions (microservices, event‑driven, data lake) with migration roadmap.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">Goal: maintainable infrastructure with clear capacity and cost tradeoffs.</p>
              </div>
              <div className="bg-secondary/20 rounded-lg p-6 flex flex-col justify-center">
                <img src={cloudImg} alt="Cloud infrastructure concept" className="rounded-lg mb-4" />
                <p className="text-sm text-muted-foreground text-center">Concept visualization of cloud infrastructure.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2. DEVOPS & CLOUD ENGINEERING */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-32"
        >
          <div className="border-b border-primary/20 pb-6 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading flex items-center gap-3 flex-wrap">
              <Cloud className="w-10 h-10 text-primary" /> DevOps & Cloud Engineering
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Integration & Migration</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We accompany the migration of your legacy applications to the cloud (AWS, Azure, GCP) or to containerized architectures (Docker, Kubernetes). We plan migrations around service continuity, operational constraints, and cost visibility.
              </p>
              <h3 className="text-2xl font-bold mb-4">Scalable Hosting</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a <strong>VPS</strong>, optimized <strong>shared hosting</strong>, or a fully <strong>scalable cloud infrastructure</strong>, we design the architecture adapted to your traffic and constraints (PCI‑DSS, GDPR, etc.). Implementation of auto‑scaling, load balancing, and high‑availability databases.
              </p>
              <h3 className="text-2xl font-bold mb-4">CI/CD & Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We set up continuous integration and continuous deployment pipelines (GitHub Actions, GitLab CI, Jenkins) to accelerate release cycles while ensuring quality through automated tests and blue/green or canary deployments.
              </p>
            </div>
            <div className="bg-secondary/20 rounded-lg p-6 flex flex-col justify-center">
              <img src={cloudImg} alt="Cloud infrastructure" className="rounded-lg mb-4" />
              <p className="text-sm text-muted-foreground text-center">Concept visualization of cloud infrastructure.</p>
            </div>
          </div>
        </motion.section>

        {/* 3. DATA ENGINEERING & ANALYTICS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="border-b border-primary/20 pb-6 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading flex items-center gap-3 flex-wrap">
              <Database className="w-10 h-10 text-primary" /> Data Engineering & Analytics
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We design data systems that connect storage, processing, governance, and analytics.
              </p>
              <ul className="space-y-4">
                <li><strong className="text-foreground">Big Data:</strong> Data lake architecture (Delta Lake, Iceberg), distributed processing (Spark, Flink), real‑time ingestion (Kafka, Kinesis).</li>
                <li><strong className="text-foreground">Business Intelligence:</strong> Creation of interactive dashboards (Power BI, Tableau, Metabase) and predictive alerts.</li>
                <li><strong className="text-foreground">Data Warehousing:</strong> Modeling (star schema, data vault), modern ETL/ELT (dbt, Airbyte), query optimization on cloud warehouses (BigQuery, Snowflake, Redshift).</li>
                <li><strong className="text-foreground">Governance & Quality:</strong> Implementation of data catalogs, lineage, and automated quality checks.</li>
              </ul>
              <p className="mt-6 text-muted-foreground">Goal: reliable, accessible, and actionable data to inform your strategy.</p>
            </div>
            <div className="bg-secondary/20 rounded-lg p-6">
              <img src={dataImg} alt="Data analytics dashboard" className="rounded-lg mb-4" />
              <p className="text-sm text-muted-foreground text-center">Illustrative analytics dashboard concept.</p>
            </div>
          </div>
        </motion.section>

        {/* 4. AUTOMATION ENGINEERING */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-32"
        >
          <div className="border-b border-primary/20 pb-6 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading flex items-center gap-3 flex-wrap">
              <Zap className="w-10 h-10 text-primary" /> Automation Engineering
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary/20 rounded-lg p-6">
              <img src={automationImg} alt="N8N automation workflows" className="rounded-lg mb-4" />
              <p className="text-sm text-muted-foreground text-center">Illustrative workflow automation concept.</p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                We develop custom automation solutions to reduce manual tasks and connect your business systems.
              </p>
              <ul className="space-y-3">
                <li><strong className="text-foreground">n8n / Zapier alternatives:</strong> Complex no‑code/low‑code workflows with conditional branching, loops, and native integrations (HubSpot, Salesforce, Stripe, etc.).</li>
                <li><strong className="text-foreground">Python RPA:</strong> Robotic process automation (document extraction, form filling, web scraping, mass email sending).</li>
                <li><strong className="text-foreground">Data orchestration:</strong> Synchronization between databases, APIs, CSV/Excel files, with monitoring and error alerts.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">Example use case: connect an ERP, carrier APIs, and email workflows to reduce manual order-processing steps and shorten operational turnaround time.</p>
            </div>
          </div>
        </motion.section>

        {/* 5. AI, MACHINE LEARNING & DEEP LEARNING */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-32"
        >
          <div className="border-b border-primary/20 pb-6 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading flex items-center gap-3 flex-wrap">
              <Brain className="w-10 h-10 text-primary" /> AI, Machine & Deep Learning
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Agents & Chatbots</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We design advanced virtual assistants incorporating the latest <strong>RAG (Retrieval-Augmented Generation)</strong> advancements to accurately answer questions based on your internal documentation, knowledge base, or business data. Multi‑channel support (web, WhatsApp, Slack, Teams).
              </p>
              <h3 className="text-2xl font-bold mb-4">Custom Models</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Creation of machine learning models (regression, classification, clustering) and deep learning (neural networks, transformers) for specific use cases: churn prediction, anomaly detection, customer segmentation, financial forecasting, image analysis, etc.
              </p>
              <h3 className="text-2xl font-bold mb-4">LLM & Fine‑tuning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fine‑tuning of open‑source models (Llama, Mistral) or use of APIs (GPT‑4, Claude) to generate content, automate responses, or assist business teams. For sensitive workloads, we can design deployment options such as on-premise or private VPC environments to keep data flows under tighter organizational control.
              </p>
            </div>
            <div className="bg-secondary/20 rounded-lg p-6">
              <img src={aiChatImg} alt="AI systems concept" className="rounded-lg mb-4" />
              <p className="text-sm text-muted-foreground text-center">Illustration of AI-enabled systems.</p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer CTA */}
      <section className="py-24 border-t border-border mt-20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8">Ready to start your project?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-none text-lg">
              Let's Talk
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}