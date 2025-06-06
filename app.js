require('dotenv').config();
const express = require("express");
const app = express();
const { userDB, queryDB } = require("./public/connection");
const User = require("./public/userschema");
const Query = require("./public/queryschema");
app.use(express.json());

// Require your admin API and user API files
const adminRoutes = require("./admin/admin");
const userRoutes = require("./public/user");  // If user.js has routes
// You can add more as needed

app.use("/admin", adminRoutes);

app.use("/user", userRoutes); // optional

const waitForDBConnections = Promise.all([
  new Promise((resolve, reject) => {
    userDB.once("open", () => {
      console.log("User DB connected");
      resolve();
    });
    userDB.on("error", (err) => {
      console.error("User DB connection error:", err);
      reject(err);
    });
  }),
  new Promise((resolve, reject) => {
    queryDB.once("open", () => {
      console.log("Query DB connected");
      resolve();
    });
    queryDB.on("error", (err) => {
      console.error("Query DB connection error:", err);
      reject(err);
    });
  }),
]);

waitForDBConnections.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to one or more DBs", err);
});
