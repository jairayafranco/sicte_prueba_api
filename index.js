import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes); // http://localhost:5000/api

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});