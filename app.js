require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;
const routes = require("./Routes")

// DataBase Connection: 
const mongoose = require("mongoose");
const db = process.env.DATABASE_URL

mongoose.set('strictQuery', false)
mongoose.connect(db)
.then(() => console.log("MongoDB connected : " + db.split('/')[db.split('/').length-1]))
.catch((e) => console.log(e));

app.use(express.json());
app.use('/api', routes);

app.get("/", (req, res) => {
    res.json({
        Stauts: 200,
        msg: `Welcome to the backend API Server`,
    })
});

app.listen(PORT, console.log(`Server is running on ${PORT}`));