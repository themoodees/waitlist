"use client";

import { useEffect } from "react";

export function LandingScripts() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    const toggles = document.querySelectorAll<HTMLButtonElement>(".objection-toggle");
    const onToggle = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const objection = button.closest(".objection");
      if (!objection) return;

      const isOpen = objection.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    };

    toggles.forEach((button) => button.addEventListener("click", onToggle));

    return () => {
      observer.disconnect();
      toggles.forEach((button) => button.removeEventListener("click", onToggle));
    };
  }, []);

  return null;
}
