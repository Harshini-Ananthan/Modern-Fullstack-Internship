'use client';

import { useFormStatus } from "react-dom";

function Button(){
        const {pending} = useFormStatus();
    return(
        <>
        <button disabled={pending}>
            {pending ? "Form is submitting" : "Submit Form"}
        </button>
        </>
    )
}

export default function Form(){
    async function action(){
        await new Promise ((res, rej) => {
            setTimeout(res, 2000);
        })
    }

    return (
        <>
        <form action={action}>
            Username: 
            <input type= "text" name ="username" id="username"/>
            Password:
            <input type= "text" name ="password" id="password"/>
            <br/><br/>
            <Button/>
        </form>
        </>
    )
}