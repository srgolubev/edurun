"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/photo/merch1.jpg", alt: "Фирменная футболка участника забега" },
  { src: "/images/photo/merch2.jpg", alt: "Спортивный рюкзак-мешок" },
  { src: "/images/photo/merch3.jpg", alt: "Памятная медаль финишера" },
  { src: "/images/photo/merch4.jpg", alt: "Экипировка участника забега" },
  { src: "/images/photo/merch5.jpg", alt: "Стартовый пакет участника" },
  { src: "/images/photo/merch6.jpg", alt: "Наградная атрибутика забега" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Merch() {
  return (
    <section
      id="merch"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
          >
            Фирменный мерч и награды
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: "#1A1015", opacity: 0.65 }}
          >
            Каждый участник получит стильную экипировку
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
