"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { club, navLinks } from "@/lib/club-data";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => !href.includes("#") && href === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6"
      >
        <Link
          href="/"
          className="font-heading text-2xl tracking-wide text-white"
          onClick={() => setOpen(false)}
        >
          {club.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white",
                  isActive(link.href) && "text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/join"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants(), "font-semibold hover:bg-primary/90")}
          >
            Free Taster
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-white/10 px-6 py-3 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "block rounded-md px-3 py-3 text-base font-medium text-white/75 hover:bg-white/5 hover:text-white",
                  isActive(link.href) && "text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
