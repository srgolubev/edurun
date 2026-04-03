"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const badges = [
  { icon: Calendar, label: "17 мая 2026" },
  { icon: MapPin, label: "Садовое кольцо" },
  { icon: Users, label: "10 000 участников" },
];

const bulletPoints = [
  {
    bold: "Стань первым:",
    text: "Второго \u00ABпервого в истории\u00BB забега уже не будет.",
  },
  {
    bold: "Твоя команда \u2014 твоя сила:",
    text: "Беги плечом к плечу с друзьями, защищай честь своей школы.",
  },
  {
    bold: "Музыка, поддержка трибун,",
    text: "крутой мерч и та самая медаль финишера.",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      {/* Left character — desktop only */}
      <motion.div
        className="absolute bottom-0 left-0 z-10 pointer-events-none hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/images/boy_fss_26.png"
          alt="Участник забега"
          width={320}
          height={480}
          className="w-48 lg:w-60 xl:w-72 h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Right character — desktop only */}
      <motion.div
        className="absolute bottom-0 right-0 z-10 pointer-events-none hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/images/girl_fss_26.png"
          alt="Участница забега"
          width={320}
          height={480}
          className="w-48 lg:w-60 xl:w-72 h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-5 sm:px-8 text-center py-24">
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
          style={{ color: "#1A1A1A", fontFamily: "'Golos Text', sans-serif" }}
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Забег Московского образования
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 tracking-wide"
          style={{ color: "#c82e3e", fontFamily: "'Golos Text', sans-serif" }}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Первый. Исторический. Твой.
        </motion.p>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0E0E0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <Icon size={16} style={{ color: "#c82e3e" }} strokeWidth={2.5} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#1A1A1A" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: "#3A3A3A", fontFamily: "'Golos Text', sans-serif" }}
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Ты готов вписать свое имя в историю московского спорта? Впервые
          в&nbsp;истории московского образования мы объявляем грандиозный забег
          школьных спортивных клубов! Такого масштаба столица еще не видела.
        </motion.p>

        {/* "Почему ты должен быть там?" */}
        <motion.div
          className="text-left max-w-xl mx-auto mb-10"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2
            className="text-lg sm:text-xl font-bold mb-4 text-center"
            style={{ color: "#1A1A1A", fontFamily: "'Golos Text', sans-serif" }}
          >
            Почему ты должен быть там?
          </h2>
          <ul className="space-y-3">
            {bulletPoints.map(({ bold, text }) => (
              <li
                key={bold}
                className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                style={{ color: "#3A3A3A" }}
              >
                <span
                  className="mt-1.5 block h-2 w-2 min-w-[8px] rounded-full"
                  style={{ backgroundColor: "#c82e3e" }}
                />
                <span>
                  <strong style={{ color: "#1A1A1A" }}>{bold}</strong> {text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#registration"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-base sm:text-lg cursor-pointer"
          style={{
            backgroundColor: "#c82e3e",
            boxShadow: "0 6px 24px rgba(200, 46, 62, 0.3)",
            fontFamily: "'Golos Text', sans-serif",
          }}
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 32px rgba(200, 46, 62, 0.45)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          Регистрация
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}
