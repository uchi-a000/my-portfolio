"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 20px以上スクロールされたかをチェック
      setIsScrolled(window.scrollY > 20);

      // どのセクションがアクティブかを検出
      const sections = ["about", "skills", "works"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // セクションの上端がビューポートの上から100px以内、かつ下端が100px以上にある場合にアクティブと判定
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // クリーンアップ関数: コンポーネントがアンマウントされるときにリスナーを解除
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "works", label: "WORKS" },
    { id: "skills", label: "SKILLS" },
    { id: "about", label: "ABOUT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-end items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-medium transition-colors hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
