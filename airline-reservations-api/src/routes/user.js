import express from 'express';
import UserProvider from '../providers/user';

const userRoute = express.Router();

userRoute.get('/verify/:apiKey', (req, res) => {
  const apiKey = req.params.apiKey;
  res.send(
    UserProvider.verifyApiKey(apiKey).catch((err) => {
      console.error(err);
      res.status(403).send();
    })
  );
});

export default userRoute;
