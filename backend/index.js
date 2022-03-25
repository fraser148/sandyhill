import express from "express";
import generatePDF from "./lib/generatePDF.js";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
    origin: 'https://623dac7353957f0008b22491--heuristic-wright-33c6aa.netlify.app'
}));

app.get('/', function(req, res) {
    res.send("Hello there, this is the home page, now with the new test!! can you work")
});

app.post('/generate-patient-summary', async function(req, res) {
    generatePDF(req.body)
    .then(pdf => {
        res.set("Content-Type", "application/pdf");
        res.send(pdf);
    })
    .catch(err => {
        console.error(err)
    })
    
})

app.listen(port, function() {
    console.log(`API listening on port ${port}`)
});