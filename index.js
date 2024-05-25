import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import routerEmail from "./router/routerEmail.js";
import routerEbook from "./router/routerEbook.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/email", routerEmail);
app.use("/ebook", routerEbook);

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };

  res.sendFile("./router/ebookDb.json", options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", "ebookDb.js");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
