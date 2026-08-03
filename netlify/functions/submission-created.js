const https = require('https');

exports.handler = async function (event) {
  try {
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.warn('Telegram notification skipped: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.');
      return { statusCode: 200 };
    }

    const { payload } = JSON.parse(event.body || '{}');
    const d = payload?.data || {};

    const text =
      `📬 ახალი კლიენტი!\n\n` +
      `👤 სახელი: ${d.name || '-'}\n` +
      `📧 ელ-ფოსტა: ${d.email || '-'}\n` +
      `📞 ტელეფონი: ${d.phone || '-'}\n` +
      `🗂 სესიის ტიპი: ${d.type || '-'}\n` +
      `💬 შეტყობინება:\n${d.message || '-'}`;

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
        res.on('end', () => {
          if (res.statusCode >= 400) {
            reject(new Error(`Telegram API returned ${res.statusCode}`));
            return;
          }
          resolve();
        });
      });
      req.on('error', reject);
      req.write(body);
      req.end();
    });

    return { statusCode: 200 };
  } catch (err) {
    console.error(err);
    return { statusCode: 200 };
  }
};
