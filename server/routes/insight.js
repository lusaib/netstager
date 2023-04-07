import express from "express";

import {
  getInsights,
  createInsight,
  deleteInsight,
  addToFavorite,
} from "../controllers/insight.js";

const router = express.Router();

router.get("/", getInsights);
router.post("/", createInsight);
router.delete("/:id", deleteInsight);
router.patch("/:id/favorite", addToFavorite);

export default router;