"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";
import { contact } from "@/data/contact";

export function Contact() {
  const { t } = useTranslations();

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="card-surface relative overflow-hidden p-8 sm:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 ocean-bg-subtle"
            aria-hidden
          />
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-2 max-w-xl text-base text-muted">
            {t.contact.subtitle}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ContactRow
              icon={<Phone className="h-4 w-4" aria-hidden />}
              label={t.contact.phone}
              value={contact.phoneDisplay}
              href={`tel:${contact.phone}`}
            />
            <ContactRow
              icon={<Mail className="h-4 w-4" aria-hidden />}
              label={t.contact.email}
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactRow
              icon={<MapPin className="h-4 w-4" aria-hidden />}
              label={t.contact.location}
              value={t.contact.locationValue}
            />
            <ContactRow
              icon={<Clock className="h-4 w-4" aria-hidden />}
              label={t.contact.hours}
              value={t.contact.hoursValue}
            />
          </div>

          <div className="mt-8">
            <a href={`tel:${contact.phone}`} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden />
              {contact.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-ocean-500/15 text-ocean-700 dark:text-ocean-300">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="font-medium">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 rounded-2xl border border-soft/10 bg-card/50 p-4 transition hover:bg-card"
      >
        {content}
      </a>
    );
  }
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-soft/10 bg-card/50 p-4">
      {content}
    </div>
  );
}
