require('dotenv').config();
const express = require('express');
const sendGrid = require('@sendgrid/mail');

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/subscribe', async (req, res) => {
    sendGrid.send({
        to: req.body.email,
        from: 'danielsarson16@gmail.com',
        subject: 'Subscription',
        text: 'Thanks for subscribing!',
    });
    res.send('Email sent');
});

app.listen(3000);
