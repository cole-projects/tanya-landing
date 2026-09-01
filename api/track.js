export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { event_id } = req.body;
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  const userAgent = req.headers["user-agent"] || "";
  const referer = req.headers["referer"] || "https://tanyatalk.co";

  const payload = {
    data: [
      {
        event_name: "StartIMessage",
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        action_source: "website",
        event_source_url: referer,
        user_data: {
          client_ip_address: ip,
          client_user_agent: userAgent,
        },
      },
    ],
  };

  try {
    const r = await fetch(
      `https://graph.facebook.com/v21.0/4545922422318199/events?access_token=${process.env.META_CAPI_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const data = await r.json();
    res.status(r.ok ? 200 : 500).json(data);
  } catch {
    res.status(500).json({ error: "internal" });
  }
}
