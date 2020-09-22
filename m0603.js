let nodemailer = require('nodemailer');

exports.sendmaill = function (message) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ghinko2001@gmail.com',
            pass: 'pass'
        }
    });

    var mailOptions = {
        from: 'ghinko2001@gmail.com',
        to: 'ghinko@mail.ru',
        subject: 'message',
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};