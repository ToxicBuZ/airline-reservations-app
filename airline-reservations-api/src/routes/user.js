import { Router } from 'express';
import UserProvider from '../providers/user';

const userRoute = Router();
const userProvider = new UserProvider();

userRoute.get('/ping', function (req, res) {
  res.send(userProvider.sendPong());
});

export default userRoute;
