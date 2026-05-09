import { printLanUrls } from "./lan-url.mjs";

const port = process.env.PORT ?? "3000";
printLanUrls(port, "▼ LAN 주소 (npm run lan:url)", { streams: ["err"] });
