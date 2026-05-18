"use client";
 
import { useEffect, useState } from "react";
 
export default function BackToTop({
  threshold = 300,
  scrollTo = 0,
}) {
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
 
  const handleClick = () => {
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };
 
  return (
    <>
      <button
        onClick={handleClick}
        aria-label="Back to top"
        title="Back to top"
        className={[
          "fixed bottom-6 right-6 z-50",
          "h-11 w-11 rounded-full",
          "bg-slate-800 text-white",
          "border border-slate-600",
          "shadow-lg shadow-slate-900/40",
          "hover:bg-slate-700 hover:border-slate-500",
          "hover:shadow-xl hover:shadow-slate-900/50",
          "focus:outline-none focus-visible:ring-2",
          "focus-visible:ring-blue-400 focus-visible:ring-offset-2",
          "focus-visible:ring-offset-slate-900",
          "active:scale-95",
          "flex items-center justify-center",
          "transition-all duration-300 ease-in-out",
          visible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}