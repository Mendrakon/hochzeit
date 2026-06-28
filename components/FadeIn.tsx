"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Verzögerung in ms, um gestaffelte Effekte zu erzeugen */
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Wrapper, der seinen Inhalt sanft einblendet, sobald er in den Viewport
 * scrollt. Nutzt IntersectionObserver – kein externes Animations-Package.
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`fade-in ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
