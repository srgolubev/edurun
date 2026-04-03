"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Пройти регистрацию",
    description: "Заполните анкету на сайте регистрации.",
  },
  {
    number: 2,
    title: "Медицинский допуск",
    description:
      "До даты начала соревнований получите у врача справку, допускающую к соревнованиям. Без нее организаторы не разрешат участвовать в забеге.",
  },
  {
    number: 3,
    title: "Получение стартового пакета",
    description:
      "14\u201316 мая с 13:00 до 20:00 по адресу: Москва, ул. Косыгина 17 (ГБОУ \u00abВоробьевы горы\u00bb). Предъявите оригиналы документов:",
    subItems: [
      "Документ, удостоверяющий личность (паспорт РФ / свидетельство о рождении)",
      "Индивидуальный или коллективный медицинский допуск (оригинал и копия)",
      "Полис ОМС или ДМС",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function HowToParticipate() {
  return (
    <section
      id="participation"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14"
          style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Как принять участие
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              custom={step.number - 1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Step number */}
              <span
                className="text-5xl font-extrabold mb-4 block"
                style={{ color: "#c82e3e", fontFamily: "'Golos Text', sans-serif" }}
              >
                {step.number}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "#1A1015", opacity: 0.7 }}
              >
                {step.description}
              </p>

              {/* Sub-items */}
              {step.subItems && (
                <ul className="space-y-2 mt-1">
                  {step.subItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: "#1A1015", opacity: 0.7 }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#c82e3e" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Warning */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-3 px-6 py-4 rounded-xl mx-auto max-w-2xl"
          style={{ backgroundColor: "#c82e3e10", border: "1px solid #c82e3e30" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <AlertTriangle size={20} style={{ color: "#c82e3e", flexShrink: 0 }} />
          <span
            className="text-sm font-semibold"
            style={{ color: "#c82e3e" }}
          >
            Выдачи стартовых номеров в день старта НЕ БУДЕТ!
          </span>
        </motion.div>
      </div>
    </section>
  );
}
