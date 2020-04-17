const  express = require('express');
const nodemailer = require('nodemailer');
const  router = express.Router();

router.post('/send', (req, res) => {
    if (!req.header('SendEmail')) res.status(500).json({data: 'Invalid request'});
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'ivanbutko5@gmail.com',
      subject: 'Message from CV site',
      html: `   <h2>Sender: ${req.body.sender}</h2>
                <h2>Mail to: ${req.body.senderEmail}</h2>
                 </br>
                <p style="color: black; font-size: 16px; text-align: left;">${req.body.senderMessage}</p>`
    };

    transporter.sendMail(mailOptions,(err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  console.log(mailOptions);
});

module.exports = router;
