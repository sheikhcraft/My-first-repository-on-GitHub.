"use client";

import { useState } from "react";
import { Camera, Check, Copy, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { club, externalLinkProps } from "@/lib/club-data";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(club.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-white/10"
    >
      {copied ? (
        <Check className="size-3.5 text-emerald-400" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5" aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

const cardClass = "flex flex-col rounded-xl border border-white/10 bg-card p-5";
const iconClass = "flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary";
const linkClass =
  "mt-1 inline-flex items-center gap-1.5 break-all font-semibold text-white underline-offset-4 hover:text-primary hover:underline";

export function ContactCards() {
  return (
    <section aria-label="Contact options" className="grid gap-4 md:grid-cols-3">
      <article className={cardClass}>
        <div className="flex items-start justify-between gap-3">
          <span className={iconClass}>
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <CopyEmailButton />
        </div>
        <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Email</h2>
        <a href={`mailto:${club.email}`} className={linkClass}>
          {club.email}
        </a>
      </article>

      <article className="flex flex-col rounded-xl border border-primary bg-primary/10 p-5 ring-1 ring-primary/40">
        <div className="flex items-start justify-between gap-3">
          <span className={iconClass}>
            <Camera className="size-5" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            Fastest reply
          </span>
        </div>
        <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Instagram</h2>
        <a href={club.instagram} {...externalLinkProps} className={linkClass}>
          {club.instagramHandle}
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </article>

      <article className={cardClass}>
        <span className={iconClass}>
          <MessageCircle className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">WhatsApp</h2>
        <a href={club.whatsapp} {...externalLinkProps} className={linkClass}>
          Join the community
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </article>
    </section>
  );
}
