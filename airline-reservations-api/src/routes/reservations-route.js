import { PostgresClient } from '../services/postgres-service';
import { ReservationsProvider } from '../providers/reservations-provider';
import { UserProvider } from '../providers/user-provider';
import { transformNonMctRoutes } from '../adapters/non-mct-routes-adapter';
import { transformInterlineCarriers } from '../adapters/interline-carriers-adapter';
import express from 'express';

const reservationsRoute = express.Router();
const db = new PostgresClient();

reservationsRoute.use((req, res, next) => {
  const apiKey = req.header('apiKey');
  var authorized = UserProvider.verifyApiKey(apiKey);
  if (!authorized) {
    res.status(403).send('FORBIDDEN');
  }
  next();
});

reservationsRoute.get('/non-mct-routes', async (req, res) => {
  try {
    const response = await ReservationsProvider.readNonMctRoutes(db.client);
    if (response) {
      return res.send(transformNonMctRoutes(response?.rows));
    }
    return res.status(500).send('INTERNAL SERVER ERROR');
  } catch (e) {
    console.error(e);
    return res.status(500).send('INTERNAL SERVER ERROR');
  }
});

reservationsRoute.get('/interline-carriers', async (req, res) => {
  try {
    const response = await ReservationsProvider.readInterlineCarriers(
      db.client
    );
    if (response) {
      return res.send(transformInterlineCarriers(response?.rows));
    }
    return res.status(500).send('INTERNAL SERVER ERROR');
  } catch (e) {
    console.error(e);
    return res.status(500).send('INTERNAL SERVER ERROR');
  }
});

export default reservationsRoute;
