//reduce method: 
// reduce  method is really the most versatile and the most powerful of all array methods in javaScript.

//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not change the original array.
// reduce method takes callback function 

users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "noOfFriends": 20
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "noOfFriends": 50
    }
]

const totalFriends = users.reduce((acc, curr) => acc + curr.noOfFriends, 0);
console.log(totalFriends)