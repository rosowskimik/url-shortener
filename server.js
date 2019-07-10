const express = require('express');
const connectDB = require('./config/db');

const app = express();
//Connect to DB
connectDB();

//Middleware
app.use(express.json({ extended: false }));

//Routes
app.use('/', require('./routes/shorten'));
app.use('/', require('./routes/index'));

const PORT = process.env.PORT | 5000;

app.listen(5000, () => {
  console.log(`App started on port ${PORT}`);
});
