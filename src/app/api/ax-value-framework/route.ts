import { readFile } from "node:fs/promises";

const IMAGE_PATH =
  "/Users/justin/Library/Application Support/Cursor/User/workspaceStorage/4cdd062c97d4651c194c71b859b2aa0e/images/다운로드-c6187589-1801-44eb-bb20-60371aa455de.png";

export async function GET() {
  const buf = await readFile(IMAGE_PATH);
  return new Response(buf, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

