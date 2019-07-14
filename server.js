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

if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(5000, () => {
  console.log(`App started on port ${PORT}`);
});
