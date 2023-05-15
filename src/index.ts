import express from "express";
import router from "./controllers";
import env from "./config/env";
import { HttpError } from "./errors/HttpError";
import { Logger } from "./services/Logger";
import { DatabaseService } from "./services/DatabaseService";
import { userGateway } from "./gateways";
import { ArticleUseCases } from "./usecases/article";
import { AuthenticationUseCases } from "./usecases/authentication";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(helmet());

app.use(morgan("dev"));

app.use(cors());

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

const databaseService = new DatabaseService();
const articleUseCases = new ArticleUseCases();
const authenticationUseCases = new AuthenticationUseCases(userGateway);

app.locals.db = {
  dropDatabase: databaseService.dropDatabase.bind(databaseService),
  migrateDatabase: databaseService.migrateDatabase.bind(databaseService),
};

app.locals.articleUseCases = articleUseCases;
app.locals.authenticationUseCases = authenticationUseCases;

app.listen(env.PORT, () => {
  console.log(`Server listening on port ${env.PORT}`);
});

export default app;