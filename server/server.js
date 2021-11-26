const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const general = require("./routes/general");
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const cors = require('cors');



app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
  }


));


mongoose.connect('mongodb+srv://toorDeniz:toorDeniz@cluster0.ysmk8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("MongoDB connected");
    }
  }

);

app.use(general);