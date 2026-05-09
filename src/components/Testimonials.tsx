import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { name: "Mrs. R. Moyo", role: "School Administrator", org: "Hilltop Academy",
    quote: "Tavonga delivered a school management system that transformed how we run admissions, fees and reports. Truly world-class work.", initials: "RM" },
  { name: "T. Madziva", role: "Founder & CEO", org: "Madziva Holdings",
    quote: "He understood our business in days, not weeks. The platform he built feels enterprise-grade and our team adopted it overnight.", initials: "TM" },
  { name: "Pastor B. Sibanda", role: "Senior Pastor", org: "Living Hope Assembly",
    quote: "Our member portal and communications now run smoothly. Tavonga is professional, fast and deeply skilled.", initials: "BS" },
  { name: "C. Ncube", role: "Operations Lead", org: "EventPro Africa",
    quote: "Our event ticketing was painful before. The platform Tavonga built saves us countless hours and our clients love it.", initials: "CN" },
  { name: "Eng. P. Dube", role: "Co-founder", org: "Gridtech Startup",
    quote: "Crisp engineering, beautiful UI and reliable delivery. Easily one of the best developers I've worked with.", initials: "PD" },
  { name: "Mrs. L. Chari", role: "Property Manager", org: "Skyline Estates",
    quote: "Tenant management used to be chaos. Now everything is centralised, automated and beautifully organised.", initials: "LC" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Loved by <span className="gradient-text">teams & founders</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card relative rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/20" />
              <div className="flex gap-0.5 text-primary-glow">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.org}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
