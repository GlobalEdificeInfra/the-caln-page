const PARAMANTRA_ENDPOINT = "/api/paramantra";
const GOOGLE_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwuElrMpxkc6z5DOSbrS0a97bXFZL2l4SMaJqvVPYeLn9S-m2T3UHDwAv6Ye2PnJDqg/exec";
const DEFAULT_NOTES = "I am Interested in this project.Please call me";

export type LeadData = {
  name: string;
  email: string;
  phoneNumber: string;
  source?: string;
};

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    USOURCE: params.get("utm_source") || "",
    UMEDIUM: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_ad_group: params.get("utm_ad_group") || "",
    utm_term: params.get("utm_term") || "",
    utm_device: params.get("utm_device") || "",
    utm_gclid: params.get("utm_gclid") || "",
    utm_placement: params.get("utm_placement") || "",
    utm_ad_name: params.get("utm_ad_name") || "",
  };
}

export async function submitToParamantra(data: LeadData) {
  const nameParts = data.name.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  const utmParams = getUtmParams();

  const notes = data.source
    ? `${DEFAULT_NOTES} Source: ${data.source}`
    : DEFAULT_NOTES;

  const response = await fetch(PARAMANTRA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      f_name: firstName,
      l_name: lastName,
      email: data.email,
      phonefax: data.phoneNumber,
      notes,
      ...utmParams,
    }),
  });

  const result = (await response.json()) as {
    ok?: boolean;
    error?: string;
    response?: string;
  };

  if (!response.ok) {
    throw new Error(
      result.error ||
        `Paramantra request failed with status ${response.status}`,
    );
  }

  if (result.ok === false) {
    throw new Error(
      result.error || result.response || "Paramantra request failed",
    );
  }

  return result;
}

export async function submitToGoogleSheet(data: LeadData) {
  const utmParams = getUtmParams();
  const timestamp = new Date().toISOString();

  const payload = {
    timestamp,
    name: data.name,
    email: data.email,
    phone: data.phoneNumber,
    source: data.source || "",
    ...utmParams,
  };

  const response = await fetch(GOOGLE_SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    // no-cors: avoids CORS preflight and auth redirect (401).
    // Response is opaque so we cannot read it, but Apps Script receives and processes the POST.
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  });
}

/**
 * Submits the lead to both Paramantra and Google Sheet simultaneously.
 * Uses Promise.allSettled so a failure in one does not block the other.
 * Throws only if Paramantra (the primary CRM) fails.
 */
export async function submitLeadForm(data: LeadData) {
  const [paramantraResult, sheetResult] = await Promise.allSettled([
    submitToParamantra(data),
    submitToGoogleSheet(data),
  ]);

  if (sheetResult.status === "rejected") {
    console.error("[Google Sheet] submission failed:", sheetResult.reason);
  }

  if (paramantraResult.status === "rejected") {
    throw paramantraResult.reason;
  }

  return paramantraResult.value;
}
