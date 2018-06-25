'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the 'gmail.email' and 'gmail.password' Google Cloud environment variables.
// firebase functions:config:set gmail.password="password" gmail.email="someemail@gmail.com"
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Saves a message to the Firebase Realtime Database but sanitizes the text by removing swearwords.
exports.addMessage = functions.https.onCall((data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
  }

  addMessageBackend(context.auth.token, data.name, data.email, data.company, data.message)
});

// Sends a welcome email to the given user.
function addMessageBackend(user, name, email, company, message) {
  const mailOptions = {
    from: 'alexis.paques@gmail.com',
    to: 'alexis.paques@gmail.com',
    subject: 'Contact from Web ✔', 
  };

  mailOptions.text = `name = ${name}
email = ${email}
company = ${company}
message = ${message}`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New message sent from user', user.displayName);
  });
}

