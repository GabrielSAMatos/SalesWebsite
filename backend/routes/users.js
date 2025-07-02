class Users {
    static users = [
        {
            id: 1,
            name: "Gabriel",
            age: 25
        },
        {
            id: 2,
            name: "dwadawd",
            age: 103
        }
    ]

    static list(){
        return JSON.stringify(Users.users);
    }

    static add(){
        const user1 = {
            id: 3,
            name: "user3",
            age: 33
        }

        Users.users.push();  
    }
} 

module.exports = Users;