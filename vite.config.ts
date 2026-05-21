import { defineConfig, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { IncomingMessage, ServerResponse } from "node:http";

const PARAMANTRA_URL =
  "https://cloud.paramantra.com/paramantra/api/data/new/format/json";
const API_KEY = process.env.PARAMANTRA_API_KEY || "3BH3JyyNLNCHL5J50Kw6wp6vps";
const APP_NAME = process.env.PARAMANTRA_APP_NAME || "M5Lwo1805uHBoN";
const REP_ID = process.env.PARAMANTRA_REP_ID || "vinod@globaledifice.in";
const CHANNEL_ID = process.env.PARAMANTRA_CHANNEL_ID || "Demand Gen_2026_04_07";
const SUBJECT =
  process.env.PARAMANTRA_SUBJECT || "Lead from Demand Gen_2026_04_07";
const PROJECT_NAME =
  process.env.PARAMANTRA_PROJECT || "Global Edifice The Clan";

async function forwardToParamantra(payload: Record<string, string>) {
  const formData = new URLSearchParams();
  formData.append("rep_id", REP_ID);
  formData.append("channel_id", CHANNEL_ID);
  formData.append("subject", SUBJECT);
  formData.append("project", PROJECT_NAME);
  formData.append("alert_client", "0");
  formData.append("alert_rep", "0");

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value ?? "");
  });

  const response = await fetch(PARAMANTRA_URL, {
    method: "POST",
    headers: {
      "X-API-KEY": API_KEY,
      "ACTION-ON": APP_NAME,
      Authorization: `Basic ${Buffer.from(`${API_KEY}:`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  const text = await response.text();

  return {
    ok: response.ok,
    status: response.status,
    body: text,
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "development" && {
      name: "paramantra-dev-endpoint",
      configureServer(server: ViteDevServer) {
        server.middlewares.use(
          "/api/paramantra",
          async (req: IncomingMessage, res: ServerResponse) => {
            if (req.method !== "POST") {
              res.statusCode = 405;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Method not allowed" }));
              return;
            }

            try {
              const chunks: Buffer[] = [];

              for await (const chunk of req) {
                chunks.push(
                  Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk),
                );
              }

              const rawBody = Buffer.concat(chunks).toString("utf8");
              const payload = JSON.parse(rawBody || "{}");
              const result = await forwardToParamantra(payload);

              res.statusCode = result.status;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: result.ok, response: result.body }));
            } catch (error) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  error:
                    error instanceof Error ? error.message : "Unknown error",
                }),
              );
            }
          },
        );
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
