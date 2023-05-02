import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import insightRoutes from "./routes/insight.js";
import pageInfoRoutes from "./routes/pageInfo.js";
import manageJwt from "./routes/manageJwt.js";

import { config } from 'dotenv';
config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/insight", insightRoutes);
app.use("/pageinfo", pageInfoRoutes);
app.use("/jwt", manageJwt);

const CONNECTION_URL =
  "mongodb+srv://lusaib:4XDXJYwe4xBcwSxc@netstager.zv7sykp.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
