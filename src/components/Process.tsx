import { motion } from "framer-motion";
import { Search, ClipboardList, Palette, Code2, ShieldCheck, Rocket, LifeBuoy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { Icon: Search, title: "Discovery", desc: "Understanding your goals, users and constraints." },
  { Icon: ClipboardList, title: "Planning", desc: "Scope, architecture and a clear roadmap." },
  { Icon: Palette, title: "Design", desc: "Wireframes & UI design that feel premium." },
  { Icon: Code2, title: "Development", desc: "Clean, scalable engineering with weekly demos." },
  { Icon: ShieldCheck, title: "Testing", desc: "QA, performance and security validation." },
  { Icon: Rocket, title: "Deployment", desc: "Smooth go-live with monitoring set up." },
  { Icon: LifeBuoy, title: "Support", desc: "Ongoing improvements, training and care." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="My Process"
          title={<>From idea to <span className="gradient-text">launch & beyond</span></>}
        />
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-7">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card relative rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl gradient-primary shadow-glow">
                  <s.Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-primary-glow">Step {i + 1}</div>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
