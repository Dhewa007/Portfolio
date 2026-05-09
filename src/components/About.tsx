import { motion } from "framer-motion";
import { GraduationCap, Rocket, Globe2, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const points = [
  { icon: GraduationCap, title: "AI & ML at UZ", desc: "Studied Artificial Intelligence and Machine Learning at the University of Zimbabwe." },
  { icon: Rocket, title: "Full Stack Engineer", desc: "Designing and shipping production systems end-to-end — frontend, backend and infrastructure." },
  { icon: Globe2, title: "Africa-First Builder", desc: "Practical, scalable systems built around the realities of African businesses & institutions." },
  { icon: ShieldCheck, title: "Microsoft 365 & IT", desc: "Digital transformation, security and modern workplace setup for growing organisations." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="About Me"
          title={<>Engineering <span className="gradient-text">real outcomes</span> for real organisations</>}
        />
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-card relative overflow-hidden rounded-3xl p-1">
              <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent p-10">
                <div className="font-display text-7xl font-bold gradient-text">TNC</div>
                <div className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">Tavonga Nyasha Chinyanganya</div>
                <div className="mt-2 text-foreground">Full Stack Developer · AI & ML · Systems Consultant</div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {["React","Node","Mongo","Express","M365","REST"].map((t) => (
                    <span key={t} className="glass rounded-full px-3 py-1 text-center text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <p className="text-balance text-lg text-muted-foreground">
              I help schools, businesses, organisations and startups solve real problems through software. With a background in <span className="text-foreground">Artificial Intelligence and Machine Learning from the University of Zimbabwe</span>, I focus on building elegant, scalable systems that actually move the needle — from custom platforms and dashboards to Microsoft 365 environments and IT infrastructure.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <p.icon className="h-5 w-5 text-primary-glow" />
                  <div className="mt-3 font-semibold">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
