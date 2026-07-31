export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not configured");
    return Response.json({ error: "문의를 처리할 수 없습니다. 잠시 후 다시 시도해주세요." }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return Response.json({ error: "이름, 이메일, 문의 내용을 입력해주세요." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "이메일 형식을 확인해주세요." }, { status: 400 });
  }
  if (name.length > 100 || company.length > 100 || email.length > 200 || phone.length > 50 || message.length > 4000) {
    return Response.json({ error: "입력 길이를 확인해주세요." }, { status: 400 });
  }

  const lines = [
    `*새 문의 - 다온클라우드 홈페이지*`,
    `*이름:* ${name}`,
    company && `*회사:* ${company}`,
    `*이메일:* ${email}`,
    phone && `*연락처:* ${phone}`,
    `*내용:*\n${message}`,
  ].filter(Boolean);

  const slackRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: lines.join("\n") }),
  });

  if (!slackRes.ok) {
    console.error("Slack webhook failed", slackRes.status, await slackRes.text());
    return Response.json({ error: "문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
