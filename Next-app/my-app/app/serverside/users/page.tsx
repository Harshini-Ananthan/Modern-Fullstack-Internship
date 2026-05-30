type User = {
    id: number,
    firstName: string
}

async function getAllUsers(){
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    console.log("server data: ", data.users);
    return data.users;
}

async function UsersPage(){
    const users = await getAllUsers();
    return (
        <>
            <h1>Server Users: </h1>{
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