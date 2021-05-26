import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './routes/routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});