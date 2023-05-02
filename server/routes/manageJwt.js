import express from "express";

import { decodeJwt, encodeJwt } from "../controllers/manageJwt.js";

const router = express.Router();

router.get("/decode", decodeJwt);
router.get("/encode", encodeJwt);

export default router;
