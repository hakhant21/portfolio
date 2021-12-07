const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const results = `
    NAME: ${body.name}\r\n
    EMAIL: ${body.email}\r\n
    MESSAGE: ${body.message}
  `;

  const data = {
    to: 'hakhant.dev@gmail.com',
    from: 'info@hakhant.online',
    subject: 'A new message from portfolio site',
    text: results.message,
    html: `
    <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5" class="py-6 px-4 rounded-lg w-full h-full">
        <p class="text-lg text-gray-500 font-bold">
           ${body.message}
        </p>
    </div>`,
  };

  mail.send(data);

  res.status(200).json({ success: 'Your message have been sent successfully' });
};
