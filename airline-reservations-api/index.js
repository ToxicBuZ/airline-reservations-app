import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './src/routes/user';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/* Routes */
app.use('/user', userRoute);

app.listen(port, () => {
  console.log('listening on port 3000');
});
