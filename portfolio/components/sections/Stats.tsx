"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/lib/data/stats";

function AnimatedCounter({ value, suffix }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(value);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Number(current.toFixed(value.includes(".") ? 2 : 0)));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, value]);

  return (
    <span ref={ref} className="gradient-text">
      {value.includes(".") ? count.toFixed(2) : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const locale = useLocale() as "pl" | "en";

  return (
    <section className="py-16 border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass rounded-xl p-4 card-hover flex flex-col justify-center min-h-[120px]"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 whitespace-nowrap">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-muted-foreground leading-tight">
                {stat.label[locale]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
