var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muhdqozeem@gmail.com',
        pass: 'dxnlqfphcpzgimaz' // auto-generated from apppassword on gmail
    }
});

var mailOptions = {
    from: 'muhdqozeem@gmail.com',
    to: 'qozeemodeniran@gmail.com',
    subject: 'Testing Nodejs Email',
    text: 'Hello, kindly disregard this. I am just tryna test nodemailer'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email was successfully sent to: ' + info.response)
    }
});