type ApiRequest = {
  method?: string;
  body?: Record<string, unknown>;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

const PARAMANTRA_URL =
  "https://cloud.paramantra.com/paramantra/api/data/new/format/json";
const API_KEY = process.env.PARAMANTRA_API_KEY || "3BH3JyyNLNCHL5J50Kw6wp6vps";
const APP_NAME = process.env.PARAMANTRA_APP_NAME || "M5Lwo1805uHBoN";
const REP_ID = process.env.PARAMANTRA_REP_ID || "vinod@globaledifice.in";
const CHANNEL_ID = process.env.PARAMANTRA_CHANNEL_ID || "Demand Gen_2026_04_07";
const SUBJECT =
  process.env.PARAMANTRA_SUBJECT || "Lead From Demand Gen_2026_04_07";
const PROJECT_NAME =
  process.env.PARAMANTRA_PROJECT || "Global Edifice The Clan";

function appendField(formData: FormData, key: string, value: unknown) {
  if (typeof value === "string") {
    formData.append(key, value);
    return;
  }

  if (value === null || value === undefined) {
    formData.append(key, "");
    return;
  }

  formData.append(key, String(value));
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const formData = new FormData();
    appendField(formData, "rep_id", REP_ID);
    appendField(formData, "channel_id", CHANNEL_ID);
    appendField(formData, "subject", SUBJECT);
    appendField(formData, "project", PROJECT_NAME);
    appendField(formData, "alert_client", "0");
    appendField(formData, "alert_rep", "0");

    Object.entries(req.body || {}).forEach(([key, value]) => {
      appendField(formData, key, value);
    });

    const response = await fetch(PARAMANTRA_URL, {
      method: "POST",
      headers: {
        "X-API-KEY": API_KEY,
        "ACTION-ON": APP_NAME,
        Authorization: `Basic ${Buffer.from(`${API_KEY}:`).toString("base64")}`,
        // Do NOT set Content-Type manually — fetch sets it automatically
        // with the correct multipart/form-data boundary when using FormData
      },
      body: formData,
    });

    const text = await response.text();
    res.status(response.status).json({ ok: response.ok, response: text });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
