// Meta Pixel: базовий код підключено в index.html, тут — безпечна відправка подій.
export function track(event, params) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params);
  }
}
