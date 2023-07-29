import userRoute from './src/routes/user.js';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('BOOM');
});

app.use(express.json());

app.use('/user', userRoute);

app.listen(port, () => {
  console.log('listening on port 3000');
});
