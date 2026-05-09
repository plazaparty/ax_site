"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function ConsultantThinkingPanel({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300/80">Consultant engine</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22 }}
          className="mt-2 text-[13px] leading-snug text-white/78"
        >
          {message}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
