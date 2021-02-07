const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./db');

mongoose.promise = global.promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=>{
        console.log("Database is Connected")},
        err => {console.log("Error " + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log("Server is Started in port : " , PORT);
});
