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
    to: 'qozeemodeniran@gmail.com, du00712@georgiasouthern.edu, qo00109@georgiasouthern.edu, oa03242@georgiasouthern.edu',
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