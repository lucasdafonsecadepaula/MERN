const CONFIG_MAILER = {
  host: "smtp.gmail.com",
  port: 587,
  user: "vidadonthave@gmail.com",
  pass: "13234335924862",
};

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: CONFIG_MAILER.host,
  port: CONFIG_MAILER.port,
  secure: false,
  auth: { 
      user: CONFIG_MAILER.user, 
      pass: CONFIG_MAILER.pass 
    },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run(req, res) {
  const mailSend = await transporter.sendMail({
    text: "test  https://www.google.com.br/",
    subject: "Assunto test",
    from: "vidadonthave@gmail.com",
    to: "lucasdafonsecadepaula@gmail.com",
  });
  console.log(mailSend);
}

module.exports = { run };
