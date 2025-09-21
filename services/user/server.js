const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json({ message: "User Service is running!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`User Service listening on port ${PORT}`);
});
