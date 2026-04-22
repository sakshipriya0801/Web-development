const users = require('./user.json');

console.log("Users as objects:");
console.log(users);

console.log("\n--- JSON String ---");
const usersString = JSON.stringify(users);
console.log(usersString);

console.log("\n--- Pretty JSON String ---");
const prettyString = JSON.stringify(users, null, 2);
console.log(prettyString);
