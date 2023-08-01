import pg from 'pg';

export class PostgresClient {
  constructor() {
    this.client = new pg.Client({
      user: 'postgres',
      password: '8galXOCluTBZFyr66cFQsF56IzsNd4CG'
    });
    this.init();
  }

  async init() {
    return await this.client.connect();
  }
}
