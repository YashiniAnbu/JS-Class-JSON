//User Management System
class User {
    constructor(username, mobileNum, age) {
        this.username = username;
        this.mobileNum = mobileNum;
        this.age = age;
    }
    getUserDetails() {
        return `Username: ${this.username}
            Mobile: ${this.mobileNum}
            Age: ${this.age}`;
    }
    isAdult() {
        return this.age >= 18;
    }
}
const user1 = new User("Alice", "9876543210", 22);
const user2 = new User("Bob", "9123456780", 30);
const user3 = new User("Charlie", "9001122334", 17);

const usersArray = [user1, user2, user3];
for (let i = 0; i < usersArray.length; i++) {
    console.log(usersArray[i].getUserDetails());
    console.log("Adult:", usersArray[i].isAdult());
    console.log("-------------------");
}

//Working with JSON Data
const jsonData = `
[
 { "username": "Alice", "mobileNum": "9876543210", "age": 25 },
 { "username": "Bob", "mobileNum": "9123456780", "age": 30 },
 { "username": "Charlie", "mobileNum": "9001122334", "age": 17 }
]
`;
const users = JSON.parse(jsonData);
for (let i = 0; i < users.length; i++) {
    console.log(users[i].username + " - " + users[i].mobileNum + " - " + users[i].age);
}
const jsonOutput = JSON.stringify(users);
console.log("JSON Output:");
console.log(jsonOutput);