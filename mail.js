const nodemailer = require("nodemailer");
var d =new Date();
var day=d.getDate();
var month=d.getMonth()+1;
var year=d.getFullYear();
var curdate = day+'-'+month+'-'+year;
var filen = curdate+'.txt';
var filepath = './' + curdate+'/'+filen;

async function main() {

  let transporter = nodemailer.createTransport({
    service:'gmail', // true for 465, false for other ports
    auth: {
      user: 'testmailceek@gmail.com', // generated ethereal user
      pass: 'vrceektest', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '<testmailceek@gmail.com>', // sender address
    to: "vanyapatskan1999@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [ {
    filename: filen,
    path: filepath } ]

  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
