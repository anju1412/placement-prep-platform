// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");


// dotenv.config();

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Server running");
// });

// const PORT = process.env.PORT || 5000;

// connectDB();

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");

// dotenv.config();

// const app = express();

// // Connect MongoDB
// connectDB();

// // Middleware (ADD HERE)
// app.use(express.json());

// // Routes (ADD HERE)
// app.use("/api/auth", authRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.send("Server running");
// });

// // Start server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes"); // make sure this line exists

dotenv.config();
const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());

// Connect auth routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
