import express from "express";

import { getPageInfo } from "../controllers/pageInfo.js";

const router = express.Router();

router.get("/", getPageInfo);

export default router;
