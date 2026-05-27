import { readFile } from "node:fs/promises";
import path from "node:path";

const IMAGE_REL = path.join("public", "images", "ax-value-framework.png");

/** @deprecated Prefer `/images/ax-value-framework.png` — kept for old bookmarks */
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), IMAGE_REL);
    const buf = await readFile(filePath);
    return new Response(buf, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  } catch {
    return new Response("Image not found", { status: 404 });
  }
}
