const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

let users = [];


function getUsers() {
    return users;
}

function getUser(userId) {
    const selectedUser = users.find(function (user) {
        return user.id == userId;
    });
    return selectedUser;
}

function createUser(firstName, lastName, username, email) {
    const newUser = {
        id: uuidv4(),
        firstName,
        lastName,
        username,
        email
    };
    users.push(newUser);
    save();
    return newUser;
}

function updateUser(userId, updates) {
    users = users.map(function (user) {
        if (user.id == userId) {
            return {
                ...user,
                ...updates
            };
        } else {
            return user;
        }
    });
    save();
    return getUser(userId);
}

function deleteUser(userId) {
    users = users.filter(function (user) {
        return user.id != userId
    });
    save();
}

function load() {
    const jsonData = fs.readFileSync('users.json');
    users = JSON.parse(jsonData);
}

function save() {
    fs.writeFileSync('users.json', JSON.stringify(users));
}


//Load data from file('users.json') into memory
load();

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}