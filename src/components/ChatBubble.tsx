"use client";

import { ReactNode } from "react";

interface ChatBubbleProps {
  role: "bot" | "user";
  children: ReactNode;
}

export default function ChatBubble({ role, children }: ChatBubbleProps) {
  const isBot = role === "bot";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div className={`flex max-w-[85%] gap-3 ${isBot ? "" : "flex-row-reverse"}`}>
        {isBot && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-[10px] font-bold text-white">
            KT
          </div>
        )}
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isBot
              ? "rounded-tl-md bg-gray-100 text-gray-800"
              : "rounded-tr-md bg-red-500 text-white"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
