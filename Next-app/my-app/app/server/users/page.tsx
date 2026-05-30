// fetch the data directly on the server
// then the page with the fetched data is rendered on the server
// then server will rendered the page to the client
// if somebody visits the page, immediately they will see the data without the delay

type User = {
    id: number,
    firstName: string,
    email: string
}

async function getAllUsers(){
    const response = await fetch("https://dummyjson.com/users", {
        cache : 'no-store'
    });
    const users = await response.json();
    return users.users;
}

async function UsersPage(){
    const users = await getAllUsers();
    console.log("Loading Users on Server");
    console.log("users: ", users);

    return (
        <>
        {
            users.map((user:User) => (
                <div key = {user.id}>
                    <p>{user.firstName}</p>
                    <p>{user.email}</p>
                </div>
            ))
        }
        </>
    )
}

export default UsersPage;