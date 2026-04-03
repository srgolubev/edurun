"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const ambassadors = [
  {
    name: "Александр Степанов (ST)",
    title: "Посол школьного спорта, рэп-исполнитель, автор Гимна школьного спорта",
    photo: "/images/photo/stepanov.jpg",
  },
  {
    name: "Евгения Медведева",
    title: "Российская фигуристка, двукратный серебряный призёр Олимпийских игр, двукратная чемпионка мира, Европы и России",
    photo: "/images/photo/medvedeva.jpg",
  },
  {
    name: "Алан Дзагоев",
    title: "Посол школьного спорта, российский футболист, заслуженный мастер спорта РФ",
    photo: "/images/photo/dzagoev.jpg",
  },
  {
    name: "Роман Костомаров",
    title: "Российский фигурист, олимпийский чемпион, двукратный чемпион мира, трёхкратный чемпион Европы и России, телеведущий",
    photo: "/images/photo/kostomarov.jpg",
  },
  {
    name: "Анастасия Тукмачева (Настя Тукитук)",
    title: "Спортивный блогер, триатлет ультрамарафонец, спортивный предприниматель",
    photo: "/images/photo/tukmacheva.jpg",
  },
  {
    name: "Дмитрий Неделин",
    title: "Российский марафонец, чемпион России, победитель Московского и Казанского марафонов",
    photo: "/images/photo/nedelin.jpg",
  },
  {
    name: "Василий Артемьев",
    title: "Российский профессиональный регбист, ведущий телепередач на каналах «Матч ТВ» и СТС",
    photo: "/images/photo/artemev.jpg",
  },
  {
    name: "Никита Нагорный",
    title: "Российский гимнаст, Олимпийский чемпион, серебряный призёр Олимпийских игр, трёхкратный чемпион мира",
    photo: "/images/photo/nagorny.jpg",
  },
  {
    name: "Никита Крюков",
    title: "Российский лыжник, Олимпийский чемпион, серебряный призёр Олимпийских игр, трёхкратный чемпион мира в спринте",
    photo: "/images/photo/kryukov.jpg",
  },
  {
    name: "Алексей Смертин",
    title: "Российский футболист, обладатель Кубка России, чемпион Москвы и России по пляжному футболу",
    photo: "/images/photo/smertin.webp",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Ambassadors() {
  return (
    <section
      id="знаменитости"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#EFEFEF", fontFamily: "'Golos Text', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-4"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Знаменитости
          </h2>
        </motion.div>

        <motion.p
          className="text-center text-base md:text-lg max-w-2xl mx-auto mb-14"
          style={{ color: "rgba(23, 23, 23, 0.6)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Бегите плечом к плечу с легендами российского спорта!
        </motion.p>

        {/* Grid: 2 cols mobile, 5 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {ambassadors.map((person, i) => (
            <motion.div
              key={person.name}
              className="group cursor-pointer rounded-xl overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
              }}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 32px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)",
                transition: { duration: 0.25, ease: "easeOut" as const },
              }}
            >
              {/* Square photo */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>

              {/* Info */}
              <div className="px-3 pt-3 pb-3 md:px-4 md:pt-3.5 md:pb-3.5">
                <h3 className="font-bold text-sm md:text-[0.9rem] text-neutral-900 leading-snug mb-1">
                  {person.name}
                </h3>
                <p
                  className="text-xs md:text-[0.75rem] leading-snug line-clamp-3"
                  style={{ color: "rgba(23, 23, 23, 0.5)" }}
                >
                  {person.title}
                </p>
              </div>

              {/* Red bottom border on hover */}
              <div
                className="h-0 group-hover:h-[3px] transition-all duration-300 ease-out"
                style={{ backgroundColor: "#c82e3e" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
