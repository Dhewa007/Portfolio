import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Cpu, Layers, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-24 top-48 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-muted-foreground">Available for new projects</span>
              <span className="ml-1 inline-block h-1.5 w-1.5 animate-glow rounded-full bg-primary-glow shadow-glow" />
            </div>

            <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Building <span className="gradient-text">Smart Digital Systems</span> for Modern Organisations
            </h1>

            <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
              I'm <span className="font-medium text-foreground">Tavonga Nyasha Chinyanganya</span> — a Full Stack Developer & AI/ML enthusiast crafting scalable software, business platforms, school systems, and IT infrastructure for forward-thinking organisations across Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3.5 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#projects" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium transition-colors hover:bg-secondary">
                View My Work
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />Masvingo, Zimbabwe</span>
              <span className="inline-flex items-center gap-1.5"><Cpu className="h-4 w-4 text-primary" />AI & ML — UZ</span>
              <span className="inline-flex items-center gap-1.5"><Layers className="h-4 w-4 text-primary" />Full Stack Engineer</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl" />
              <div className="glass-card relative h-full w-full rounded-3xl p-6">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-muted-foreground">~/tavonga.dev</span>
                </div>
                <pre className="mt-4 overflow-hidden text-xs leading-relaxed text-muted-foreground md:text-sm">
{`> const dev = {
    name: "Tavonga",
    role: "Full Stack Engineer",
    stack: ["React", "Node", "Mongo"],
    focus: "AI · Systems · Scale",
    location: "Masvingo, ZW",
};

> dev.build("smart systems")
✓ shipped`}
                </pre>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="glass absolute -right-4 top-12 rounded-2xl p-3 shadow-glow"
                >
                  <Zap className="h-5 w-5 text-primary-glow" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="glass absolute -bottom-3 -left-4 rounded-2xl px-3 py-2 text-xs shadow-glow-accent"
                >
                  <span className="gradient-text font-semibold">99.9% Uptime</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
