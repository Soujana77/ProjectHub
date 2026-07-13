const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const projectRoutes = require("./routes/project.routes");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Parapp.use("/api/projects", projectRoutes);se JSON FIRST
app.use(express.json());

// THEN register routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ProjectHub Backend Running 🚀",
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;