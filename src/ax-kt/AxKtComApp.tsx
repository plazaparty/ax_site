// @ts-nocheck — ax-kt-com.jsx 프로토타입 이식본 (점진적 타입 정리 예정)
"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect, useRef } from "react";
import KtLogo from "@/components/branding/KtLogo";
import AdoptionPage from "./AdoptionPage";
import ConsultantReport from "./components/ConsultantReport";
import { INDUSTRY_SLUG_LABELS } from "./consultantLinks";
import { exploreDetailPath, getExploreList, useCaseDetailPath } from "./exploreContent";
import { HOME_PROMPT_PRESETS } from "./presetReports";
import {
  G,
  monoBannerStyle,
  monoPanelStyle,
  SAMPLE_PROMPTS_HEADING,
} from "./theme";
import { USE_CASES } from "./useCaseData";

const SOLUTIONS = {
  AI:        { name:"AI 솔루션",    color:"#00D4FF", icon:"🧠", items:["KT AI Studio","AIWORKS","생성형 AI 플랫폼","컴퓨터 비전 SDK","STT/TTS API"] },
  Cloud:     { name:"Cloud 솔루션", color:"#7C3AED", icon:"☁️", items:["KT Cloud","하이브리드 클라우드","클라우드 마이그레이션","K-Edge","클라우드 보안"] },
  Data:      { name:"Data 솔루션",  color:"#059669", icon:"📊", items:["빅데이터 플랫폼","데이터레이크","실시간 분석","BI 대시보드","데이터 거버넌스"] },
  Readiness: { name:"AX Readiness", color:"#EA580C", icon:"🎯", items:["AX 진단 서비스","전략 컨설팅","직원 교육 프로그램","변화관리 지원","KPI 설계"] },
};

const BANNER_ITEMS = [
  { type:"product",  tag:"주요 상품",  title:"KT AI Studio 2.0 출시",              sub:"생성형 AI 개발 플랫폼의 새로운 기준",              cta:"자세히 보기", color:G.accent,  img:"🧠" },
  { type:"service",  tag:"서비스",     title:"AX 전략 컨설팅 패키지",               sub:"진단부터 실행까지 KT 전담 컨설턴트와 함께",        cta:"신청하기",   color:G.purple, img:"🎯" },
  { type:"event",    tag:"이벤트",     title:"KT AX Summit 2025",                  sub:"6월 18일 · 코엑스 · 국내 최대 AX 컨퍼런스",       cta:"사전 등록",  color:G.green,  img:"🎪" },
  { type:"case",     tag:"성공 사례",  title:"H중공업 스마트팩토리 전환 성공",       sub:"불량률 87% 감소 · 연 12억 비용 절감 달성",          cta:"사례 보기",  color:G.orange, img:"🏭" },
  { type:"news",     tag:"뉴스",       title:"KT, 국내 기업 AX 전환 1위 사업자 선정",sub:"2025 IDC 보고서 · AI 전환 지원 역량 최고 평가",   cta:"기사 보기",  color:G.accent, img:"📰" },
];

/* ══════════════════════════════════════════════
   SMALL REUSABLES
══════════════════════════════════════════════ */
function Tag({ children, color = G.accent }) {
  const rgb =
    color === G.accent
      ? "232,0,45"
      : color === G.green
        ? "5,150,105"
        : color === G.purple
          ? "124,58,237"
          : "234,88,12";
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:5, background:`rgba(${rgb},0.1)`, border:`1px solid rgba(${rgb},0.25)`, borderRadius:100, padding:"3px 10px", fontSize:11, fontWeight:600, color, letterSpacing:"0.06em" }}>
      {children}
    </span>
  );
}

function Dot({ color=G.accent, size=6, pulse=false }) {
  return <span style={{ display:"inline-block", width:size, height:size, borderRadius:"50%", background:color, boxShadow:`0 0 ${size*2}px ${color}`, flexShrink:0, animation:pulse?"pulse 2s infinite":"none" }} />;
}

function solColor(key) {
  return { AI:G.accent, Cloud:G.purple, Data:G.green, Readiness:G.orange }[key] || G.accent;
}
function solRGB(key) {
  return { AI:"232,0,45", Cloud:"124,58,237", Data:"5,150,105", Readiness:"234,88,12" }[key] || "232,0,45";
}

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
function NavBar({ page, setPage, onOpenConsultant }) {
  const items = [
    { id:"home",      label:"홈" },
    { id:"consultant",label:"AI Consultant", hl:true },
    { id:"adoption",  label:"AX 도입" },
    { id:"usecases",  label:"Use Case" },
    { id:"insight",   label:"Insight" },
  ];
  const navBtn = (item) => ({
    flexShrink: 0,
    background: item.hl ? (page === item.id ? G.accent : G.accentSoft) : page === item.id ? "#F4F4F5" : "transparent",
    border: item.hl ? `1px solid ${page === item.id ? G.accent : "rgba(232,0,45,0.2)"}` : "none",
    borderRadius: 8,
    padding: "7px 12px",
    fontSize: 12,
    fontWeight: item.hl || page === item.id ? 700 : 500,
    color: page === item.id ? (item.hl ? "#fff" : G.text) : item.hl ? G.accent : G.textSub,
    cursor: "pointer",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: 5,
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${G.border}`,
      }}
    >
      <div className="ax-kt-nav-inner">
        <div className="ax-kt-nav-brand" onClick={() => setPage("home")} onKeyDown={(e) => e.key === "Enter" && setPage("home")} role="button" tabIndex={0}>
          <KtLogo className="!h-8 !max-h-8" />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.02em", color: G.text }}>
              AX<span style={{ color: G.accent }}>.</span>KT
            </div>
            <div style={{ fontSize: 9, color: G.textDim, letterSpacing: "0.08em" }}>AX Platform</div>
          </div>
        </div>
        <div className="ax-kt-nav-items">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => (item.id === "consultant" ? onOpenConsultant?.() : setPage(item.id))}
              style={navBtn(item)}
            >
              {item.hl && <span style={{ fontSize: 11 }}>✦</span>}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════
   HOME PAGE  — AI Consultant 상단 고정 + 배너 슬라이더
══════════════════════════════════════════════ */
function HomePage({ setPage, onQuickReport }) {
  const [bannerIdx, setBannerIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setBannerIdx(i => (i + 1) % BANNER_ITEMS.length), 5000);
  };
  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  const goTo = (i) => { setBannerIdx(i); startTimer(); };

  const onMouseDown = (e) => { setDragging(true); setDragStart(e.clientX); };
  const onMouseUp   = (e) => {
    if (!dragging) return; setDragging(false);
    const diff = dragStart - e.clientX;
    if (Math.abs(diff) > 40) { setBannerIdx(i => (i + (diff > 0 ? 1 : -1) + BANNER_ITEMS.length) % BANNER_ITEMS.length); startTimer(); }
  };
  const onTouchStart = (e) => setDragStart(e.touches[0].clientX);
  const onTouchEnd   = (e) => {
    const diff = dragStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { setBannerIdx(i => (i + (diff > 0 ? 1 : -1) + BANNER_ITEMS.length) % BANNER_ITEMS.length); startTimer(); }
  };

  const b = BANNER_ITEMS[bannerIdx];

  return (
    <div className="ax-kt-shell">

      {/* ── SECTION 1: AI CONSULTANT CTA ── */}
      <section style={{ marginBottom: 32 }}>
        <div
          className="ax-kt-hero-grid"
          style={{
            ...monoPanelStyle,
            border: `1px solid ${G.border}`,
            borderRadius: 20,
            padding: "1.5rem 1.25rem",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(17,24,39,0.04)",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: G.accentSoft,
                border: "1px solid rgba(232,0,45,0.12)",
                borderRadius: 100,
                padding: "5px 12px",
                marginBottom: 16,
              }}
            >
              <Dot pulse color={G.accent} />
              <span style={{ fontSize: 11, fontWeight: 600, color: G.accent, letterSpacing: "0.08em" }}>
                AI CONSULTANT
              </span>
            </div>
            <h1
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.25rem, 4.5vw, 1.75rem)",
                letterSpacing: "-0.03em",
                color: G.text,
                lineHeight: 1.35,
                marginBottom: 12,
              }}
            >
              5개의 간단한 질문으로 3분 안에
              <br />
              <span style={{ color: G.accent }}>KT AX 추천</span>과 실행 로드맵을 받아보세요
            </h1>
            <p style={{ fontSize: 14, color: G.textSub, lineHeight: 1.65, marginBottom: 20 }}>
              산업·규모·성숙도·니즈를 분석해 맞춤형 AX 솔루션과 실행 로드맵을 제안합니다
            </p>
            <button
              type="button"
              onClick={() => setPage("consultant")}
              style={{
                background: G.accent,
                border: "none",
                borderRadius: 12,
                padding: "14px 20px",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
              }}
            >
              <span style={{ fontSize: 16 }}>✦</span> AI 컨설턴트 시작하기
            </button>
          </div>

          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: G.textDim,
                marginBottom: 10,
              }}
            >
              {SAMPLE_PROMPTS_HEADING}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {HOME_PROMPT_PRESETS.map((preset) => (
                <button
                  key={preset.prompt}
                  type="button"
                  onClick={() => onQuickReport(preset)}
                  style={{
                    background: G.surface,
                    border: `1px solid ${G.border}`,
                    borderRadius: 12,
                    padding: "12px 14px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "border-color 0.15s, box-shadow 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232,0,45,0.35)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(232,0,45,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = G.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <p style={{ fontSize: 13, fontWeight: 600, color: G.text, lineHeight: 1.5 }}>
                    “{preset.prompt}”
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: 배너 슬라이더 ── */}
      <section>
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            cursor: "grab",
            userSelect: "none",
            position: "relative",
            ...monoBannerStyle,
            border: `1px solid ${G.border}`,
            transition: "border-color 0.5s",
          }}
          onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={()=>setDragging(false)}
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        >
          <div
            style={{
              padding: "1.5rem 1.25rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minHeight: 180,
            }}
          >
            <div style={{ animation: "fadeSlide 0.45s ease both" }}>
              <div style={{ marginBottom: 12 }}>
                <Tag color={G.textSub}>{b.tag}</Tag>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-ax-kt-syne), 'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.125rem, 4vw, 1.5rem)",
                  letterSpacing: "-0.03em",
                  color: G.text,
                  marginBottom: 8,
                  lineHeight: 1.25,
                }}
              >
                {b.title}
              </h2>
              <p style={{ fontSize: 13, color: G.textSub, marginBottom: 16, lineHeight: 1.55 }}>{b.sub}</p>
              <button
                type="button"
                style={{
                  background: G.text,
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {b.cta} →
              </button>
            </div>
            <div style={{ fontSize: 48, opacity: 0.35, alignSelf: "flex-end" }}>{b.img}</div>
          </div>

          {/* Progress bar */}
          <div style={{ height:3, background:G.border, position:"relative" }}>
            <div style={{ position:"absolute", top:0, left:0, height:"100%", background:G.accent, borderRadius:2, animation:"progress 5s linear infinite", transformOrigin:"left" }} />
          </div>

          {/* Dots */}
          <div style={{ display:"flex", justifyContent:"center", gap:8, padding:"14px 0" }}>
            {BANNER_ITEMS.map((_,i)=>(
              <div key={i} onClick={(e)=>{ e.stopPropagation(); goTo(i); }} style={{
                width: i===bannerIdx ? 24 : 8, height:8, borderRadius:4,
                background: i===bannerIdx ? G.accent : G.border,
                transition:"all 0.35s ease", cursor:"pointer",
              }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════
   AI CONSULTANT  — ChatGPT-style UI, 선택지 방식
══════════════════════════════════════════════ */

// 챗 메시지 타입: { role:"ai"|"user", type:"text"|"choices"|"cards"|"report", content, choices, cards, report }

const UC_INDUSTRY_OPTIONS = ["전체", ...Object.values(INDUSTRY_SLUG_LABELS)];

function ConsultantPage({ boot, onBootConsumed }) {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [phase, setPhase]       = useState("root"); // root | recommend | adoption | usecase | done
  const [answers, setAnswers]   = useState({});
  const [adoptionTab, setAdoptionTab] = useState(null);
  const [ucFilters, setUcFilters] = useState({ industry:"전체", task:"전체", stage:"전체", solution:"전체" });
  const [openDD, setOpenDD]     = useState(null);   // which dropdown is open
  const [recStep, setRecStep] = useState(0);
  const [multiSel, setMultiSel] = useState([]);
  const bottomRef = useRef(null);
  const ddRef     = useRef(null);
  const greetedRef = useRef(false);
  const bootAppliedRef = useRef(false);

  function addAI(type, content, extra) {
    setMessages((prev) => [
      ...prev,
      {
        role: "ai",
        type,
        content,
        ...(extra !== undefined
          ? type === "choices"
            ? { choices: extra }
            : type === "cards"
              ? { cards: extra }
              : { report: extra }
          : {}),
      },
    ]);
  }
  function addUser(label) {
    setMessages((prev) => [...prev, { role: "user", type: "text", content: label }]);
  }

  const ROOT_CHOICES = [
    { icon:"✦", label:"맞춤 AX 상품 추천",   value:"recommend", desc:"5단계 진단 후 최적 솔루션 제안" },
    { icon:"⊞", label:"유형별 AX 상품 보기", value:"adoption",  desc:"산업·업무·단계·솔루션별 탐색" },
    { icon:"📋", label:"Use Case 확인",       value:"usecase",   desc:"실제 도입 사례 필터 검색" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (ddRef.current && !ddRef.current.contains(e.target)) setOpenDD(null); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages]);

  useEffect(() => {
    if (boot) {
      if (bootAppliedRef.current) return;
      bootAppliedRef.current = true;
      greetedRef.current = true;
      setPhase("done");
      setAnswers(boot.answers);
      setMessages([
        { role: "user", type: "text", content: `"${boot.prompt}"` },
        {
          role: "ai",
          type: "text",
          content: "요청하신 내용을 바탕으로 맞춤 AX 전략 리포트를 생성했습니다.",
        },
        { role: "ai", type: "cards", cards: { type: "report", answers: boot.answers } },
      ]);
      onBootConsumed?.();
      return;
    }
    if (greetedRef.current) return;
    let nextChoicesTimer;
    const t = setTimeout(() => {
      greetedRef.current = true;
      addAI("text", "안녕하세요! KT AX Consultant입니다. 무엇을 도와드릴까요?");
      nextChoicesTimer = setTimeout(() => addAI("choices", "", ROOT_CHOICES), 400);
    }, 300);
    return () => {
      clearTimeout(t);
      if (nextChoicesTimer) clearTimeout(nextChoicesTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount greeting only
  }, [boot]);

  /* ── ADOPTION choice definitions (used by handleRoot) ── */
  const ADOPTION_CHOICES = [
    { icon:"🏭", label:"산업별 AX",  value:"adoption_industry" },
    { icon:"⚙️", label:"업무별 AX",  value:"adoption_task"     },
    { icon:"📈", label:"도입단계별", value:"adoption_stage"    },
    { icon:"🧩", label:"솔루션별",   value:"adoption_solution" },
  ];

  /* ── RECOMMEND 5단계 ── */
  const INDUSTRY_CHOICES = [
    { icon: "🏛️", label: "공공", value: "public" },
    { icon: "🏦", label: "금융", value: "finance" },
    { icon: "🏭", label: "제조", value: "manufacturing" },
    { icon: "📦", label: "유통", value: "retail" },
    { icon: "🏥", label: "의료", value: "healthcare" },
    { icon: "🛡️", label: "국방", value: "defense" },
    { icon: "🏗️", label: "안전/건설", value: "safety" },
    { icon: "🌐", label: "서비스/기타", value: "services" },
  ];
  const SIZE_CHOICES = [
    {icon:"🚀",label:"스타트업 (50인↓)",value:"startup"},{icon:"🏘️",label:"중소기업 (50~300인)",value:"smb"},
    {icon:"🏗️",label:"중견기업 (300~1,000인)",value:"mid"},{icon:"🏛️",label:"대기업 (1,000~5,000인)",value:"large"},
    {icon:"🌆",label:"대규모 기업 (5,000인↑)",value:"enterprise"},
  ];
  const MATURITY_CHOICES = [
    {icon:"🔭",label:"탐색 단계",value:"exploring",desc:"AI 도입 검토 중"},
    {icon:"🧪",label:"파일럿 단계",value:"piloting",desc:"시범 운영 중"},
    {icon:"📈",label:"확산 단계",value:"scaling",desc:"전사 확산 중"},
    {icon:"⚙️",label:"최적화 단계",value:"optimizing",desc:"고도화 추진 중"},
  ];
  const NEEDS_CHOICES = [
    {icon:"💰",label:"비용 절감",value:"cost"},{icon:"✅",label:"품질 향상",value:"quality"},
    {icon:"⚡",label:"속도 향상",value:"speed"},{icon:"⭐",label:"고객경험 혁신",value:"cx"},
    {icon:"📊",label:"데이터 활용",value:"data"},{icon:"☁️",label:"인프라 현대화",value:"infra"},
  ];
  const TECH_CHOICES = [
    {icon:"🧠",label:"거대언어모델 (LLM)",value:"llm"},{icon:"👁️",label:"컴퓨터 비전",value:"vision"},
    {icon:"🔄",label:"MLOps 플랫폼",value:"mlops"},{icon:"☁️",label:"클라우드 전환",value:"cloud"},
    {icon:"🗄️",label:"데이터 플랫폼",value:"data_platform"},{icon:"📡",label:"엣지 AI",value:"edge"},
    {icon:"🔐",label:"AI 보안",value:"security"},{icon:"🎯",label:"AX 진단·전략",value:"readiness"},
  ];

  const recSteps = [
    { key:"industry", q:"귀사의 산업 분야를 선택해 주세요.", choices:INDUSTRY_CHOICES, multi:false },
    { key:"size",     q:"조직 규모는 어느 정도인가요?",      choices:SIZE_CHOICES,     multi:false },
    { key:"maturity", q:"현재 AX 성숙도 단계를 선택해 주세요.", choices:MATURITY_CHOICES, multi:false },
    { key:"needs",    q:"가장 시급한 AX 니즈를 선택해 주세요. (복수 선택 가능)", choices:NEEDS_CHOICES, multi:true },
    { key:"tech",     q:"관심 있는 AX 기술 영역을 선택해 주세요. (복수 선택 가능)", choices:TECH_CHOICES, multi:true },
  ];

  /* ── ROOT selection ── */
  function handleRoot(val) {
    addUser(ROOT_CHOICES.find(c=>c.value===val)?.label || val);
    setPhase(val);
    if (val === "recommend") {
      setTimeout(() => {
        addAI("text", "좋습니다! 귀사에 꼭 맞는 AX 솔루션을 찾아드리겠습니다. 먼저 산업 분야를 선택해 주세요.");
        setTimeout(() => addAI("choices", "", INDUSTRY_CHOICES), 350);
      }, 300);
    } else if (val === "adoption") {
      setTimeout(() => {
        addAI("text", "어떤 방식으로 AX 도입을 탐색하시겠어요?");
        setTimeout(() => addAI("choices", "", ADOPTION_CHOICES), 350);
      }, 300);
    } else if (val === "usecase") {
      setTimeout(() => {
        addAI("text", "Use Case를 필터로 검색하실 수 있습니다. 아래 필터를 선택해 주세요.");
        setTimeout(() => addAI("cards", "", "uc_filter"), 350);
      }, 300);
    }
  }

  function handleAdoption(val) {
    addUser(ADOPTION_CHOICES.find(c=>c.value===val)?.label || val);
    const typeKey = val.replace("adoption_","");
    setAdoptionTab(typeKey);
    const items = getExploreList(typeKey).map((i) => ({
      id: i.id,
      title: i.title,
      icon: i.icon,
      desc: i.desc,
      color: G.accent,
    }));
    setTimeout(() => {
      addAI("text", "아래에서 관심 있는 항목을 선택하면 상세 페이지로 이동합니다.");
      setTimeout(() => addAI("cards", "", { type:"adoption", tab: typeKey, items }), 300);
    }, 250);
  }

  function restartChat() {
    setPhase("root");
    setAnswers({});
    setRecStep(0);
    setMultiSel([]);
    setAdoptionTab(null);
    setMessages([]);
    greetedRef.current = true;
    setTimeout(() => {
      addAI("text", "안녕하세요! KT AX Consultant입니다. 무엇을 도와드릴까요?");
      setTimeout(() => addAI("choices", "", ROOT_CHOICES), 400);
    }, 300);
  }

  function handleRecommend(val, label) {
    const step = recSteps[recStep];
    if (!step.multi) {
      addUser(label);
      const newAnswers = { ...answers, [step.key]: val };
      setAnswers(newAnswers);
      if (recStep < recSteps.length - 1) {
        const next = recSteps[recStep + 1];
        setRecStep(r => r + 1);
        setMultiSel([]);
        setTimeout(() => {
          addAI("text", next.q);
          setTimeout(() => addAI("choices", "", next.choices.map(c => ({ ...c, stepKey:next.key, multi:next.multi }))), 300);
        }, 300);
      } else {
        buildReport(newAnswers);
      }
    } else {
      // toggle
      setMultiSel(prev => prev.includes(val) ? prev.filter(v=>v!==val) : [...prev, val]);
    }
  }

  function confirmMulti() {
    const step = recSteps[recStep];
    if (multiSel.length === 0) return;
    const selLabels = step.choices.filter(c=>multiSel.includes(c.value)).map(c=>c.label).join(", ");
    addUser(selLabels);
    const newAnswers = { ...answers, [step.key]: multiSel };
    setAnswers(newAnswers);
    if (recStep < recSteps.length - 1) {
      const next = recSteps[recStep + 1];
      setRecStep(r => r + 1);
      setMultiSel([]);
      setTimeout(() => {
        addAI("text", next.q);
        setTimeout(() => addAI("choices", "", next.choices.map(c=>({...c, stepKey:next.key, multi:next.multi}))), 300);
      }, 300);
    } else {
      buildReport(newAnswers);
    }
  }

  function buildReport(ans) {
    setTimeout(() => {
      addAI("text", "분석이 완료되었습니다. 맞춤형 AX 전략 리포트를 생성했습니다.");
      setTimeout(() => addAI("cards", "", { type:"report", answers:ans }), 400);
    }, 400);
    setPhase("done");
  }

  /* ── MAIN choice dispatcher ── */
  function handleChoice(val, label, stepKey, multi) {
    if (phase === "root")     { handleRoot(val); return; }
    if (phase === "adoption") { handleAdoption(val); return; }
    if (val.startsWith("adoption_")) { handleAdoption(val); return; }
    if (phase === "recommend") { handleRecommend(val, label); return; }
  }

  /* ── UC filter ── */
  const ucFilterKeys = [
    { key:"industry", label:"산업", options: UC_INDUSTRY_OPTIONS },
    { key:"task",     label:"업무", options:["전체","품질관리","고객서비스","운영효율","물류·공급망","데이터관리","마케팅·CRM","IT인프라","보안·컴플라이언스","설비관리","HR·인재","진단·분석","업무자동화","전략·기획","리스크관리"] },
    { key:"stage",    label:"단계", options:["전체","준비","도입","전환","운영"] },
    { key:"solution", label:"솔루션", options:["전체","AI","Cloud","Data","Readiness"] },
  ];
  const filteredUC = USE_CASES.filter(uc => {
    if (ucFilters.industry !== "전체") {
      const slug = Object.entries(INDUSTRY_SLUG_LABELS).find(([, label]) => label === ucFilters.industry)?.[0];
      if (slug ? uc.industrySlug !== slug : uc.industry !== ucFilters.industry) return false;
    }
    if (ucFilters.task     !== "전체" && uc.task     !== ucFilters.task)     return false;
    if (ucFilters.stage    !== "전체" && uc.stage    !== ucFilters.stage)    return false;
    if (ucFilters.solution !== "전체" && uc.solution !== ucFilters.solution) return false;
    return true;
  });

  /* ── RENDER message ── */
  function renderMessage(msg, idx) {
    const isAI = msg.role === "ai";

    if (msg.type === "text") return (
      <div key={idx} style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:16, animation:"msgIn 0.3s ease both", flexDirection: isAI ? "row" : "row-reverse" }}>
        {isAI && (
          <div style={{ width:34, height:34, borderRadius:12, background:`linear-gradient(135deg,${G.accent},${G.green})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0, boxShadow:`0 0 20px rgba(0,212,255,0.2)` }}>✦</div>
        )}
        <div style={{
          background: isAI ? G.card : G.accent,
          border: isAI ? `1px solid ${G.border}` : "none",
          color: isAI ? G.text : G.bg,
          borderRadius: isAI ? "4px 18px 18px 18px" : "18px 4px 18px 18px",
          padding:"12px 16px", fontSize:14, lineHeight:1.6, maxWidth:"70%",
          fontWeight: isAI ? 400 : 500,
        }}>{msg.content}</div>
      </div>
    );

    if (msg.type === "choices") {
      const isMulti = msg.choices?.[0]?.multi;
      return (
        <div key={idx} style={{ marginBottom:20, animation:"msgIn 0.3s ease both", paddingLeft:46 }}>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {(msg.choices||[]).map(c => {
              const sel = isMulti && multiSel.includes(c.value);
              // Only last choices block is active
              const isLastChoices = idx === messages.map((m,i)=>m.type==="choices"?i:-1).filter(i=>i>=0).pop();
              const disabled = !isLastChoices;
              return (
                <button key={c.value} onClick={()=>{ if(!disabled) handleChoice(c.value, c.label, c.stepKey, c.multi); }} style={{
                  background: sel ? G.accent : (disabled ? "rgba(14,42,69,0.4)" : G.surface),
                  border:`1px solid ${sel ? G.accent : disabled ? G.border : G.borderBright}`,
                  borderRadius:12, padding:"10px 16px",
                  display:"flex", alignItems:"center", gap:8,
                  fontSize:13, fontWeight: sel ? 700 : 500,
                  color: sel ? G.bg : (disabled ? G.textDim : G.text),
                  cursor: disabled ? "default" : "pointer",
                  transition:"all 0.15s",
                  opacity: disabled ? 0.45 : 1,
                }}>
                  {c.icon && <span style={{fontSize:16}}>{c.icon}</span>}
                  <span>{c.label}</span>
                  {c.desc && !disabled && <span style={{fontSize:11, color: sel ? G.bg : G.textSub, marginLeft:4}}>· {c.desc}</span>}
                </button>
              );
            })}
          </div>
          {isMulti && idx === messages.map((m,i)=>m.type==="choices"?i:-1).filter(i=>i>=0).pop() && (
            <button onClick={confirmMulti} disabled={multiSel.length===0} style={{
              marginTop:12, background: multiSel.length>0 ? G.accent : G.border,
              border:"none", borderRadius:10, padding:"10px 24px",
              fontSize:13, fontWeight:700, color: multiSel.length>0 ? G.bg : G.textDim,
              cursor: multiSel.length>0 ? "pointer" : "default", transition:"all 0.2s",
            }}>
              {multiSel.length > 0 ? `${multiSel.length}개 선택 완료 →` : "항목을 선택해 주세요"}
            </button>
          )}
        </div>
      );
    }

    if (msg.type === "cards") {
      const d = msg.cards;

      /* ADOPTION cards */
      if (d?.type === "adoption") return (
        <div key={idx} style={{ marginBottom:20, paddingLeft:46, animation:"msgIn 0.3s ease both" }}>
          <div className="ax-kt-grid-cards ax-kt-grid-cards--3">
            {d.items.map((item)=>(
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  router.push(
                    exploreDetailPath((d.tab || adoptionTab || "industry"), item.id)
                  )
                }
                style={{
                  background:G.card, border:`1px solid ${G.border}`,
                  borderRadius:16, padding:"18px 16px", cursor:"pointer", transition:"all 0.18s",
                  borderTop:`3px solid ${item.color}`, textAlign:"left",
                }}
              >
                <div style={{fontSize:28, marginBottom:10}}>{item.icon}</div>
                <div style={{ fontWeight:700, fontSize:14, color:G.text, marginBottom:5 }}>{item.title}</div>
                <div style={{fontSize:11, color:G.textSub, lineHeight:1.5}}>{item.desc}</div>
                <div style={{marginTop:10, fontSize:12, color:item.color, fontWeight:600}}>상세 보기 →</div>
              </button>
            ))}
          </div>
          {/* ask what next */}
          <button onClick={()=>{ addAI("text","다른 탐색 방법이 있으시면 말씀해 주세요."); setTimeout(()=>addAI("choices","",ADOPTION_CHOICES),300); }} style={{ marginTop:12, background:"transparent", border:`1px solid ${G.border}`, borderRadius:10, padding:"9px 18px", fontSize:12, color:G.textSub, cursor:"pointer" }}>
            다른 방식으로 탐색하기
          </button>
        </div>
      );

      /* UC FILTER */
      if (d === "uc_filter") return (
        <div key={idx} style={{ marginBottom:20, paddingLeft:46, animation:"msgIn 0.3s ease both" }}>
          {/* Dropdown filters */}
          <div ref={ddRef} style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:16 }}>
            {ucFilterKeys.map(fk=>(
              <div key={fk.key} style={{ position:"relative" }}>
                <button onClick={()=>setOpenDD(openDD===fk.key?null:fk.key)} style={{
                  background:ucFilters[fk.key]!=="전체" ? G.accentSoft : G.surface,
                  border:`1px solid ${ucFilters[fk.key]!=="전체" ? G.accent : G.border}`,
                  borderRadius:10, padding:"8px 14px", fontSize:13,
                  color:ucFilters[fk.key]!=="전체" ? G.accent : G.textSub,
                  cursor:"pointer", display:"flex", alignItems:"center", gap:6,
                }}>
                  {fk.label}{ucFilters[fk.key]!=="전체" && `: ${ucFilters[fk.key]}`}
                  <span style={{fontSize:10}}>{openDD===fk.key ? "▲" : "▼"}</span>
                </button>
                {openDD===fk.key && (
                  <div style={{
                    position:"absolute", top:"calc(100% + 6px)", left:0, zIndex:99,
                    background:G.card, border:`1px solid ${G.borderBright}`,
                    borderRadius:14, padding:6, minWidth:160, boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
                  }}>
                    {fk.options.map(opt=>(
                      <div key={opt} onClick={()=>{ setUcFilters(f=>({...f,[fk.key]:opt})); setOpenDD(null); }} style={{
                        padding:"8px 14px", borderRadius:9, fontSize:13, cursor:"pointer",
                        background: ucFilters[fk.key]===opt ? G.accentSoft : "transparent",
                        color: ucFilters[fk.key]===opt ? G.accent : G.text,
                        fontWeight: ucFilters[fk.key]===opt ? 600 : 400,
                        transition:"background 0.15s",
                      }}
                      onMouseEnter={e=>{ if(ucFilters[fk.key]!==opt) e.currentTarget.style.background=G.surface; }}
                      onMouseLeave={e=>{ if(ucFilters[fk.key]!==opt) e.currentTarget.style.background="transparent"; }}>
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {Object.values(ucFilters).some(v=>v!=="전체") && (
              <button onClick={()=>setUcFilters({industry:"전체",task:"전체",stage:"전체",solution:"전체"})} style={{ background:"transparent", border:`1px solid ${G.border}`, borderRadius:10, padding:"8px 12px", fontSize:12, color:G.textDim, cursor:"pointer" }}>초기화</button>
            )}
          </div>
          {/* Result count */}
          <div style={{ fontSize:12, color:G.textSub, marginBottom:12 }}>
            <span style={{color:G.accent, fontWeight:700}}>{filteredUC.length}개</span>의 Use Case
          </div>
          {/* Cards */}
          <div className="ax-kt-grid-cards ax-kt-grid-cards--3">
            {filteredUC.slice(0,9).map(uc=>(
              <button
                key={uc.id}
                type="button"
                onClick={() => router.push(useCaseDetailPath(uc.id))}
                style={{
                  background:G.card, border:`1px solid ${G.border}`,
                  borderRadius:16, padding:16, cursor:"pointer", transition:"all 0.18s", textAlign:"left",
                }}
              >
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10}}>
                  <span style={{fontSize:28}}>{uc.img}</span>
                  <span style={{background:`rgba(${solRGB(uc.solution)},0.1)`, border:`1px solid rgba(${solRGB(uc.solution)},0.25)`, borderRadius:100, padding:"2px 8px", fontSize:10, fontWeight:700, color:solColor(uc.solution)}}>{uc.solution}</span>
                </div>
                <div style={{ fontWeight:700, fontSize:13, color:G.text, marginBottom:5, lineHeight:1.3 }}>{uc.title}</div>
                <div style={{fontSize:11, color:G.textSub, lineHeight:1.5, marginBottom:8}}>{uc.desc}</div>
                <div style={{fontSize:11, fontWeight:700, color:solColor(uc.solution)}}>{uc.roi}</div>
              </button>
            ))}
          </div>
          {filteredUC.length > 9 && <div style={{marginTop:10, fontSize:12, color:G.textSub}}>+{filteredUC.length-9}개 더 있습니다. 필터를 좁혀 보세요.</div>}
        </div>
      );

      /* REPORT */
      if (d?.type === "report") {
        return (
          <div key={idx} style={{ marginBottom: 20, paddingLeft: 46, animation: "msgIn 0.3s ease both", maxWidth: "100%" }}>
            <ConsultantReport answers={d.answers} onRestart={restartChat} />
          </div>
        );
      }
    }
    return null;
  }

  return (
    <div
      className="ax-kt-shell ax-kt-consultant-chat-only"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100dvh - var(--ax-kt-nav-height, 3.75rem))",
        paddingBottom: 24,
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "8px 0 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, i) => renderMessage(msg, i))}
        <div ref={bottomRef} />
      </div>
      <p style={{ fontSize: 12, color: G.textDim, textAlign: "center", paddingTop: 8 }}>
        위 선택지를 눌러 상담을 이어가 주세요
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════
   USE CASES PAGE — dropdown filters
══════════════════════════════════════════════ */
function UseCasesPage() {
  const [filters, setFilters] = useState({industry:"전체",task:"전체",stage:"전체",solution:"전체"});
  const [openDD, setOpenDD]   = useState(null);
  const [search, setSearch]   = useState("");
  const ddRef = useRef(null);

  useEffect(() => {
    const h = (e) => { if(ddRef.current && !ddRef.current.contains(e.target)) setOpenDD(null); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const filterDefs = [
    { key:"industry", label:"산업", icon:"🏭", options: UC_INDUSTRY_OPTIONS },
    { key:"task",     label:"업무", icon:"⚙️", options:["전체","품질관리","고객서비스","운영효율","물류·공급망","데이터관리","마케팅·CRM","IT인프라","보안·컴플라이언스","설비관리","HR·인재","진단·분석","업무자동화","전략·기획","리스크관리"] },
    { key:"stage",    label:"도입 단계", icon:"📈", options:["전체","준비","도입","전환","운영"] },
    { key:"solution", label:"솔루션", icon:"🧩", options:["전체","AI","Cloud","Data","Readiness"] },
  ];

  const filtered = USE_CASES.filter(uc=>{
    if (filters.industry !== "전체") {
      const slug = Object.entries(INDUSTRY_SLUG_LABELS).find(([, label]) => label === filters.industry)?.[0];
      if (slug ? uc.industrySlug !== slug : uc.industry !== filters.industry) return false;
    }
    if(filters.task!=="전체" && uc.task!==filters.task) return false;
    if(filters.stage!=="전체" && uc.stage!==filters.stage) return false;
    if(filters.solution!=="전체" && uc.solution!==filters.solution) return false;
    if(search && !uc.title.includes(search) && !uc.desc.includes(search)) return false;
    return true;
  });

  return (
    <div className="ax-kt-shell">
      <div style={{marginBottom:36}}>
        <Tag color={G.green}>Use Case</Tag>
        <h1 style={{fontFamily:"var(--font-ax-kt-syne), 'Syne', sans-serif",fontWeight:800,fontSize:38,color:G.text,marginTop:14,marginBottom:8,letterSpacing:"-0.04em"}}>AX 도입 성공 사례</h1>
        <p style={{fontSize:15,color:G.textSub}}>산업·업무·단계·솔루션별로 최적의 Use Case를 찾아보세요</p>
      </div>

      {/* Filter bar */}
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:28,flexWrap:"wrap"}} ref={ddRef}>
        {/* Search */}
        <div style={{display:"flex",alignItems:"center",gap:8,background:G.card,border:`1px solid ${G.border}`,borderRadius:12,padding:"9px 16px",flex:"0 0 220px"}}>
          <span style={{color:G.textDim,fontSize:14}}>⌕</span>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="검색..." style={{background:"transparent",border:"none",outline:"none",fontSize:13,color:G.text,width:"100%",fontFamily:"inherit"}}/>
          {search && <button onClick={()=>setSearch("")} style={{background:"transparent",border:"none",color:G.textDim,cursor:"pointer",fontSize:14}}>×</button>}
        </div>

        <div style={{width:1,height:28,background:G.border}}/>

        {/* Dropdown filters */}
        {filterDefs.map(fd=>(
          <div key={fd.key} style={{position:"relative"}}>
            <button onClick={()=>setOpenDD(openDD===fd.key?null:fd.key)} style={{
              background:filters[fd.key]!=="전체"?G.accentSoft:G.card,
              border:`1px solid ${filters[fd.key]!=="전체"?G.accent:G.border}`,
              borderRadius:10,padding:"9px 16px",fontSize:13,
              color:filters[fd.key]!=="전체"?G.accent:G.textSub,
              cursor:"pointer",display:"flex",alignItems:"center",gap:7,
              transition:"all 0.15s",
            }}>
              <span style={{fontSize:14}}>{fd.icon}</span>
              <span>{fd.label}{filters[fd.key]!=="전체" ? ` · ${filters[fd.key]}` : ""}</span>
              <span style={{fontSize:10,color:G.textDim,marginLeft:2}}>{openDD===fd.key?"▲":"▼"}</span>
            </button>
            {openDD===fd.key && (
              <div style={{position:"absolute",top:"calc(100%+8px)",left:0,zIndex:100,background:G.card,border:`1px solid ${G.borderBright}`,borderRadius:14,padding:6,minWidth:170,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"}}>
                {fd.options.map(opt=>(
                  <div key={opt} onClick={()=>{setFilters(f=>({...f,[fd.key]:opt}));setOpenDD(null);}} style={{
                    padding:"9px 14px",borderRadius:9,fontSize:13,cursor:"pointer",
                    background:filters[fd.key]===opt?G.accentSoft:"transparent",
                    color:filters[fd.key]===opt?G.accent:G.text,
                    fontWeight:filters[fd.key]===opt?600:400,
                    display:"flex",alignItems:"center",justifyContent:"space-between",
                  }}>
                    <span>{opt}</span>
                    {filters[fd.key]===opt && <span style={{fontSize:12}}>✓</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {Object.values(filters).some(v=>v!=="전체")||search ? (
          <button onClick={()=>{setFilters({industry:"전체",task:"전체",stage:"전체",solution:"전체"});setSearch("");}} style={{background:"transparent",border:`1px solid ${G.border}`,borderRadius:10,padding:"9px 14px",fontSize:12,color:G.textDim,cursor:"pointer"}}>
            초기화
          </button>
        ) : null}

        <div style={{marginLeft:"auto",fontSize:13,color:G.textSub}}>
          <span style={{color:G.accent,fontWeight:700}}>{filtered.length}개</span> Use Case
        </div>
      </div>

      {/* Grid */}
      <div className="ax-kt-grid-cards ax-kt-grid-cards--3">
        {filtered.map(uc=>{
          const sc = solColor(uc.solution);
          const sr = solRGB(uc.solution);
          return (
            <Link
              key={uc.id}
              href={useCaseDetailPath(uc.id)}
              style={{background:G.card,border:`1px solid ${G.border}`,borderRadius:18,padding:20,cursor:"pointer",transition:"all 0.2s",textDecoration:"none",display:"block"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=sc;e.currentTarget.style.transform="translateY(-4px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=G.border;e.currentTarget.style.transform="translateY(0)";}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                <span style={{fontSize:32}}>{uc.img}</span>
                <div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"}}>
                  <span style={{background:`rgba(${sr},0.1)`,border:`1px solid rgba(${sr},0.25)`,borderRadius:100,padding:"2px 9px",fontSize:10,fontWeight:700,color:sc}}>{uc.solution}</span>
                  <span style={{background:G.surface,border:`1px solid ${G.border}`,borderRadius:100,padding:"2px 9px",fontSize:10,color:G.textDim}}>{uc.stage}</span>
                </div>
              </div>
              <div style={{marginBottom:8}}><Tag>{uc.industry}</Tag></div>
              <div style={{fontWeight:700,fontSize:14,color:G.text,marginBottom:6,lineHeight:1.3}}>{uc.title}</div>
              <div style={{fontSize:12,color:G.textSub,lineHeight:1.6,marginBottom:12}}>{uc.desc}</div>
              <div style={{background:`rgba(${sr},0.07)`,border:`1px solid rgba(${sr},0.18)`,borderRadius:8,padding:"6px 10px",display:"inline-block"}}>
                <span style={{fontSize:12,fontWeight:700,color:sc}}>{uc.roi}</span>
              </div>
            </Link>
          );
        })}
      </div>
      {filtered.length===0&&(
        <div style={{textAlign:"center",padding:"60px 0",color:G.textSub}}>
          <div style={{fontSize:40,marginBottom:14}}>🔍</div>
          <div style={{fontSize:16}}>조건에 맞는 Use Case가 없습니다</div>
          <div style={{fontSize:13,marginTop:6}}>필터를 변경해 보세요</div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   INSIGHT PAGE
══════════════════════════════════════════════ */
function InsightPage() {
  const articles = [
    {tag:"트렌드", title:"2025 기업 AX 현황 리포트: 국내 제조업 AI 전환 가속화",    date:"2025.05",read:"8분",  img:"📈", body:"2025년 국내 주요 산업의 AI 전환 현황과 KT가 분석한 핵심 트렌드 및 전략적 시사점"},
    {tag:"기술",   title:"거대언어모델(LLM)의 기업 적용 전략: 도입부터 운영까지",     date:"2025.04",read:"12분", img:"🧠"},
    {tag:"케이스", title:"KT와 함께한 H중공업 스마트팩토리 전환 성공 스토리",         date:"2025.04",read:"6분",  img:"🏭"},
    {tag:"전략",   title:"AX 성숙도 모델로 보는 단계별 AI 전환 로드맵",              date:"2025.03",read:"10분", img:"🗺️"},
    {tag:"기술",   title:"MLOps 플랫폼 구축 가이드: 모델 운영 자동화의 핵심",        date:"2025.03",read:"15분", img:"🔄"},
    {tag:"규제",   title:"AI 거버넌스와 데이터 컴플라이언스: 기업이 알아야 할 것",   date:"2025.02",read:"9분",  img:"⚖️"},
  ];
  const tc = {트렌드:G.accent,기술:G.purple,케이스:G.green,전략:G.orange,규제:"#FF6B6B"};
  return (
    <div className="ax-kt-shell">
      <div style={{marginBottom:36}}>
        <Tag color={G.purple}>Insight</Tag>
        <h1 style={{fontFamily:"var(--font-ax-kt-syne), 'Syne', sans-serif",fontWeight:800,fontSize:38,color:G.text,marginTop:14,marginBottom:8,letterSpacing:"-0.04em"}}>AX 인사이트</h1>
        <p style={{fontSize:15,color:G.textSub}}>AI 전환의 최전선에서 전하는 전략·기술·사례</p>
      </div>
      <div style={{background:G.card,border:`1px solid ${G.borderBright}`,borderRadius:24,padding:36,marginBottom:24,cursor:"pointer",display:"grid",gridTemplateColumns:"1fr auto",gap:24,alignItems:"center"}}
        onMouseEnter={e=>e.currentTarget.style.borderColor=G.accent}
        onMouseLeave={e=>e.currentTarget.style.borderColor=G.borderBright}>
        <div>
          <div style={{display:"inline-flex",background:"rgba(0,212,255,0.1)",border:"1px solid rgba(0,212,255,0.25)",borderRadius:100,padding:"4px 12px",fontSize:11,fontWeight:600,color:G.accent,marginBottom:14}}>FEATURED</div>
          <h2 style={{fontFamily:"var(--font-ax-kt-syne), 'Syne', sans-serif",fontWeight:800,fontSize:24,color:G.text,letterSpacing:"-0.03em",marginBottom:10,lineHeight:1.3}}>{articles[0].title}</h2>
          <p style={{fontSize:13,color:G.textSub,marginBottom:16}}>{articles[0].body}</p>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <span style={{fontSize:12,color:G.textDim}}>{articles[0].date}</span>
            <span style={{fontSize:12,color:G.textDim}}>·</span>
            <span style={{fontSize:12,color:G.textDim}}>읽기 {articles[0].read}</span>
            <span style={{marginLeft:8,fontSize:13,color:G.accent,fontWeight:600}}>읽기 →</span>
          </div>
        </div>
        <div style={{fontSize:72,opacity:0.6}}>{articles[0].img}</div>
      </div>
      <div className="ax-kt-grid-cards ax-kt-grid-cards--3">
        {articles.slice(1).map((a,i)=>{
          const c=tc[a.tag]||G.accent;
          return (
            <div key={i} style={{background:G.card,border:`1px solid ${G.border}`,borderRadius:18,padding:22,cursor:"pointer",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=c;e.currentTarget.style.transform="translateY(-4px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=G.border;e.currentTarget.style.transform="translateY(0)";}}>
              <div style={{fontSize:32,marginBottom:14}}>{a.img}</div>
              <Tag color={c}>{a.tag}</Tag>
              <div style={{fontFamily:"var(--font-ax-kt-syne), 'Syne', sans-serif",fontWeight:700,fontSize:14,color:G.text,marginTop:10,marginBottom:8,lineHeight:1.4}}>{a.title}</div>
              <div style={{display:"flex",gap:8,fontSize:11,color:G.textDim}}>
                <span>{a.date}</span><span>·</span><span>읽기 {a.read}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════════ */
function AxKtUrlSync({ setPage, setConsultantBoot }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("open") === "consultant") {
      setConsultantBoot(null);
      setPage("consultant");
    }
  }, [searchParams, setPage, setConsultantBoot]);
  return null;
}

function AxKtComAppInner() {
  const [page, setPage] = useState("home");
  const [consultantBoot, setConsultantBoot] = useState(null);

  const goConsultantWithPreset = (preset) => {
    setConsultantBoot(preset);
    setPage("consultant");
  };

  const openConsultant = () => {
    setConsultantBoot(null);
    setPage("consultant");
  };

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:${G.bg};color:${G.text};font-family:var(--font-ax-kt-dm), 'DM Sans', sans-serif;}
        button,input{font-family:var(--font-ax-kt-dm), 'DM Sans', sans-serif;}
        ::-webkit-scrollbar{width:5px;height:5px;}
        ::-webkit-scrollbar-track{background:${G.bg};}
        ::-webkit-scrollbar-thumb{background:${G.border};border-radius:3px;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeSlide{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes msgIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      `}</style>
      <div className="ax-kt-root">
        <Suspense fallback={null}>
          <AxKtUrlSync setPage={setPage} setConsultantBoot={setConsultantBoot} />
        </Suspense>
        <NavBar page={page} setPage={setPage} onOpenConsultant={openConsultant} />
        {page==="home"      && <HomePage setPage={setPage} onQuickReport={goConsultantWithPreset}/>}
        {page==="consultant"&& (
          <ConsultantPage
            boot={consultantBoot}
            onBootConsumed={()=>setConsultantBoot(null)}
          />
        )}
        {page==="adoption"  && <AdoptionPage/>}
        {page==="usecases"  && <UseCasesPage/>}
        {page==="insight"   && <InsightPage/>}
        {page!=="consultant"&&(
          <footer style={{borderTop:`1px solid ${G.border}`,padding:"28px 24px",marginTop:40}}>
            <div className="ax-kt-shell" style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:0,paddingBottom:0}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <KtLogo className="!h-7 !max-h-7" />
                <span style={{fontWeight:800,fontSize:13,color:G.text}}>AX<span style={{color:G.accent}}>.</span>KT</span>
              </div>
              <div style={{fontSize:12,color:G.textDim}}>© 2025 KT Corp. All rights reserved.</div>
            </div>
          </footer>
        )}
      </div>
    </>
  );
}

export default function AxKtComApp() {
  return (
    <Suspense fallback={<div className="ax-kt-root min-h-dvh bg-[#FAFAFA]" />}>
      <AxKtComAppInner />
    </Suspense>
  );
}
