import { UserProvider } from '../providers/user-provider';
import { XmlService } from '../services/xml-service';
import express from 'express';

const userRoute = express.Router();

userRoute.get('/verify/:apiKey', (req, res) => {
  const apiKey = req.params.apiKey;
  const response = UserProvider.verifyApiKey(apiKey);
  if (response) {
    XmlService.parseXmlFiles();
    res.send(response);
  } else {
    res.status(403).send('FORBIDDEN');
  }
});

export default userRoute;
