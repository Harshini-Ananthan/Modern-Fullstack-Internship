// 'use server';
// import path from "path";
// import fs from "fs/promises";
// import { revalidatePath } from "next/cache";
// import { useOptimistic } from "react";

// async function formSubmit(formData: FormData){
//     const obj = {
//         fullName: formData.get("name"),
//         email: formData.get("email"),
//         message: formData.get("message")
//     }
//     // console.log(obj);

//     const [opt, setOpt] = useOptimistic

//     const filePath = path.join(process.cwd(),"app" , "data", "feedback.json")
//     const fileData = await fs.readFile(filePath, "utf-8");

//     const data = JSON.parse(fileData);
//     data.push(obj);



//     await fs.writeFile(filePath, JSON.stringify(data, null, 2));

//     revalidatePath('/feedback');

// }
// export default formSubmit;


"use server";

import { pool } from "../lib/db";
import { revalidatePath } from "next/cache";

async function formSubmit(formData: FormData) {
  const fullName = formData.get("name");
  const email =formData.get("email");
  const message= formData.get("message");

  await pool.query(
    "INSERT INTO feedback (fullName, email, message) VALUES ($1, $2, $3)",
    [fullName, email, message]
  );

  revalidatePath("/feedback");
}

export default formSubmit;