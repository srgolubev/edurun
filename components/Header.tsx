"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Дистанции", href: "#distances" },
  { label: "Программа", href: "#program" },
  { label: "Участие", href: "#participation" },
  { label: "Лица проекта", href: "#ambassadors" },
  { label: "Мерч", href: "#merch" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/logo-main/mosobr.png"
              alt="Забег Московского Образования"
              width={512}
              height={174}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-[#c82e3e]"
                    : "text-[#1A1A1A]/70 hover:text-[#c82e3e]"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c82e3e] rounded-full"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#participation"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#participation");
              }}
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#c82e3e] cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Регистрация
            </motion.a>

            <button
              className="md:hidden p-2 rounded-lg text-[#1A1A1A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Меню"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-[#EFEFEF]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col px-4 pb-4 pt-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block text-left py-3 px-2 text-base font-medium transition-colors border-b border-[#EFEFEF] last:border-0 ${
                    activeSection === link.href
                      ? "text-[#c82e3e]"
                      : "text-[#1A1A1A]/70 hover:text-[#c82e3e]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#participation"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#participation");
                }}
                className="mt-3 w-full py-3 rounded-full text-white font-semibold text-center bg-[#c82e3e] block"
              >
                Регистрация
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
