import express from "express";
import generatePDF from "./lib/generatePDF.js";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', function(req, res) {
    res.send("Hello there, this is the home page")
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