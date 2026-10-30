import { SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section-shell pb-8 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
        <p className="font-mono text-sm text-white/60">Designed &amp; built by Ajay Kote © 2026</p>
        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full border border-white/15 p-2 text-white/75 transition hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
