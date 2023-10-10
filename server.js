const express = require("express");

const app = express();
const port = "localhost";
const host = 3000;


app.listen(port, () => {
    console.log(`Der Server ist erreichbar unter http://localhost:${host}:${port}`);
});
