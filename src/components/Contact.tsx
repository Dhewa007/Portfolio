import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = `Hello Tavonga, my name is ${fd.get("name")}.\n\n${fd.get("message")}\n\nReply: ${fd.get("email")}`;
    window.location.href = `mailto:tavonganyasha3@gmail.com?subject=${encodeURIComponent(String(fd.get("subject") || "New Project Inquiry"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Let's Talk"
          title={<>Start your <span className="gradient-text">next project</span></>}
          subtitle="Tell me about your organisation, project or idea — I usually reply within a day."
        />
        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-7 lg:col-span-5"
          >
            <h3 className="text-xl font-semibold">Direct contact</h3>
            <p className="mt-1 text-sm text-muted-foreground">Reach out via your preferred channel.</p>
            <div className="mt-6 space-y-3">
              <a href="mailto:tavonganyasha3@gmail.com" className="glass flex items-center gap-3 rounded-2xl p-4 transition-colors hover:bg-secondary">
                <Mail className="h-5 w-5 text-primary-glow" />
                <div><div className="text-xs text-muted-foreground">Email</div><div className="text-sm font-medium">tavonganyasha3@gmail.com</div></div>
              </a>
              <a href="https://wa.me/263776081873" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-2xl p-4 transition-colors hover:bg-secondary">
                <MessageCircle className="h-5 w-5 text-primary-glow" />
                <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="text-sm font-medium">+263 776 081 873</div></div>
              </a>
              <a href="tel:+263776081873" className="glass flex items-center gap-3 rounded-2xl p-4 transition-colors hover:bg-secondary">
                <Phone className="h-5 w-5 text-primary-glow" />
                <div><div className="text-xs text-muted-foreground">Phone</div><div className="text-sm font-medium">0776 081 873</div></div>
              </a>
              <div className="glass flex items-center gap-3 rounded-2xl p-4">
                <MapPin className="h-5 w-5 text-primary-glow" />
                <div><div className="text-xs text-muted-foreground">Location</div><div className="text-sm font-medium">Masvingo, Zimbabwe</div></div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <a href="#" aria-label="LinkedIn" className="glass grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="glass grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary"><Github className="h-4 w-4" /></a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-7 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Your name" placeholder="Jane Doe" required />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" required />
              <Field name="subject" label="Subject" placeholder="Project inquiry" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                <textarea name="message" required rows={6} placeholder="Tell me about your project, organisation or goals…"
                  className="glass w-full rounded-2xl bg-transparent p-3.5 text-sm outline-none transition-all focus:border-primary focus:shadow-glow" />
              </div>
            </div>
            <button type="submit"
              className="group mt-5 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105">
              {sent ? (<><CheckCircle2 className="h-4 w-4" /> Sent — check your email</>) : (<>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input {...props}
        className="glass w-full rounded-2xl bg-transparent p-3.5 text-sm outline-none transition-all focus:border-primary focus:shadow-glow" />
    </div>
  );
}
