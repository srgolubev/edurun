"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Дистанции", href: "#distances" },
  { label: "Программа", href: "#program" },
  { label: "Участие", href: "#participation" },
  { label: "Лица проекта", href: "#ambassadors" },
  { label: "Мерч", href: "#merch" },
];

function VKIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ВКонтакте"
    >
      <path d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.23-2 3.79-3.95h2.58c-.43 2.4-2.23 4.23-3.51 4.97 1.28.6 3.33 2.21 4.12 5.02h-2.84c-.62-1.91-2.14-3.39-4.14-3.59v3.59h-.31Z" />
    </svg>
  );
}

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1A1A1A]">
      {/* Top red accent line */}
      <div className="h-[2px] w-full bg-[#c82e3e]" />

      <motion.div
        className="py-12 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo + subtitle + date */}
            <div className="flex flex-col gap-3 items-start">
              <Image
                src="/images/logo-main/mosobr.png"
                alt="Московское Образование"
                width={512}
                height={174}
                className="h-8 md:h-10 w-auto max-w-[200px] brightness-0 invert"
                style={{ objectFit: "contain" }}
              />
              <p className="text-sm text-white/50 max-w-xs">
                Забег Московского Образования
              </p>
              <span className="text-sm font-semibold text-[#c82e3e]">
                17 мая 2026
              </span>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap gap-4 md:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* VK Social */}
            <div className="flex items-center">
              <a
                href="https://vk.com/mcvp_schsport"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white/60 hover:bg-[#c82e3e] hover:text-white transition-all duration-300"
                aria-label="ВКонтакте"
              >
                <VKIcon size={18} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 mb-6 h-px w-full bg-white/10" />

          <p className="text-xs text-white/40 text-center">
            &copy; 2026 Забег Московского Образования. Все права защищены.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
