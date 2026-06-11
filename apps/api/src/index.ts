import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const server = app.listen(3001, () => {
  console.log("API server is running on http://localhost:3001");
});

// Giữ process sống
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());