http = require('http')
url = require('url')
fs = require('fs')
let nodemailer = require('nodemailer');

http.createServer(function (request, response) {
    console.log('wqe');
    if (url.parse(request.url).pathname === '/send') {
        request.on('data', data => {
            let obj = JSON.parse(data);
            send_message(obj.message, obj.sender, obj.receiver);
        });
    } else if (url.parse(request.url).pathname === '/') {
        let html = fs.readFileSync('./06-02.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
}).listen(3001)

function send_message(message, sender, receiver) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: sender,
            pass: 'pass'
        }
    });

    var mailOptions = {
        from: sender,
        to: receiver,
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
}