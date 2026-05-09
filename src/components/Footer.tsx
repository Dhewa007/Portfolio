import { Code2, Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary shadow-glow">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="gradient-text">Tavonga<span className="text-foreground/60">.dev</span></span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Building smart, scalable digital systems for modern organisations across Africa — software, IT and beyond.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="https://wa.me/263776081873" aria-label="WhatsApp" className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"><Github className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-sm font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {["Home","About","Projects","Skills"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-sm font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>School Systems</li>
              <li>Microsoft 365</li>
              <li>IT Infrastructure</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-glow" /> tavonganyasha3@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-glow" /> 0776 081 873</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-glow" /> Masvingo, Zimbabwe</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Tavonga Nyasha Chinyanganya. All rights reserved.</div>
          <div>Crafted with care in Masvingo, Zimbabwe.</div>
        </div>
      </div>
    </footer>
  );
}
