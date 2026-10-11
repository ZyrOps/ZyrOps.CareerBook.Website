import { validateLead } from "@/lib/lead";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden "company_website" field.
  if (body.company_website) return Response.json({ ok: true });

  const { lead, errors } = validateLead(body);
  if (!lead) return Response.json({ ok: false, errors }, { status: 422 });

  const payload = { ...lead, source: "careerbookerp.com", submittedAt: new Date().toISOString() };
  const webhook = process.env.CRM_WEBHOOK_URL;

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CRM_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.CRM_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify(payload),
    }).catch(() => null);
    if (!res?.ok) {
      console.error("[lead] CRM webhook failed", res?.status);
      return Response.json({ ok: false, error: "We couldn't submit your request. Please try again or contact us on WhatsApp." }, { status: 502 });
    }
  } else {
    console.info("[lead] CRM_WEBHOOK_URL not set; lead received", { email: payload.email, intent: payload.intent });
  }

  return Response.json({ ok: true });
}
