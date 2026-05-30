'use server';
import path from "path";
import fs from "fs/promises";

async function formSubmit(formData: FormData){
    const obj = {
        fullName: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    }
    // console.log(obj);



    const filePath = path.join(process.cwd(),"app" , "data", "feedback.json")
    const fileData = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(fileData);
    data.push(obj);

    fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return(
        <>
            <h1></h1>
        </>
    )

}
export default formSubmit;