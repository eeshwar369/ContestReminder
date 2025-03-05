const transporter = require("../config/emailConfig");

exports.sendEmailNotification = async (email, contestName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Reminder: ${contestName} starts in 30 minutes!`,
    text: `Hey! Don't forget, "${contestName}" starts in 30 minutes! Good luck!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
