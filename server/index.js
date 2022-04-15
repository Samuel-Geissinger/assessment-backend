const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // When we want to be able to accept JSON.

app.use(cors());

const { getComplement } = require("./controllers/complimentControlls");
const { getFortunes } = require("./controllers/fortuneController");
const { addUser, deleteUser, editUser } = require("./controllers/userController");



app.get("/api/compliment", getComplement);
app.get("/api/fortune", getFortunes);

app.post("/api/user", addUser);
app.delete("/api/user/:id", deleteUser);
app.put("/api/user/:id", editUser)

const port = 4000;
app.listen(port, () => console.log(`Server running on ${port}`));
