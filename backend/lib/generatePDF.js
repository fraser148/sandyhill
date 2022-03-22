import puppeteer from "puppeteer";
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

// current timestamp in milliseconds
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

let my_date = String(date).padStart(2, '0') + "/" + String(month).padStart(2, '0') + "/" + year;


export default async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var content = fs.readFileSync(`${__dirname}/html.html`, 'utf8')

    // content = content.replace('{{IMAGE}}','https://sandyhillphysio.co.uk/wp-content/uploads/2020/03/cropped-sandyhillphysio_logo-2048x752.png')
    content = content.replace('{{FULL_NAME}}',"Fraser Rennie");
    content = content.replace('{{DATE}}', my_date)
    
    await page.setContent(content, {
        waitUntil: 'domcontentloaded'
    })

    const pdfBuffer = await page.pdf();

    await page.close();
    await browser.close();

    return pdfBuffer;
};