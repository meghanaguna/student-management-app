const express = require("express");
const cors = require("cors");
const app = express();
const port =3001;

app.use(cors());
app.use(express.json());

app.use("/students", require("./routes/studentRoutes"));

app.listen(port, () =>{
    console.log("app is listening");
})
