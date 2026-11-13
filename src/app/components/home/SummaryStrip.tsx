"use client";

import { motion } from "framer-motion";
import { site } from "../../data/portfolio";

export default function SummaryStrip() {
  return (
    <section className="border-y border-line bg-surface-elevated/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl px-5 py-12"
      >
        <p className="section-label mb-3">Summary</p>
        <p className="max-w-3xl text-lg text-ink-muted leading-relaxed">
          {site.summary}
        </p>
      </motion.div>
    </section>
  );
}
