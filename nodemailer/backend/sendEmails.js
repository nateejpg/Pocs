const nodemailer = require("nodemailer");
const axios = require("axios");

// Mailchimp API configuration
const mailchimpUrl = 'https://us13.api.mailchimp.com/3.0/lists/1879a78d15/members/';
const mailchimpApiKey = '0f744e21df45bb637c8063dbdefce541-us13';

// Nodemailer configuration
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

const getSubscribers = async () => {
  try {
    const response = await axios.get(mailchimpUrl, {
      auth: {
        username: 'anystring',
        password: mailchimpApiKey,
      },
    });
    const subscribers = response.data.members
      .filter(member => member.status === 'subscribed')
      .map(member => member.email_address);
    return subscribers;
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return [];
  }
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent!");
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const main = async () => {
  const subscribers = await getSubscribers();
  if (subscribers.length === 0) {
    console.log('No subscribers to send emails to.');
    return;
  }

  const mailOptions = {
    from: {
      name: "Nate",
      address: "smartieclasses12345@gmail.com"
    },
    to: subscribers,
    subject: "Acho q tá funfando tudo oq a gente tentou!? ✔",
    text: "OiOi",
    html: "<b>SIM</b>",
  };

  await sendMail(transporter, mailOptions);
};

main();
