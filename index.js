const express = require("express")
const mongoose = require("mongoose")
const mdcompr = require('./route/mdcompr')
const PORT = 8000


const app = express();
const dbUrl = "mongodb+srv://troyunzio:manshu55@partsdb.fbukf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { console.log("connected to db!") })
    .catch((err) => { console.log(err) })

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.json("Server running!")
})

app.use('/mdcomp', mdcompr);


