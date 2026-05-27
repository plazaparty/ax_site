# Vercel 배포 가이드 (kt-ax-demo)

이 문서는 현재 버전(AX.KT `/ax-kt` 포함)을 Vercel에 올리기 위한 체크리스트입니다.

## 사전 요건

- Node.js **20+** (`.nvmrc` 참고)
- GitHub 저장소: `https://github.com/plazaparty/ax_site.git`
- [Vercel](https://vercel.com) 계정

## 로컬 배포 전 검증

```bash
cd kt-ax-demo
npm install
npm run vercel:preflight   # lint + production build
```

성공하면 Vercel 빌드도 동일 명령(`npm run build`)으로 진행됩니다.

## GitHub에 푸시 (필수)

아직 원격에 없는 변경이 있으면 먼저 커밋·푸시합니다.

```bash
git status
git add src/app/ax-kt src/ax-kt src/components/layout
git add next.config.ts src/app/layout.tsx README.md vercel.json .nvmrc docs/
# 기타 수정 파일도 함께 add
git commit -m "Prepare AX.KT prototype for Vercel deployment"
git push origin main
```

> `public/images/ax-value-framework.png` 가 저장소에 포함되어 있는지 확인하세요.  
> `/ax-value` 페이지가 이 정적 이미지를 사용합니다.

## Vercel에서 프로젝트 생성

1. [vercel.com/new](https://vercel.com/new) → **Import Git Repository**
2. `plazaparty/ax_site` 선택
3. **Root Directory**: 저장소 루트가 `kt-ax-demo`가 아니라 **프로젝트 루트**인지 확인  
   (모노레포가 아니면 비워 둠)
4. Framework Preset: **Next.js** (자동)
5. Build Command: `npm run build` (기본값, `vercel.json`과 동일)
6. Install Command: `npm install`
7. **Deploy**

첫 배포 URL 예: `https://ax-site-xxxx.vercel.app`

## 환경 변수 (권장)

| 이름 | 환경 | 값 |
|------|------|-----|
| `NEXT_PUBLIC_SITE_URL` | Production | 커스텀 도메인 또는 `https://….vercel.app` |
| (없음) | Preview | `VERCEL_URL` 자동 — layout이 metadataBase에 사용 |

Production에서 OG/링크를 고정 도메인으로 맞추려면 **Settings → Environment Variables**에  
`NEXT_PUBLIC_SITE_URL`을 Production에만 설정합니다.

## 배포 후 확인 URL

| 경로 | 설명 |
|------|------|
| `/` | 메인 랜딩 |
| `/ax-kt` | AX.KT 프로토타입 (AI Consultant, 리포트) |
| `/ax-kt/detail/explore/industry/public` | AX 도입 상세 |
| `/ax-kt/detail/use-case/1` | Use Case 상세 |
| `/ax-value` | AX Value (프레임워크 이미지) |

## CLI로 배포 (선택)

```bash
npm i -g vercel
cd kt-ax-demo
vercel login
vercel link          # 프로젝트 연결
vercel --prod        # Production 배포
```

## 알려진 제한

- `allowedDevOrigins` / LAN 개발 설정은 **로컬 dev 전용**이며 Vercel 빌드에는 영향 없습니다.
- 데모용 프로토타입이므로 별도 인증·DB env는 필요 없습니다.

## 문제 해결

| 증상 | 조치 |
|------|------|
| Build 실패 (TypeScript) | `npm run vercel:preflight` 로컬 재현 후 수정 |
| `/ax-value` 이미지 404 | `public/images/ax-value-framework.png` 커밋 여부 확인 |
| `/ax-kt` 404 | `src/app/ax-kt/` 디렉터리가 푸시됐는지 확인 |
