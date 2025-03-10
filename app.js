import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Management System API!");
});

app.listen(3000, () => {
  console.log(
    "Subscription Management System API is running on http://localhost:3000"
  );
});

export default app;
