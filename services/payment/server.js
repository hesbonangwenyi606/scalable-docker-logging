const express = require("express");
const app = express();

app.use(express.json());

app.get("/payments", (req, res) => {
  res.json({ message: "Payment Service is running!" });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Payment Service listening on port ${PORT}`);
});
