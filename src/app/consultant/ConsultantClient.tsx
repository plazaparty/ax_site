"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useCustomer } from "@/context/CustomerContext";
import { getRecommendations } from "@/data/recommend";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";
import ProductCard from "@/components/ProductCard";
import SitePageHero from "@/components/SitePageHero";
import { portalPanelTone } from "@/data/portalVisual";
import {
  ChatMessage,
  AxStage,
  NeededTech,
  ProductPreference,
} from "@/types";

type ConversationStep =
  | "axStage"
  | "neededTech"
  | "productType"
  | "freePrompt"
  | "result";

const AX_STAGES: AxStage[] = [
  "검토 전",
  "아이디어 단계",
  "PoC 진행 중",
  "도입 검토",
  "운영 고도화",
];

const NEEDED_TECHS: NeededTech[] = [
  "상담 AI",
  "문서 요약",
  "지식검색",
  "음성인식",
  "비전AI",
  "업무자동화",
];

const PRODUCT_TYPES: ProductPreference[] = [
  "바로 사용 가능한 서비스",
  "커스터마이징형 구축",
  "컨설팅 우선",
];

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function ConsultantClient() {
  const customer = useCustomer();
  const searchParams = useSearchParams();
  const query = (searchParams.get("query") ?? "").trim();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<ConversationStep>("axStage");
  const [inputDisabled, setInputDisabled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  const addBotMessage = useCallback(
    (content: string, options?: string[]) => {
      setMessages((prev) => [
        ...prev,
        { id: generateId(), role: "bot", content, options },
      ]);
      scrollToBottom();
    },
    [scrollToBottom]
  );

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    setTimeout(() => {
      if (query) {
        addBotMessage(`입력하신 내용을 기반으로 AX 추천을 시작합니다: ${query}`);
      }
      addBotMessage(
        "안녕하세요. KT AX AI 컨설턴트입니다.\n조직의 AX 목표와 현재 상황을 바탕으로 적합한 상품과 서비스를 추천해 드릴게요.\n먼저 몇 가지를 확인하겠습니다."
      );
    }, 400);

    setTimeout(() => {
      addBotMessage(
        "현재 AX 도입은 어느 단계에 있으신가요? 아래에서 가장 가까운 항목을 선택해 주세요.",
        AX_STAGES
      );
      setStep("axStage");
    }, 1200);
  }, [addBotMessage, query]);

  const handleOptionSelect = useCallback(
    (option: string) => {
      setMessages((prev) => [
        ...prev,
        { id: generateId(), role: "user", content: option },
      ]);
      scrollToBottom();

      setInputDisabled(true);

      if (step === "axStage") {
        customer.setAxStage(option as AxStage);
        setTimeout(() => {
          addBotMessage(
            "감사합니다. 어떤 업무 또는 과제를 해결하고 싶으신가요?",
            NEEDED_TECHS
          );
          setStep("neededTech");
          setInputDisabled(false);
        }, 600);
      } else if (step === "neededTech") {
        customer.setNeededTech(option as NeededTech);
        setTimeout(() => {
          addBotMessage("선호하시는 도입 방식은 무엇인가요?", PRODUCT_TYPES);
          setStep("productType");
          setInputDisabled(false);
        }, 600);
      } else if (step === "productType") {
        customer.setProductType(option as ProductPreference);
        setTimeout(() => {
          addBotMessage(
            "마지막으로, 추가로 필요한 내용이 있으시면 자유롭게 입력해 주세요. 특별히 없으시면 '없음'이라고 적어 주셔도 됩니다."
          );
          setStep("freePrompt");
          setInputDisabled(false);
        }, 600);
      }
    },
    [step, customer, addBotMessage, scrollToBottom]
  );

  const handleSend = useCallback(
    (message: string) => {
      if (step !== "freePrompt") {
        setMessages((prev) => [
          ...prev,
          { id: generateId(), role: "user", content: message },
        ]);
        scrollToBottom();
        return;
      }

      customer.setFreePrompt(message);
      setMessages((prev) => [
        ...prev,
        { id: generateId(), role: "user", content: message },
      ]);
      setInputDisabled(true);
      scrollToBottom();

      setTimeout(() => {
        const recommendations = getRecommendations({
          customerType: customer.customerType,
          axStage: customer.axStage,
          neededTech: customer.neededTech,
          productType: customer.productType,
          freePrompt: message,
        });

        const stageText = customer.axStage ?? "초기";
        const techText = customer.neededTech ?? "AX";

        const introMsg =
          recommendations.length > 0
            ? `말씀해 주신 내용을 바탕으로 보면, 지금은 '${stageText}' 단계에서 '${techText}' 과제를 중심에 두고 계신 것으로 이해했습니다. 빠른 검증과 확장을 함께 고려할 수 있는 아래 상품 조합을 추천드립니다.`
            : "조건에 딱 맞는 상품을 자동 매칭하지 못했습니다. 대신 상담을 통해 세부 요구를 반영한 제안을 드리겠습니다.";

        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "bot",
            content: introMsg,
            productCards: recommendations,
            showCta: true,
          },
        ]);
        setStep("result");
        scrollToBottom();
      }, 1200);
    },
    [step, customer, scrollToBottom]
  );

  const lastOptionsMessageId = [...messages]
    .reverse()
    .find((m) => m.role === "bot" && m.options && m.options.length > 0)?.id;

  return (
    <div className={portalPanelTone.spark.pageBg}>
      <div className="mx-auto flex max-w-4xl flex-col px-4 py-6 md:px-6 md:py-10">
        <SitePageHero
          glyph="spark"
          eyebrow="AI Consultant"
          title="AX 맞춤 추천"
          description="짧은 질문에 답하시면, 적합한 KT AX 상품 후보와 다음 액션을 정리해 드립니다."
        />

      <div className="mt-8 flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.2)]">
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto p-5"
          style={{ minHeight: "420px", maxHeight: "60vh" }}
        >
          {messages.map((msg) => (
            <div key={msg.id}>
              <ChatBubble role={msg.role}>
                <span className="whitespace-pre-line">{msg.content}</span>
              </ChatBubble>

              {msg.options &&
                step !== "result" &&
                msg.id === lastOptionsMessageId && (
                  <div className="ml-11 mt-2 flex flex-wrap gap-2">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleOptionSelect(opt)}
                        className="rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm text-gray-700 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

              {msg.productCards && msg.productCards.length > 0 && (
                <div className="ml-11 mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {msg.productCards.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}

              {msg.showCta && (
                <div className="ml-11 mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    세일즈 담당자 연결
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    도입 문의 남기기
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    제품 브로슈어 받기
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <ChatInput
          onSend={handleSend}
          disabled={inputDisabled || step === "result"}
          placeholder={
            step === "result"
              ? "상담이 완료되었습니다. 위 버튼을 이용해 주세요."
              : step === "freePrompt"
                ? "추가로 전달할 내용을 입력해 주세요…"
                : "아래 선택지를 누르거나, 직접 입력해 주세요…"
          }
        />
      </div>
      </div>
    </div>
  );
}

