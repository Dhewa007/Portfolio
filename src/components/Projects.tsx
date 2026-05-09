import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock, GraduationCap, CalendarDays, Building2, Users, Briefcase, Globe } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string; category: string; tag: string;
  problem: string; features: string[]; tech: string[];
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
  link: string;       // <-- Add a "link" property
  locked?: boolean;   // <-- optional lock status (for demo, all are open except flag)
};

const projects: Project[] = [
  { title: "E-Nyanzvi School Management System", category: "Education", tag: "School", Icon: GraduationCap,
    problem: "Schools struggling with paper-based records, fees and result tracking.",
    features: ["Students & staff portal","Fees & invoicing","Results & report cards","Parent communication"],
    tech: ["React","Node.js","MongoDB","Express"],
    accent: "from-blue-500/40 to-cyan-400/40", 
    link: "https://e-nyanzvi.vercel.app/", 
  },
  { title: "EventPro365 Management Platform", category: "Events", tag: "Events", Icon: CalendarDays,
    problem: "Organisers losing time on manual ticketing and registrations.",
    features: ["Ticket sales","QR check-in","Live analytics","Email/SMS automation"],
    tech: ["React","Node.js","MongoDB","REST API"],
    accent: "from-fuchsia-500/40 to-pink-400/40",
    link: "https://eventspro365.vercel.app/",
  },
  { title: "Property365 Property Management", category: "Real Estate", tag: "Property", Icon: Building2,
    problem: "Landlords juggling tenants, leases and maintenance manually.",
    features: ["Tenant onboarding","Rent collection","Maintenance tracking","Owner dashboards"],
    tech: ["React","Express","MongoDB"],
    accent: "from-emerald-500/40 to-teal-400/40",
    link: "https://property365v2-z17t.vercel.app/",
  },
  { title: "OrgConnect Organisation System", category: "Organisations", tag: "Org", Icon: Users,
    problem: "Churches and institutions needing unified member & comms portals.",
    features: ["Member directory","Events & giving","Bulk messaging","Role-based access"],
    tech: ["React","Node.js","MongoDB"],
    accent: "from-amber-500/40 to-orange-400/40",
    link: "#",
    locked: true
  },
  { title: "BizCore Business Management", category: "Business", tag: "Business", Icon: Briefcase,
    problem: "SMEs running on spreadsheets across sales, stock and HR.",
    features: ["Sales & invoicing","Inventory","HR & payroll","Reports & insights"],
    tech: ["React","Express","MongoDB"],
    accent: "from-violet-500/40 to-indigo-400/40",
    link: "#",
    locked: true
  },
  { title: "Brand Corporate Websites", category: "Web", tag: "Web", Icon: Globe,
    problem: "Brands without a credible, conversion-focused web presence.",
    features: ["Custom UI/UX","SEO optimised","CMS ready","Analytics"],
    tech: ["React","Tailwind","Node.js"],
    accent: "from-cyan-500/40 to-sky-400/40",
    link: "http://guardianadvisory.co.zw/",
  },
];

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Premium <span className="gradient-text">systems & platforms</span></>}
          subtitle="A snapshot of platforms I've designed and engineered for real organisations."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${active === f ? "gradient-primary text-primary-foreground shadow-glow" : "glass hover:bg-secondary"}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group glass-card relative overflow-hidden rounded-3xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className={`relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-4 glass rounded-xl p-3">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive/70" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/70" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="mt-2 space-y-1.5">
                      <div className="h-1.5 w-3/4 rounded-full bg-foreground/20" />
                      <div className="h-1.5 w-1/2 rounded-full bg-foreground/15" />
                      <div className="grid grid-cols-3 gap-1.5 pt-2">
                        <div className="h-8 rounded-md bg-foreground/15" />
                        <div className="h-8 rounded-md bg-foreground/10" />
                        <div className="h-8 rounded-md bg-foreground/15" />
                      </div>
                      <div className="h-12 rounded-md bg-foreground/10" />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-background/40 px-2.5 py-1 text-[10px] backdrop-blur">
                    {p.tag}
                  </div>
                  <div className="absolute left-3 bottom-3 grid h-9 w-9 place-items-center rounded-xl glass">
                    <p.Icon className="h-4 w-4 text-primary-glow" />
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.problem}</p>

                  <ul className="mt-3 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-primary-glow" />{f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="glass rounded-full px-2.5 py-0.5 text-[10px]">{t}</span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2">
                    {/* "Live Demo" links to the actual project if not locked, otherwise to contact */}
                    <a
                      href={p.locked ? "#contact" : p.link}
                      target={p.locked ? undefined : "_blank"}
                      rel={p.locked ? undefined : "noopener noreferrer"}
                      className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full gradient-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-glow ${p.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                      tabIndex={0}
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    {/* Show "Request Access" if locked, otherwise show "Visit Site" as a secondary link */}
                    {p.locked ? (
                      <a href="#contact" className="glass inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium hover:bg-secondary">
                        <Lock className="h-3.5 w-3.5" /> Request Access
                      </a>
                    ) : (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium hover:bg-secondary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
