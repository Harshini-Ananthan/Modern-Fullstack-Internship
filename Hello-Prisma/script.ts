import "dotenv/config";
import { prisma } from "./lib/prisma.js";

async function main() {
  // Create a new user with a post
  const user = await prisma.user.createMany({
    data: [{
      name: "Harshini",
      email: "harsh@gmail.com"
      
    },
    {
      name: "Madhu",
      email: "madhu@gmail.com"
    }
  ]
  });
  console.log("Created user:", user);

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()