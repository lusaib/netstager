import express from "express";
import mongoose from "mongoose";

import insightModel from "../models/insightModel.js";

const router = express.Router();

export const getInsights = async (req, res) => {
  try {
    const insights = await insightModel.find();

    res.status(200).json(insights);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getInsight = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const post = await PostMessage.findById(id);

//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const createInsight = async (req, res) => {
  const { url, title, mediaUrls, wordCount } = req.body;

  const newInsight = new insightModel({ url, title, mediaUrls, wordCount });

  try {
    await newInsight.save();

    res.status(201).json(newInsight);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const updateInsight = async (req, res) => {
//     const { id } = req.params;
//     const { url, title, mediaUrls , favoriteFlag } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

export const deleteInsight = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No insight with id: ${id}`);

  await insightModel.findByIdAndRemove(id);

  res.json({ message: "Insight deleted successfully." });
};

export const addToFavorite = async (req, res) => {
  const { id } = req.params;
  const { favoriteFlag } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No insight with id: ${id}`);

  const updateInsight = await insightModel.findByIdAndUpdate(
    id,
    { favoriteFlag: favoriteFlag },
    { new: true }
  );

  res.json(updateInsight);
};

export default router;
