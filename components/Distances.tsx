"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const distances = [
  {
    km: "1",
    label: "КМ",
    audience: "Дети до 10 лет и семейный забег",
    limit: "1 000 человек",
  },
  {
    km: "3",
    label: "КМ",
    audience: "Подростки 11\u201314 лет",
    limit: "3 000 человек",
  },
  {
    km: "5",
    label: "КМ",
    audience: "Без возрастных ограничений",
    limit: "4 000 человек",
  },
  {
    km: "10",
    label: "КМ",
    audience: "Без возрастных ограничений",
    limit: "2 000 человек",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Distances() {
  return (
    <section
      id="distances"
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
          >
            Выбери свою{" "}
            <span style={{ color: "#c82e3e" }}>дистанцию</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-center text-base md:text-lg max-w-xl mx-auto mb-14"
          style={{ color: "rgba(26,16,21,0.65)", fontFamily: "'Golos Text', sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          Мы подготовили маршруты как для самых маленьких, так и для опытных
          бегунов.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {distances.map((d, i) => (
            <motion.div
              key={d.km}
              className="relative rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Red top strip */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: "#c82e3e" }}
              />

              <div className="p-7 md:p-9">
                {/* Limit badge */}
                <div className="absolute top-5 right-5">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(200,46,62,0.08)",
                      color: "#c82e3e",
                    }}
                  >
                    {d.limit}
                  </span>
                </div>

                {/* Distance number */}
                <div
                  className="text-7xl md:text-8xl font-black leading-none"
                  style={{ color: "#c82e3e" }}
                >
                  {d.km}
                </div>
                <div
                  className="text-lg md:text-xl font-black mb-5 tracking-wide"
                  style={{ color: "#c82e3e" }}
                >
                  {d.label}
                </div>

                <p
                  className="text-base md:text-lg font-medium"
                  style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
                >
                  {d.audience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distance map */}
        <motion.div
          className="mt-14 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div className="p-4 md:p-6">
              <h3
                className="text-lg md:text-xl font-bold mb-4 text-center"
                style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
              >
                Карта маршрутов
              </h3>
              <div className="relative w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/distance_map.webp"
                  alt="Карта дистанций забега"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
