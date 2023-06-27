const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path'); // Add the 'path' module

const app = express();
dotenv.config();
app.use(express.static('public'));

const upload = multer();

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/index.html')); // Set the path of index.html
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', upload.none(), (request, response) => {
    // ...

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // ...
        } else {
            console.log('Email Sent' + info.response);
            return response.redirect('/thankyou.html'); // Set the path of thankyou.html
        }
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
