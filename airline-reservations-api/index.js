import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import reservationsRoute from './src/routes/reservations-route';
import userRoute from './src/routes/user-route';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/* Routes */
app.use('/user', userRoute);
app.use('/reservations', reservationsRoute);

app.listen(port, () => {
  console.log('listening on port 3000');
});
