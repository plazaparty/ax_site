# KT AI · AX 맞춤 상품 추천 시연 페이지

> 고객 상황에 맞는 KT AX 상품을 추천하고, 상담 연결까지 이어지는 시연용 프로토타입

기존 기술·정보 전달 중심의 `ai.kt.com`에서, **상품 제안 → 세일즈 리드 확보**로 전환되는 방향성을 시연하기 위한 웹 프로토타입입니다.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)

## 시연 흐름

```
메인 랜딩 (/) ─┬→ AI 컨설턴트 (/consultant)
               ├→ KT AX 둘러보기 (/explore)
               └→ AX 허브 메뉴 (/ax-value, /ax-maturity, …)
```

1. **메인 랜딩** — 상단 메뉴, Hero, AX 정보 허브 카드, 하단 CTA
2. **AX 메뉴 페이지** — Tech Stack, 추진 단계, 산업별, Trends, 소식·이벤트 (더미)
3. **AI 컨설턴트** — 질문 시나리오 후 맞춤 상품 카드 및 상담 CTA
4. **KT AX 둘러보기** — overview 및 허브 링크

## 빠른 시작

```bash
npm install
npm run dev
# 또는
npm run build && npm start
```

브라우저에서 [http://127.0.0.1:3000](http://127.0.0.1:3000) 접속 (스크립트는 `127.0.0.1` 바인딩)

## 다른 사람이 웹에서 접속하게 하기

**인터넷 전체에 공개**하려면 아래 중 하나를 쓰면 됩니다.

### 1) Vercel에 배포 (권장, Next.js에 최적)

1. [vercel.com](https://vercel.com)에 가입 후 GitHub에 이 저장소를 푸시합니다.
2. Vercel 대시보드에서 **Add New → Project**로 저장소를 import합니다.
3. Framework Preset이 **Next.js**로 잡히면 그대로 **Deploy**합니다.  
   빌드·호스트·HTTPS URL이 자동으로 생성됩니다.

별도 `vercel.json` 없이도 이 프로젝트는 기본 설정으로 배포 가능합니다.

배포 환경에서 **기준 URL(OG·canonical·메타데이터)** 을 맞추려면 Vercel 등에 `NEXT_PUBLIC_SITE_URL`을 설정합니다. 값을 두지 않으면 코드 기본값은 **`https://ai.kt.com`** 입니다. (로컬 전용 주소는 `.env.local`에 예: `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3000`)

### 2) 임시 공개 — ngrok (로컬을 URL로 노출)

터미널 1:

```bash
npm run build && npm run start:public
```

터미널 2:

```bash
npx ngrok@latest http 3000
```

ngrok이 출력하는 `https://xxxx.ngrok-free.app` 주소를 다른 사람에게 전달하면 됩니다. (시연·테스트용, 계정·요금 정책은 ngrok 사이트 참고)

### 3) 임시 공개 — Cloudflare Tunnel

[Cloudflare Zero Trust](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)에서 `cloudflared`로 로컬 `http://localhost:3000`에 터널을 연결하는 방식도 동일하게 임시 URL을 만들 수 있습니다.

### 4) 같은 Wi‑Fi 안에서만 (LAN)

```bash
npm run build && npm run start:public
```

맥의 IP(예: `192.168.0.10`)를 확인한 뒤, 같은 네트워크의 기기에서 `http://192.168.0.10:3000` 으로 접속합니다.  
방화벽에서 3000 포트 허용이 필요할 수 있습니다.

개발 중에 바로 열고 싶다면: `npm run dev:public` (모든 인터페이스에 바인딩)

## 라우트

| 경로 | 설명 |
|------|------|
| `/` | 메인 랜딩 |
| `/consultant` | AI 컨설턴트 |
| `/explore` | KT AX 둘러보기 overview |
| `/ax-value` | AX Value |
| `/ax-tech-stack` | (레거시) AX Value로 이동 |
| `/ax-maturity` | AX 추진 단계 |
| `/ax-industry` | 산업별 AX |
| `/ax-trends` | AX Trends |
| `/ax-events-news` | AX 소식 · 이벤트 |

## 이미지 카드 UI (Maturity / Industry)

- 공통 컴포넌트: `src/components/ImageCard.tsx` — 배경 이미지 + 그라데이션 오버레이 + hover 시 확대·설명 페이드인.
- 데이터: `axMaturity.ts`, `axIndustry.ts`에 `imageUrl`, `tagline` 필드 추가 (기존 텍스트 필드는 유지).
- **기존 텍스트 전용 카드** `MaturityStageCard`, `IndustryCard` 파일은 삭제하지 않았으며, 다른 페이지에서 그대로 import 해 사용할 수 있습니다.

이미지는 **Unsplash** CDN URL을 사용합니다. 오프라인/차단 환경에서는 `public/images`에 자산을 두고 `imageUrl`을 `/images/...` 로 바꾸면 됩니다.

## 프로젝트 구조 (요약)

```
src/
├── app/
│   ├── page.tsx
│   ├── explore/page.tsx
│   ├── consultant/page.tsx
│   └── ax-*/page.tsx
├── components/     # Header, HeroSection, PageHero, MenuCard, …
├── context/
├── data/           # nav, ax*.ts, products, recommend
└── types/
```

## 기술 스택

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Context API

## 라이선스

MIT
