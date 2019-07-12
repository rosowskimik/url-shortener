const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.set('trust proxy', 1);
//Connect to DB
connectDB();

//Middleware
app.use(express.json({ extended: false }));
app.use('/api/', require('./middleware/apiLimiter'));

//Routes
app.use('/api/', require('./routes/shorten'));
app.use('/api/', require('./routes/index'));

const PORT = process.env.PORT | 5000;

app.listen(5000, () => {
  console.log(`App started on port ${PORT}`);
});
