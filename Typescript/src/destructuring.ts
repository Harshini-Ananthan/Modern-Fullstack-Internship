// Array Destructuring
const numbers: number[] = [1, 2, 3, 4, 5];
const [first, second, , , last] = numbers;
console.log("First: ", first); 
console.log("Second: ", second);
console.log("Last: ", last);

// Object Destructuring

enum VoteStatus {
    canVote = "VOTE",
    notEligible = "NOT_ELIGIBLE",
}

const user = {
    name : "Harsh",
    age : 19,
    isEligibleToVote : VoteStatus.canVote,
}

const { name, isEligibleToVote } = user;
console.log(`${name} - ${isEligibleToVote}`);