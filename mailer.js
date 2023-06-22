//send email to user

//package called nodemailer
//package require
//nodemailer initializer;Transport
//transport.sendMail()
const nodemailer=require("nodemailer");
const mailoptions={
    from:'"Raksha" <rakshakhadka58@gmail.com>',
    to:"poornima.mrsn@gmail.com",
    subject:"Practice",
    text:"Hello Poornima",
    html:"<b>Hello Poornima</b>"
}
//gmail transporter initialization
const transporter=nodemailer.createTransport({
   host:"smtp.gmail.com",
   port:465,
   secure:true,
   auth:{
    user:"rakshakhadka58@gmail.com",
    pass:"",
   },
  });
const mailer=async(mailoptions,transporter)=>{
    console.log("sending email....");
    const info=await transporter.sendMail(mailoptions);
    //These are callback functions
    // transporter.sendMail(mailoptions,(err,info)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(info);
    //     }
    // });
    console.log({info: info.response});
};
mailer(mailoptions,transporter).catch(console.error);