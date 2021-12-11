const express = require("express");
const path = require("path");

const app = express();
const staticFilesPath = path.resolve(__dirname, "./public");
app.use("/", express.static(staticFilesPath));

app.use("/api/hello", async (req, res) => {
  res.send("Custom API endpoint");
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});