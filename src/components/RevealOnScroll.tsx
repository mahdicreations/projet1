"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function RevealOnScroll({ children, className = "", style, onClick }: RevealOnScrollProps) {
  // Server-side: start as `true` so the HTML is rendered with `reveal active`
  // → content is present in the initial HTML, crawlable by Googlebot
  // → CSS sets opacity: 1 immediately on server-rendered HTML
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  // Track whether this is the first mount (SSR hydration)
  const hasHydrated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // On first client mount: check if element is below the fold.
    // If it's already in view (or was SSR-rendered visible), keep it visible.
    // Only start the reveal animation for elements truly below the fold.
    if (!hasHydrated.current) {
      hasHydrated.current = true;
      const rect = el.getBoundingClientRect();
      const alreadyInView = rect.top < window.innerHeight - 50;

      if (alreadyInView) {
        // Already visible — keep isVisible = true, no animation needed
        return;
      } else {
        // Below the fold: hide it and let IntersectionObserver reveal it
        setIsVisible(false);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "active" : ""} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
