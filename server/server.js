const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const app = express();

app.use(cors());

app.post('/api/authcheck', jsonParser, (req, res) => {
    const user = req.body.user;
    if (user.username === "admin" && user.password === "1234") {
        res.status(200).send({ username: user.username, firstName: "John", lastName: "Doe", age: "10", email: "john@examle.com"});
    } else {
        res.status(401).send({ message: "Invalid Username/Password!!!" });
    }
})

const port = 8080;

app.listen(port, () => {
    console.log(`server is listenling on port ${port}`);
})