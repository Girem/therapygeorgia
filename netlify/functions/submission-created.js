exports.handler = async function (event) {
  try {
    const { payload } = JSON.parse(event.body);
    const d = payload.data;

    const text =
      `📬 ახალი კლიენტი!\n\n` +
      `👤 სახელი: ${d.name || '—'}\n` +
      `📧 ელ-ფოსტა: ${d.email || '—'}\n` +
      `📞 ტელეფონი: ${d.phone || '—'}\n` +
      `🗂 სესიის ტიპი: ${d.type || '—'}\n` +
      `💬 შეტყობინება:\n${d.message || '—'}`;

    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: text
      })
    });

    return { statusCode: 200 };
  } catch (err) {
    console.error(err);
    return { statusCode: 500 };
  }
};
