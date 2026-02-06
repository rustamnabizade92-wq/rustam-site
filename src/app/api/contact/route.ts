import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  packageId?: string;
};

function isEmail(v: string) {
  return /^\S+@\S+\.\S+$/.test(v);
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as Payload | null;

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const packageId = String(body?.packageId ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ ok: false, error: "Message too short" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const subject = `Website inquiry — ${name}${packageId ? ` (${packageId})` : ""}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New website inquiry</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Package:</b> ${escapeHtml(packageId || "—")}</p>
        <hr style="margin: 16px 0;" />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        <p style="margin-top: 16px; font-size: 12px; color: #666;">
          Sent from rustamnabizade.com
        </p>
      </div>
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html,
    });

    if ((result as any)?.error) {
      return NextResponse.json(
        { ok: false, error: (result as any).error?.message ?? "Resend error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    ret
