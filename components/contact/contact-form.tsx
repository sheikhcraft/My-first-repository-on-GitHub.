"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { club } from "@/lib/club-data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      const response = await fetch(club.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      aria-labelledby="form-heading"
      className="rounded-2xl border border-white/10 bg-card p-6 sm:p-8"
    >
      <h2 id="form-heading" className="font-heading text-4xl tracking-wide text-white sm:text-5xl">
        Send us a message
      </h2>

      {status === "success" ? (
        <div role="status" className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-6">
          <CheckCircle2 className="size-8 text-emerald-400" aria-hidden="true" />
          <p className="text-lg font-semibold text-white">Message sent. Thanks!</p>
          <p className="text-white/70">We&apos;ll get back to you soon. For the fastest reply, DM us on Instagram.</p>
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" name="name" autoComplete="name" required className="h-11" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">UCL email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@ucl.ac.uk"
                pattern="[^@\s]+@ucl\.ac\.uk"
                title="Please use your @ucl.ac.uk email address"
                required
                className="h-11"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea id="contact-message" name="message" rows={5} required />
          </div>
          {status === "error" && (
            <p role="alert" className="text-sm text-red-300">
              Something went wrong sending your message. Please email us at {club.email} instead.
            </p>
          )}
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="h-12 self-start px-6 font-semibold hover:bg-primary/90"
          >
            {status === "submitting" ? (
              <Loader2 data-icon="inline-start" className="animate-spin" aria-hidden="true" />
            ) : (
              <Send data-icon="inline-start" aria-hidden="true" />
            )}
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>
        </form>
      )}
    </section>
  );
}
