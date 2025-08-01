require('dotenv').config();
const sendGrid = require("@sendgrid/mail");

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail() {
    const messageData = {
        to: 'dsarson2@gmail.com',
        from: 'danielsarson16@gmail.com',
        subject: 'test',
        text: 'test',
    }
    try {
        await sendGrid.send(messageData);
        console.log('message sent');

    } catch (error) {
        console.log(error);
    }
}
sendEmail();