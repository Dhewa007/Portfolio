import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="glass inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-glow">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-balance text-muted-foreground md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
