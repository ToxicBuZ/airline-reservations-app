import { PostgresClient } from '../services/postgres-service';
import { ReservationsProvider } from '../providers/reservations-provider';
import { transformNonMctRoutes } from '../adapters/non-mct-routes-adapter';
import { transformInterlineCarriers } from '../adapters/interline-carriers-adapter';
import express from 'express';

const reservationsRoute = express.Router();

const db = new PostgresClient();

reservationsRoute.get('/non-mct-routes/:apiKey', async (req, res) => {
  const apiKey = req.params.apiKey;
  if (apiKey === process.env.API_KEY) {
    const response = await ReservationsProvider.readNonMctRoutes(db.client);
    if (response) {
      res.send(transformNonMctRoutes(response?.rows));
    }
  } else {
    res.status(403).send('FORBIDDEN');
  }
});

reservationsRoute.get('/interline-carriers/:apiKey', async (req, res) => {
  const apiKey = req.params.apiKey;
  if (apiKey === process.env.API_KEY) {
    const response = await ReservationsProvider.readInterlineCarriers(
      db.client
    );
    if (response) {
      res.send(transformInterlineCarriers(response?.rows));
    }
  } else {
    res.status(403).send('FORBIDDEN');
  }
});

export default reservationsRoute;
