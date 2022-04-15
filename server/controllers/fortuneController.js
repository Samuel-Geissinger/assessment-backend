const db = require('../databases/fortune.json');

module.exports = {
    getFortunes: (req, res) => {
        const randomFortunes = Math.floor(Math.random() * db.length);
        res.status(200).send(db[randomFortunes].fortune);
    }
}