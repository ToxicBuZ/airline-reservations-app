import { PostgresClient } from '../services/postgres-service';

import { ReservationsProvider } from '../providers/reservations-provider';
import { UserProvider } from '../providers/user-provider';
import { XmlService } from '../services/xml-service';
import express from 'express';

const userRoute = express.Router();
const db = new PostgresClient();

userRoute.get('/verify/:apiKey', async (req, res) => {
  const apiKey = req.params.apiKey;

  const response = UserProvider.verifyApiKey(apiKey);

  if (response) {
    await XmlService.parseXmlFiles();

    const reservationsTableExists =
      await ReservationsProvider.checkIfReservationsTableExists(db.client);

    if (reservationsTableExists) {
      res.send(response);
    }
  } else {
    res.status(403).send('FORBIDDEN');
  }
});

export default userRoute;
