#!/usr/bin/env bash
# 최신 kt-ax-demo(AX.KT 포함)를 Vercel Production에 배포합니다.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ 빌드 검증 (npm run build)..."
npm run vercel:preflight

if ! command -v vercel >/dev/null 2>&1; then
  echo "→ Vercel CLI 설치..."
  npm i -g vercel@latest
fi

if ! vercel whoami >/dev/null 2>&1; then
  echo "→ Vercel 로그인이 필요합니다."
  vercel login
fi

if [[ ! -f .vercel/project.json ]]; then
  echo "→ 프로젝트 연결 (저장소 루트에서 Next.js 선택)"
  vercel link
fi

echo "→ Production 배포 중..."
vercel deploy --prod --yes

echo ""
echo "완료. 대시보드에서 Production URL을 확인하세요."
echo "AX.KT: <your-production-url>/ax-kt"
