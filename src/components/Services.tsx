import { motion } from "framer-motion";
import {
  Globe, GraduationCap, CalendarDays, Building2, Briefcase, Users,
  Mail, Cloud, Server, Workflow, BookOpen, Network,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { icon: Globe, title: "Corporate Websites", desc: "Premium SEO-optimised websites that convert visitors into clients." },
  { icon: GraduationCap, title: "School Management Systems", desc: "End-to-end platforms for students, staff, fees, results and parents." },
  { icon: CalendarDays, title: "Event Management Systems", desc: "Ticketing, registrations, scheduling, and live event analytics." },
  { icon: Building2, title: "Property Management Systems", desc: "Tenants, leases, payments, maintenance — all in one dashboard." },
  { icon: Briefcase, title: "Business Management Systems", desc: "Sales, inventory, HR and finance unified for growing businesses." },
  { icon: Users, title: "Organisation Systems", desc: "Member portals, communications and workflows for institutions & churches." },
  { icon: Cloud, title: "Microsoft 365 Setup", desc: "Tenant configuration, user management, security and adoption." },
  { icon: Mail, title: "Domains & Pro Email", desc: "Domain purchase, DNS, professional email and brand identity." },
  { icon: Network, title: "IT Infrastructure", desc: "Networking, cloud setup, backups and small-office IT systems." },
  { icon: Workflow, title: "Systems Automation", desc: "Automate reports, approvals and repetitive tasks with smart workflows." },
  { icon: BookOpen, title: "Training & Onboarding", desc: "Hands-on training to empower your team with new tools and systems." },
  { icon: Server, title: "Hosting & Deployment", desc: "Reliable hosting, CI/CD pipelines, monitoring and zero-downtime deploys." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="What I Do"
          title={<>End-to-end <span className="gradient-text">digital solutions</span></>}
          subtitle="From custom software platforms to IT infrastructure — I help organisations build, automate and scale."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-2xl gradient-primary p-3 shadow-glow">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
