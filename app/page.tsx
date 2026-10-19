import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { club } from "@/lib/club-data";

export default function HomePage() {
  return (
    <main className="relative isolate flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden px-6 py-16">
      <Image
        src="/gym-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 to-black/80"
      />

      <div className="flex max-w-3xl flex-col items-center text-center text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {club.name}
        </p>
        <h1 className="mt-4 font-heading text-6xl leading-[0.9] tracking-wide text-balance sm:text-8xl md:text-9xl">
          Ready to step in?
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 text-pretty sm:text-xl">
          Fitter. Stronger. Sharper. Your first session is free.
        </p>
        <p className="mt-3 text-sm font-medium text-white/60">
          No experience needed <span aria-hidden="true" className="text-primary">·</span>{" "}
          No sparring for beginners
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/join"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 px-8 text-base font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90"
            )}
          >
            {"I\u2019m new \u2014 start me off"}
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
          <Link
            href="/join#squad"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-14 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-black dark:border-white dark:bg-transparent dark:hover:bg-white"
            )}
          >
            {"I\u2019ve boxed before"}
          </Link>
        </div>
      </div>
    </main>
  );
}
