const https = require('https');

exports.handler = async function (event) {
  try {
    const data = JSON.parse(event.body);
    const d = data.data || {};

    const text =
      `📬 ახალი კლიენტი!\n\n` +
      `👤 სახელი: ${d.name || '—'}\n` +
      `📧 ელ-ფოსტა: ${d.email || '—'}\n` +
      `📞 ტელეფონი: ${d.phone || '—'}\n` +
      `🗂 სესიის ტიპი: ${d.type || '—'}\n` +
      `💬 შეტყობინება:\n${d.message || '—'}`;

    const body = JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: text
    });

    await new Promise((resolve, reject) => {
      const req = https.request({
        hostname: 'api.telegram.org',
        path: `/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      }, (res) => {
        res.on('data', () => {});
        res.on('end', resolve);
      });
      req.on('error', reject);
      req.write(body);
      req.end();
    });

    return { statusCode: 200 };
  } catch (err) {
    console.error(err);
    return { statusCode: 500 };
  }
};
