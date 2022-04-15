const db = require('../databases/users.json')
const usersURL = '' // You have to put the path to the users.json file assessment-backend\\server\\databases\\users.json';
const fs = require('fs');
const bcrypt = require('bcryptjs')
let globalID = db.length + 1;

module.exports = {
    addUser: (req, res) => {
        const { username, password } = req.body;
        
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        const newUser = {
            id: globalID,
            username: username,
            password: passwordHash
        };
        
        globalID++;
        
        db.push(newUser);
        
        editJson(db, 'Adding');

        res.status(200).send(newUser);
    },
    
    deleteUser: (req, res) => {
        const index = db.findIndex(e => e.id === +req.params.id);
        db.splice(index, 1);
        editJson(db, 'Deleting');
        console.log(db);
        res.status(200).send('Deleted successfully');
    },
    
    editUser: (req, res) => {
        const { username, password } = req.body;
        const index = db.findIndex(e => e.id === +req.params.id);
        console.log(index);
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        db[index].username = username;
        db[index].password = passwordHash;
        editJson(db, 'Editing');
        
        res.status(200).send('Updated successfully');
    }
}


const editJson = (database, message) => {
    fs.writeFile(usersURL, JSON.stringify(database), err => {
        if (err) {
            throw err;
        }
        console.log(`Done ${message} User`);
    })
}
// fs.readFile(usersURL, (err, data) => {
//     if (err) {
//         throw err;
//     }
//     const users = JSON.parse(data);
//     console.log(users);
// })