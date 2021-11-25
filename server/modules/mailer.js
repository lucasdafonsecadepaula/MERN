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

module.exports = transporter;



// const path = require('path')
// const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-express-handlebars");

// const { host, port, auth } = JSON.parse(process.env.NODEMAILER_CONFIG);
// const { user, pass } = auth;

// const transport = nodemailer.createTransport({
//   host,
//   port,
//   auth: {
//     user,
//     pass,
//   },
// });

// transport.use(
//   "compile",
//   hbs({
//     viewEngine: "handlebars",
//     viewPath: path.resolve('./modules/'),
//     extName: ".html",
//   })
// );

// module.exports = transport;
