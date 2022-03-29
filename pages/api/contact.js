const nodemailer = require('nodemailer');
require('dotenv').config();
export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: process.env.PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  transporter.verify((err) => {
    err ? console.log(err) : console.log('Server is ready to take messages');
  });

  let mailOptions = {
    from: 'info@hakhant.tech',
    to: process.env.EMAIL,
    subject: `New message from ${req.body.name}`,
    text: `Send from ${req.body.email} about ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log('Error ' + err);
    } else {
      return res.status(200).json(data);
    }
  });
}
