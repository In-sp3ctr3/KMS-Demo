import express from "express";
import router from "./controllers";
import env from "./config/env";
import { HttpError } from "./errors/HttpError";
import { Logger } from "./services/Logger";
import { pool } from "./config/index"

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.status).send(err.message);
  } else {
    const logger = new Logger();
    logger.error("Unhandled error", err);
    res.status(500).send("Internal server error");
  }
});

app.locals.db = {
  dropDatabase: async () => {
    const client = await pool.connect();
    try {
      await client.query("DROP TABLE IF EXISTS articles");
    } finally {
      client.release();
    }
  },
};

app.listen(env.PORT, () => {
  console.log(`Server listening on port ${env.PORT}`);
});

export default app;