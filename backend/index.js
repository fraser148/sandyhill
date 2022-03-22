import express from "express";
import generatePDF from "./lib/generatePDF.js";
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 3030;
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
app.use('/lib', express.static(path.join(__dirname, '/images')))


app.get('/', async function(req, res) {
    const pdf = await generatePDF();

    res.set("Content-Type", "application/pdf");
    res.send(pdf);
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});