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

const datar = {
    address_line_1: "69 Corrour Road",
    address_line_2: "",
    agreement: true,
    dob: "2022-03-08",
    email: "fjrennie1@outlook.com",
    firstName: "Fraser",
    gp_name: "asdf",
    gp_surgery: "fads",
    lastName: "Rennie",
    medication: true,
    medication_type: "paracetamol",
    occupation: "fdas",
    off_work: true,
    off_work_time: "5 weeks",
    pain: "Moderate",
    pain_constant: "Yes",
    pain_sleep: "Yes, woken up from sleep",
    phone: "07514310679",
    postcode: "G43 2ED",
    progression: "worse",
    recurring: true,
    recurring_therapy: true,
    recurring_therapy_type: "yes",
    recurring_time: "5 months",
    sex: "male",
    symptoms: "fasdfasfd",
    symptoms_time: "Less than 2 weeks",
}

export default async (data) => {
    var content = fs.readFileSync(`${__dirname}/template.html`, 'utf8')

    // content = content.replace('{{IMAGE}}','https://sandyhillphysio.co.uk/wp-content/uploads/2020/03/cropped-sandyhillphysio_logo-2048x752.png')
    content = content.replace('{{DATE}}', my_date);
    content = content.replace('{{firstName}}',data.firstName);
    content = content.replace('{{lastName}}', data.lastName);
    content = content.replace('{{firstName}}',data.firstName);
    content = content.replace('{{lastName}}', data.lastName);
    content = content.replace('{{dob}}', data.dob);
    content = content.replace('{{address1}}', data.address_line_1);
    content = content.replace('{{address2}}', data.address_line_2);
    content = content.replace('{{postcode}}', data.postcode);
    content = content.replace('{{sex}}', data.sex);
    content = content.replace('{{occupation}}', data.occupation);
    content = content.replace('{{email}}', data.email);
    content = content.replace('{{email}}', data.email);
    content = content.replace('{{phone}}', data.phone);
    content = content.replace('{{gp_name}}', data.gp_name);
    content = content.replace('{{gp_surgery}}', data.gp_surgery);
    content = content.replace('{{symptoms}}', data.symptoms);
    content = content.replace('{{symptoms_time}}', data.symptoms_time);
    content = content.replace('{{progression}}', data.progression);
    content = content.replace('{{pain}}', data.pain);
    content = content.replace('{{pain_constant}}', data.pain_constant);
    content = content.replace('{{pain_sleep}}', data.pain_sleep);
    
    if (data.off_work) {
        content = content.replace('{{off_work}}',"Yes");
        content = content.replace('{{off_work_time}}', data.off_work_time);
    } else {
        content = content.replace('{{off_work}}',"No");
        content = content.replace('{{off_work_time}}', "-");
    }

    
    if (data.medication) {
        content = content.replace('{{medication}}', "Yes");
        content = content.replace('{{medication_type}}', data.medication_type);
    } else {
        content = content.replace('{{medication}}', "No");
        content = content.replace('{{medication_type}}', "-");
    }


    
    if (data.recurring) {
        content = content.replace('{{recurring_time}}', data.recurring_time);
        content = content.replace('{{recurring}}', 'Yes');
        
        if (data.recurring_therapy) {
            content = content.replace('{{recurring_therapy_type}}', data.recurring_therapy_type);
            content = content.replace('{{recurring_therapy}}', "Yes");
        } else {
            content = content.replace('{{recurring_therapy}}', "No");
            content = content.replace('{{recurring_therapy_type}}', "-");
        }
    } else {
        content = content.replace('{{recurring_time}}', "-");
        content = content.replace('{{recurring}}', 'No');
        content = content.replace('{{recurring_therapy}}', "No");
        content = content.replace('{{recurring_therapy_type}}', "-");
    }

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage();
    
    // await page.setContent(content, {
    //     waitUntil: 'domcontentloaded'
    // })
    await page.setContent(content)
    
    const pdfBuffer = await page.pdf({
        format: 'A4',
            printBackground: true,
            margin: {
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px'
            }
    });

    // await page.close();
    await browser.close();

    console.log(`PDF Generated: ${pdfBuffer.length} Bytes`);

    return pdfBuffer;
};