"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  number?: number;
  suffix?: string;
  label: string;
  special?: boolean;
  title?: string;
}

const stats: StatItem[] = [
  { number: 10000, suffix: "", label: "обучающихся, педагогов и родителей" },
  { number: 4, suffix: "", label: "дистанции для любого уровня подготовки" },
  { special: true, title: "Звёзды спорта", label: "и представители Департаментов" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("ru-RU").replace(",", " ");
}

function AnimatedNumber({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{formatNumber(count)}</>;
}

function StatCard({ item, index }: { item: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl p-8 md:p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
    >
      {item.special ? (
        <div className="text-2xl md:text-3xl font-extrabold text-primary mb-3">
          {item.title}
        </div>
      ) : (
        <div className="text-5xl md:text-6xl font-black text-primary mb-3 tabular-nums">
          {item.number !== undefined && (
            <AnimatedNumber target={item.number} inView={inView} />
          )}
        </div>
      )}
      <p className="text-base md:text-lg text-muted font-medium">{item.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Забег Московского образования — это беспрецедентное по своему масштабу событие,
          объединяющее всех, кто причастен к обучению и воспитанию в столице.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <StatCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
