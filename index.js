const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/rooms_list", async (req, res) => {
  try {
    const roomsList = await pool.query("SELECT * FROM room_list");
    res.json(roomsList.rows);
  } catch (err) {
    console.error(err.message);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});