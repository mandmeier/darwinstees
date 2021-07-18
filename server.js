
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import Routes from './routes/routes.js';
import {schedule} from './scripts/schedule.js'


const __dirname = path.resolve();

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json())
app.use('/', Routes);

app.use(express.static('public'));  
app.use('/designs', express.static('designs')); 

const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI;


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
    app.get('/', (req, res) => {
        res.send("Api running")
    });
}

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);


// schedule mutations
if (process.env.NODE_ENV === 'production') {
    schedule('0 0 12 * * *', 'lineax')
    schedule('0 0 15 * * *', 'ellipticus')
    schedule('0 0 18 * * *', 'mandalay')
}
