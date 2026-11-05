export interface SendFormPayload {
  formType: string;
  clientName?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
  subject?: string;
  message?: string;
  notes?: string;
  contactMethod?: string;
  bestTime?: string;
  reason?: string;
  sourceUrl?: string;
  extraDetails?: Record<string, unknown>;
}

export async function submitFormToEmail(payload: SendFormPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const sourceUrl =
      typeof window !== "undefined" ? window.location.href : payload.sourceUrl;

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        sourceUrl,
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || data.success === false) {
      console.error("Form delivery error:", data.error || res.statusText);
      return { success: false, error: data.error || "Failed to send message" };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Network error submitting form:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}

