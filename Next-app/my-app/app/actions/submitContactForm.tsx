'use server';
import path from "path";
import fs from "fs/promises";
const process = require("process");


async function submitContactForm(formData : FormData) {

    const obj = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        message: formData.get("message")
    }
    console.log(obj);

    const filePath = path.join(process.cwd(),"app" , "data", "users.json")
    const fileData = await fs.readFile(filePath, "utf-8");

    console.log("fileData: ",fileData);
    const data = JSON.parse(fileData);
    data.push(obj)
    //console.log("Parsed data: ",data);

    fs.writeFile(filePath, JSON.stringify(data, null, 2));
    

    // console.log("Server actions form: ",formData);
    // console.log("Full name: ",formData.get("fullName"));
}
export default submitContactForm;