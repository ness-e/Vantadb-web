"use client";

import {
  Zap,
  ShieldCheck,
  Lock,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/vanta/page-header";
import { Reveal } from "@/components/vanta/reveal";
import { VsTable } from "@/components/vanta/vs-table";
import { WHY_VANTADB } from "@/components/vanta/vanta-data";
import { useLanguage } from "@/lib/language-provider";

const ICONS: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  Lock,
  Cpu,
};

export default function WhyVantadbPage() {
  const { tt } = useLanguage();
  return (
    <div className="animate-rise">
      <PageHeader
        badge="§WHY"
        title={tt("whyVantadbPage.title", "Why VantaDB")}
        subtitle={tt("whyVantadbPage.subtitle", "An embedded Rust engine designed for local-first AI workloads. Sub-2ms latency, crash-safe by design, zero data egress, memory-safe core — and a cost that stays at zero forever.")}
        tag={tt("whyVantadbPage.tag", "Local-first · Apache 2.0")}
      />

      {/* Benefits grid */}
      <PageSection variant="cream">
        <Reveal direction="up">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 border-2 border-black bg-[#FF5500] px-2 py-0.5 font-tech text-[10px] font-bold uppercase tracking-[0.25em] text-black ">
                <span className="h-1.5 w-1.5 bg-black" />
                {tt("whyVantadb.benefitsTag", "Benefits")}
              </span>
              <h2 className="glitch-hover mt-3 font-display text-3xl uppercase leading-none text-black  sm:text-4xl">
                {tt("whyVantadb.benefitsTitle", "Four reasons it's different")}
              </h2>
            </div>
            <span className="font-tech text-[10px] uppercase tracking-wider text-black/50 ">
              {tt("whyVantadb.validatedTag", "Validated · BENCH-01 + SIFT1M")}
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_VANTADB.benefits.map((b, i) => {
            const Icon = ICONS[b.icon] ?? Zap;
            return (
              <Reveal key={b.title} direction="up" delay={i * 80} as="article">
                <article className="press--lg group relative flex h-full flex-col border-4 border-black bg-[#F2EDE2] p-5  ">
                  <span className="absolute -left-2 -top-3 rotate-[-6deg] border-2 border-black bg-black px-2 py-0.5 font-display text-xs uppercase text-[#FF5500]   ">
                    0{i + 1}
                  </span>
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center border-4 border-black bg-[#FF5500] text-black shadow-[3px_3px_0_0_#000] transition-transform group-hover:rotate-[-6deg]  ">
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </span>
                  <h3 className="glitch-hover font-display text-2xl uppercase leading-none text-black ">
                    {tt(`whyVantadb.benefits.${i}.title`, b.title)}
                  </h3>
                  <p className="mt-3 flex-1 font-tech text-xs leading-relaxed text-black/80 ">
                    {tt(`whyVantadb.benefits.${i}.body`, b.body)}
                  </p>
                  <div className="mt-4 h-1 w-full speed-lines opacity-30" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      {/* Comparison table — redesigned VsTable (replaces WHY_VANTADB.comparison block) */}
      <VsTable />
    </div>
  );
}
