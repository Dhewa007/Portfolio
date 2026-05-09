import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const groups = [
  { title: "Frontend", Icon: Code2, items: ["React","JavaScript","HTML5","CSS3","Tailwind"] },
  { title: "Backend", Icon: Server, items: ["Node.js","Express.js","REST APIs","Auth & JWT"] },
  { title: "Database", Icon: Database, items: ["MongoDB","Mongoose","Schema Design","Aggregations"] },
  { title: "Cloud & Infra", Icon: Cloud, items: ["Microsoft 365","Domains","Pro Email","Hosting","CI/CD"] },
  { title: "AI & Systems", Icon: Brain, items: ["AI / ML","Automation","System Architecture","Integrations"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Tech Stack"
          title={<>Tools that <span className="gradient-text">power my work</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card group rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary shadow-glow">
                  <g.Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="glass rounded-full px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
