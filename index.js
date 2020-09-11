const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.json({
//     message: "message",
//   });
// });

// app.get("/url/:id", (req, res) => {
//   res.json({
//     message: "get a short url by id",
//   });
// });

// app.get("/:id", (req, res) => {
//   res.json({
//     message: "redirect to url ",
//   });
// });

// app.post("/url", (req, res) => {
//   res.json({
//     message: "create a short url",
//   });
// });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listen at http://localhost:${port}`);
});
