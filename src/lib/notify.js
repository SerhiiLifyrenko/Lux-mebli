// Дубль заявки в Telegram через /api/lead. Помилка тут не заважає основній відправці на пошту.
export function notifyTelegram(text) {
  try {
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* ігноруємо */
  }
}
