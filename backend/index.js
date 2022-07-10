import express from "express";
import generatePDF from "./lib/generatePDF.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const app = express();
const port = 8080;

dotenv.config();

var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

 transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

var mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: 'helpme@sandyhillphysio.co.uk',
    subject: 'New Patient Info',
    text: 'That was easy!'
};

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
    origin: 'https://sandyhill.netlify.app'
}));
// app.use(cors({
//     origin: 'https://623dac7353957f0008b22491--heuristic-wright-33c6aa.netlify.app'
// }));

app.get('/', function(req, res) {
    res.send("Hello there, this is the home page, now with the new test!! can you work")
});

app.post('/generate-patient-summary', async function(req, res) {
    generatePDF(req.body)
    .then(pdf => {
        let message = {
            from: process.env.EMAIL_USERNAME,
            to: 'patient@sandyhillphysio.co.uk',
            subject: 'New Patient Info',
            text: 'That was easy!',
            attachments: [
                {
                    filename: 'patient_summary.pdf',
                    content: pdf,
                }
            ]
        }
        transporter.sendMail(message, (err, info) => {
            console.log(info.envelope);
            console.log(info.messageId);
        })
        // res.set("Content-Type", "application/pdf");
        // res.send(pdf);
        res.status(200).send({message: "Details sent!"})
    })
    .catch(err => {
        console.error(err)
        res.status(500).send({message: "There was an error with sending your details."})
    })
    
})

app.listen(port, function() {
    console.log(`API listening on port ${port}`)
});