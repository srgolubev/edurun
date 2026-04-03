"use client";

import { motion } from "framer-motion";

const events = [
  {
    time: "09:00",
    title: "Начало работы стартового городка",
    desc: "в парке Музеон",
  },
  {
    time: "10:00 \u2013 10:30",
    title: "Разминка с олимпийским чемпионом",
    desc: "",
  },
  {
    time: "10:30 \u2013 13:00",
    title: "Забеги во всех категориях",
    desc: "",
  },
];

const thematicRuns = [
  "Семейный забег",
  "Забег для детей с ОВЗ",
  "Звездный забег",
  "Забег директоров школ",
  "Забег маскотов и младших школьников",
];

export default function Program() {
  return (
    <section
      id="program"
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Программа{" "}
            <span style={{ color: "#c82e3e" }}>мероприятия</span>
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
          Приходите заранее, чтобы успеть насладиться атмосферой стартового
          городка.
        </motion.p>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-14">
          {/* Vertical red line */}
          <div
            className="absolute left-4 md:left-6 top-3 bottom-3 w-0.5"
            style={{ backgroundColor: "#c82e3e" }}
          />

          <div className="space-y-8 md:space-y-10">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="relative flex items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              >
                {/* Dot on the line */}
                <div className="absolute -left-10 md:-left-14 top-5 flex items-center justify-center w-8 md:w-12">
                  <div
                    className="w-3.5 h-3.5 rounded-full z-10 relative"
                    style={{
                      backgroundColor: "#c82e3e",
                      boxShadow: "0 0 0 4px rgba(200,46,62,0.15)",
                    }}
                  />
                </div>

                {/* Content card */}
                <div
                  className="flex-1 rounded-2xl p-5 md:p-7"
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl font-black mb-2 leading-none"
                    style={{ color: "#c82e3e", fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {event.time}
                  </div>
                  <h3
                    className="text-base md:text-lg font-bold mb-1"
                    style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {event.title}
                  </h3>
                  {event.desc && (
                    <p
                      className="text-sm md:text-base"
                      style={{ color: "rgba(26,16,21,0.6)" }}
                    >
                      {event.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Thematic runs */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className="text-2xl sm:text-3xl font-black mb-8 text-center"
            style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
          >
            Тематические{" "}
            <span style={{ color: "#c82e3e" }}>забеги</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {thematicRuns.map((run, i) => (
              <motion.div
                key={run}
                className="rounded-2xl p-5 md:p-6"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  borderLeft: "3px solid #c82e3e",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
              >
                <p
                  className="text-base md:text-lg font-semibold"
                  style={{ color: "#1A1015", fontFamily: "'Golos Text', sans-serif" }}
                >
                  {run}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
