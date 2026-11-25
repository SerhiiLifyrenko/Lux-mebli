// Vercel Function: дублює заявку з сайту в Telegram.
// Потрібні змінні середовища у Vercel: TELEGRAM_BOT_TOKEN і TELEGRAM_CHAT_ID
// (кілька отримувачів — через кому). Без них функція нічого не робить.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_ID || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!token || chatIds.length === 0) return res.status(200).json({ ok: false, skipped: 'not configured' });

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const text = typeof body.text === 'string' ? body.text.trim() : '';
  if (text.length < 10 || text.length > 3500) return res.status(400).json({ ok: false });

  const results = await Promise.all(chatIds.map((chat_id) =>
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id, text, disable_web_page_preview: true }),
    }).then((r) => r.ok).catch(() => false)
  ));
  return res.status(results.some(Boolean) ? 200 : 502).json({ ok: results.some(Boolean) });
}
