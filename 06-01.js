// info: npm view nodemailer
// установленные пакеты: npm list  --depth=0
// путь к папке с глобальными пакетами npm root -g
//опубликовать пакет npm publish( до этого npm login)
// путь к папке с глобальными пакетами npm root -g
let nodemailer = require('nodemailer');

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
    subject: 'hi',
    text: 'hi'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});