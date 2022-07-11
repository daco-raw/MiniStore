import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));

import indexRouter from "./routes/app.js";

/* Settings views server rendering */
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.use(indexRouter);

app.use(express.static(join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
