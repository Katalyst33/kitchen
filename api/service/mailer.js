const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();


router.post('/', (req, res) => {

    const htmlOutput = `
       <ul>
      
       <li>Names:${req.body.name}</li>
       <li>Email:${req.body.userEmail}</li>
       <li>Username:${req.body.username}</li>
       <li>Member:${req.body.member}</li>
       <li>purpose:${req.body.purpose}</li>
       <li>Questions:${req.body.questions}</li>
       <ul>        
        `;

    const textOutput = `
       
        Email:${req.body.userEmail} \n 
        <li>Username:${req.body.username}</li>
        Member:${req.body.member}\n
        Purpose:${req.body.purpose}\n
        Questions:${req.body.questions}\n
               
        `;
/*

Production

 host: "mail.newagebot.org",
        port:  26,
        auth: {
            user: 'mail@newagebot.org', // generated ethereal user
            pass: 'manager@2020'  // generated ethereal password
        },
        secure:false
//Development


        host: "smtp.mailtrap.io",
        port:  2525,
        auth: {
            user: '702339adeb79a5', // generated ethereal user
            pass: '23c80b62372164'  // generated ethereal password
        },

    host: "newagebot.org",
        port:465,
        auth: {
            user: 'mail@newagebot.org', // generated ethereal user
            pass: 'manager@2020'  // generated ethereal password
        },
        secure:true



*
* */

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({

        host: process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth: {
            user:process.env.EMAIL_USER, // generated ethereal user
            pass:process.env.EMAIL_PASS  // generated ethereal password
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }

    });

    // setup email data with unicode symbols
    let mailOptions = {
        from:process.env.EMAIL_ADDRESS, // sender address
        to:process.env.EMAIL_ADDRESS, // list of receivers
        text: textOutput, // plain text body
        html: htmlOutput // html body
    };


    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send({msg: 'Your Message failed to deliver, Please try again sometime later'});
            console.log('Oooooops!! Email not sent');
            return console.log(error);
        }
        // console.log('Message sent: %s', info.messageId);
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // console.log(htmlOutput);

        res.send({msg: 'You email was delivered, we will be in touch with you shortly'});
        return console.log('Email sent Successfully' + info.messageId);

    });


    // console.log(req.body);
});

module.exports = router;
