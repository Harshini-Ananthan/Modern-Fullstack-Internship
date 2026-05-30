// runs on server
// server side components
// async before the function
// can not write useState, useEffect, buttons, event handlers

'use client';
import { useEffect, useState } from "react";

type User = {
    id: number,
    firstName : string
}

function UsersPage(){
    
    const [users, setUsers] = useState<User[]>([]);

    async function getAllUsers(){
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
        console.log("data: ",data.users);
    }

    useEffect(() => {
        getAllUsers();
    }, []) 

    return (
        <>
            <h1>Users Page</h1>
            {
                users.map((user:User) => (
                    <div key={user.id}>
                        <p>{user.firstName}</p>
                    </div>
                ))
            }
        </>
    )
}
export default UsersPage;