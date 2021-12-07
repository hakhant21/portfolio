const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const { name, email, message } = JSON.parse(req.body);

 
  const data = {
    to: 'hakhant.dev@gmail.com',
<<<<<<< HEAD
    from: 'info@hakhant.online',
=======
    from: 'info@hakhant.tech',
>>>>>>> ab8c8d6ccdb1f26586022f9eddca0576585c4fc0
    subject: 'A new message from portfolio site',
    text: message,
    html: `
    <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5" class="py-6 px-4 rounded-lg w-full h-full">
        <p class="text-lg text-gray-500 font-bold">
           ${message}
        </p>
    </div>`,
  };

  sgMail.send(data)
        .then(res => res.status(200).json({ success: 'Your message have been sent successfully' }))
        .catch(err => res.status(500).json({ message: err.message}))
};
