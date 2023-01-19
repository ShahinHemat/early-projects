const express = require('express');
const cors = require('cors');
const app = express();
const userDB = require('./userDB');

app.use(cors());
app.use(express.json());


app.get('/user/:userId', function (req, res) {
    const selectedUser = userDB.getUser(req.params.userId);

    if (!selectedUser) {
        res.status(404).send('Not found')
    } else {
        res.json(selectedUser);
    }
});

app.get('/user', function (req, res) {
    const users = userDB.getUsers();
    res.json(users);
});

/* Example users:

{
    "firstName": "Shahin",
    "lastName": "Hemat",
    "username": "shahinHemat",
    "email": "shahinhemat@gmail.com"
}

{
    "firstName": "Lise",
    "lastName": "Endregard",
    "username": "liseEndregard",
    "email": "lise.en@online.no"
}
*/


app.post('/user', function (req, res) {
    const newUser = userDB.createUser(
        req.body.firstName,
        req.body.lastName,
        req.body.username,
        req.body.email
        );
    res.json({ id: newUser.id});
});

app.put('/user/:userId', function (req, res) {
    const updatedUser = userDB.updateUser(req.params.userId, req.body);
    if(!updatedUser) {
        res.status(404).send('Cannot update user - not found');
    } else {
        res.json(updatedUser); //You could also write "send" instead of json. The "send" will see if what you sent is json or not, and if json, it reads it as json.
    }
});

app.delete('/user/:userId', function (req, res) {
    userDB.deleteUser(req.params.userId);
    res.status(200).end();
});






app.listen(3000, function () {
    console.log('Server listening on port 3000');
});