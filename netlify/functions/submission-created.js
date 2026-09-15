const https = require('https');

exports.handler = async function (event) {
  try {
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.warn('Telegram notification skipped: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.');
      return { statusCode: 200 };
    }

    const { payload } = JSON.parse(event.body || '{}');
    const d = payload?.data || {};

    const asText = (value) => {
      if (Array.isArray(value)) return value.filter(Boolean).join(', ');
      return value || '-';
    };

    const formName = payload?.form_name || d['form-name'] || 'contact';
    const isConsultationForm = formName === 'four-consultations';

    const text = isConsultationForm
      ? `📬 ახალი რეგისტრაცია - 4 კონსულტაცია\n\n` +
        `👤 სახელი და გვარი: ${asText(d.name)}\n` +
        `📧 ელ-ფოსტა: ${asText(d.email)}\n` +
        `📞 ტელეფონი: ${asText(d.phone)}\n` +
        `📅 სასურველი დღეები: ${asText(d.preferred_days)}\n` +
        `🕒 სასურველი დრო: ${asText(d.preferred_times)}\n` +
        `💬 შეტყობინება:\n${asText(d.message)}`
      : `📬 ახალი კლიენტი!\n\n` +
        `👤 სახელი: ${asText(d.name)}\n` +
        `📧 ელ-ფოსტა: ${asText(d.email)}\n` +
        `📞 ტელეფონი: ${asText(d.phone)}\n` +
        `🗂 სესიის ტიპი: ${asText(d.type)}\n` +
        `💬 შეტყობინება:\n${asText(d.message)}`;

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
