const nodemailer = require("nodemailer");
const path = require("path")

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "smartieclasses12345@gmail.com",
    pass: "lhqx vxpv xvsw scam",
  },
});


const mailOptions = {

    from: {
        name: "Nate",
        address: "smartieclasses12345@gmail.com"

    },
    to: ["nathan11.abreu@gmail.com", "nathan02.abreu@gmail.com"], 
    subject: "Funfa? ✔", 
    text: "OiOi", 
    html: "<b>SIM</b>", 
}


const sendMail = async(transporter, mailOptions) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent!");
    }catch(error){
        console.error(errror);
    }
}

sendMail(transporter, mailOptions);