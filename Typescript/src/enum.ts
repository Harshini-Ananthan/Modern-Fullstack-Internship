interface User {
    id: number;
    name: string;
    email: string;
    password : string;
    adminAccess: boolean;
}

const user1: User = {
    id: 1,
    name: "Harsh",
    email: "harsh@example.com",
    password: "abc123",
    adminAccess: true
};

const user2: User = {
    id: 2,
    name: "Madhu",
    email: "madhu@example.com",
    password: "123456",
    adminAccess: false
};

enum Role {
    ADMIN = "admin",
    USER = "user"
}

function login(email : string, password : string) {
    if (email === user1.email && password === user1.password) {
        if(user1.adminAccess) {
            console.log(`Welcome ${user1.name}. You have admin access.`);
        }
        else {
            console.log(`Welcome ${user1.name}. You have user access.`);
        }
    } 
    
    else if (email === user2.email && password === user2.password) {
        if(user2.adminAccess) {
            console.log(`Welcome ${user2.name}. You have admin access.`);
        }
        else {
            console.log(`Welcome ${user2.name}. You have user access.`);
        }
    } 
    
    else {
        console.log("Invalid email or password.");
    }
} 

login("harsh@example.com", "abc123");
login("madhu@example.com", "123456");
login("mathu@example.com", "password");