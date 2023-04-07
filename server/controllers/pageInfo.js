import express from "express";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const router = express.Router();

export const getPageInfo = async (req, res) => {
  const { url } = req.query;
  const response = await fetch(url);
  if (!response.ok) return res.status(404).send(`Invalid url!`);

  const html = await response.text();
  const { document } = new JSDOM(html).window;

  // Count total number of words
  const textContent = document.body.textContent;
  const wordCount = textContent.trim().split(/\s+/g).length;

  // Get list of image URLs
  const imgElements = document.getElementsByTagName("img");
  const imgUrls = Array.from(imgElements).map((img) => img.src);

  //get title
  const title =
    document.querySelector("head title")?.textContent || "Not head";

  res.json({ wordCount, imgUrls, title });
};

export default router;
