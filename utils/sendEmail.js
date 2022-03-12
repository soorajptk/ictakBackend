const nodemailer=require('nodemailer')
const nodemailerConfig =require('./nodemailerConfig')
    const sendEmail=async({to,subject,text,html})=>{
    
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig);

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to,
    subject,
    text,
    html,
  });



}

module.exports=sendEmail