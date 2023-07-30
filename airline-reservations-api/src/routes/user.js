import express from 'express';
import UserProvider from '../providers/user';
import XmlService from '../services/xml-service';

const userRoute = express.Router();

userRoute.get('/verify/:apiKey', (req, res) => {
  const apiKey = req.params.apiKey;
  try {
    res.send(UserProvider.verifyApiKey(apiKey));
    XmlService.parseXmlFiles();
  } catch (e) {
    console.error(e);
    res.status(403).send();
  }
});

export default userRoute;
