const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.CONFIG_MAILER_HOST,
  port: process.env.CONFIG_MAILER_PORT,
  secure: false,
  auth: { 
      user: process.env.CONFIG_MAILER_USER, 
      pass: process.env.CONFIG_MAILER_PASS 
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
