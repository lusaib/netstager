import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

//encode token
export const encodeJwt = (req, res) => {
  try {
    //create token
    const token = jwt.sign(
      { userName: 1, password: "hai" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
};

//decode
export const decodeJwt = (req, res) => {
  // if (!req.headers.authorization) {
  //   return res.status(401).send("Unauthorized request");
  // }
  // const token = req.headers["authorization"].split(" ")[1];
  // if (!token) {
  //   return res.status(401).send("Access denied. No token provided.");
  // }
  try {
    const { token } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded.user;

    res.status(200).json(decoded);
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};

export default router;
