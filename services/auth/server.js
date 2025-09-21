const express = require("express");
const app = express();

app.use(express.json());

app.get("/auth", (req, res) => {
  res.json({ message: "Auth Service is running!" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Auth Service listening on port ${PORT}`);
});
