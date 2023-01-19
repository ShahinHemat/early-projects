function getUsers() {
    return fetch('http://localhost:3000/user') //Fetch takes two arguments, but when you dont write a second argument, it defaults to {method: 'GET'}
    .then(function (res) {
       return res.json()
    });
}

/* Calling the function getUsers():
getUsers()
.then(console.log) 
*/


function getUser(userId) {
    return fetch(`http://localhost:3000/user/${userId}`)
    .then(function (res) {
        return res.json();
    })
}

/* Calling the function getUser(userId)
getUser("097569a9-02d8-4183-aeec-9daadc0de48c").then(console.log); 
*/

function createUser(firstName, lastName, username, email) {
    return fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email
        })
    })
    .then(function (res) {
        return res.json();
    })
}

/* Creating a user by calling createUser function
createUser("Lise", "Hemat", "liseEhemat", "lise@online.no"); 
*/


function updateUser(userId, updates) {
    return fetch(`http://localhost:3000/user/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
    })
    .then(function (res) {
        return res.json();
    })
}

/* Updating user with updateUser function 
updateUser("5180e742-1dce-44eb-a1bd-f7406e454ea4", {
    email: 'Lise.en@online.no'
}).then(console.log) 
*/

function deleteUser(userId) {
    return fetch(`http://localhost:3000/user/${userId}`, {
        method: 'DELETE',
    })
    .then(function (res) {
        res.text()
    });
}

/* Deleting user with deleteUser function
deleteUser("097569a9-02d8-4183-aeec-9daadc0de48c"); 
*/


