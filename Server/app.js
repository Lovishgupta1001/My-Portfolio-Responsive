const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
dotenv.config();
app.use(express.static('public'));

const upload = multer();

app.get('/', (request, response) => {
    response.sendFile('/index.html');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', upload.none(), (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const message = request.body.message;

    const transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: false,
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: 'Enquiry Mail',
        html: `<h2>Dear Lovish</h2><br>
            You have received a new enquiry from:<br>
            <b>Name: ${name}</b>,<br>
            <b>Email: ${email}</b>,<br>
            <b>Message: ${message}</b>,<br>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error.message);
            response.status(500).json({
                status: false,
                message: 'An error occurred while sending the email.',
            });
        } else {
            console.log('Email Sent' + info.response);
            // response.status(200).json({
            //     status: true,
            //     message: 'Email sent successfully!',
            // });
            return response.redirect('/thankyou.html');
        }
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
