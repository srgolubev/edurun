"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "#c82e3e" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Golos Text', sans-serif" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          Это твой момент славы
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Покажи, на что способен твой спортивный клуб! Собирай команду, надевай
          форму и выходи на старт. Весь город будет смотреть на нас!
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Не смотри со стороны, как другие побеждают. Будь тем, кто задает темп!
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <motion.button
            className="inline-flex items-center px-14 sm:px-18 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg cursor-pointer"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#c82e3e",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              fontFamily: "'Golos Text', sans-serif",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Регистрация
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
