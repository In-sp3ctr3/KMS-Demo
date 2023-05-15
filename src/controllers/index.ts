import { Router } from "express";
import { createArticleHandler } from "./articles/createArticleHandler";
import { getArticleByIdHandler } from "./articles/getArticleByIdHandler";
import { getArticlesHandler } from "./articles/getArticlesHandler";

const router = Router();

router.get("/articles", getArticlesHandler);
router.get("/articles/:id", getArticleByIdHandler);
router.post("/articles", createArticleHandler);

export default router;